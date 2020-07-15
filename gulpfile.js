const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function css() {
    return src('./*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest('./'), { sourcemaps: true })
        .pipe(browserSync.stream());
}

function browser() {
    browserSync.init({
        host: "localhost",
        port: 8888,
        notify: false,
        files: [
            './**/*.php'
        ]
    });

    watch('./*.scss', css);
    /* watch('./assets/js/*.js').on('change', browserSync.reload); */
}

exports.css = css;
/* exports.js = js; */
exports.default = browser;