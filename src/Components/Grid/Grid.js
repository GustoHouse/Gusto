import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from 'react'

import './Grid.scss';

export default function Grid() {

    gsap.registerPlugin(ScrollTrigger);

    const gridRef = useRef(null); // create a ref for the root level element (we'll use it later)

    useEffect(() => {
      
      // -- ANIMATION CODE HERE --

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "bottom bottom", // end after scrolling 500px beyond the start
                scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });

        tl.set(gridRef.current, {
            x: "-50%"
        });

        tl.to(gridRef.current, {
            y: "-100"
        });
      
        return () => { 
            // cleanup code (optional)
        }
      
    }, []);

    return (
        <svg ref={gridRef} className="grid" width="1440" height="400" viewBox="0 0 1440 400" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M670.376 1H699.294L698.173 3.67531H668.289L670.377 1.0001L670.376 1ZM669.152 1H641.391L641.391 1.00009L638.324 3.67531H667.065L669.152 1ZM611.403 1H639.937L636.87 3.67531H607.375L611.403 1ZM609.677 1H582.417L577.435 3.67531H605.65L609.677 1ZM552.432 1H580.391L575.409 3.67531H546.49L552.432 1ZM550.085 1H523.446L516.528 3.67531H544.144L550.085 1ZM493.461 1H520.761L513.842 3.67531H485.595L493.461 1ZM490.44 1H463.476L454.611 3.67531H482.574L490.44 1ZM434.49 1H460.095L451.23 3.67531H424.684L434.49 1ZM430.767 1H404.505L393.777 3.67531H420.961L430.767 1ZM373.52 1H400.445L389.717 3.67531H362.021L373.52 1ZM369.177 1H344.535L331.894 3.67531H357.678L369.177 1ZM314.55 1H339.77L327.13 3.67531H301.111L314.55 1ZM309.49 1H283.565L269.266 3.67531H296.052L309.49 1ZM254.579 1H278.187L263.888 3.67531H239.432L254.579 1ZM248.887 1H226.593L210.15 3.67531H233.739L248.887 1ZM197.608 1H220.42L203.977 3.67531H180.544L197.608 1ZM191.203 1H167.622L167.622 1.00011L149.754 3.67531H174.14L191.203 1ZM138.636 1H160.919L143.051 3.67531H119.328L138.636 1.0001L138.636 1ZM131.397 1H107.652L107.652 1.00007L87.1653 3.67531H112.089L131.397 1ZM78.6659 1H99.9736L79.4868 3.67531H58.3986L78.6659 1.00008L78.6659 1ZM71.0695 1H47.6813L47.6813 1.00008L26.3097 3.67531H50.8016L71.0695 1ZM19.6951 1H39.6735L18.3012 3.67531H0.704607V4.67531H10.3125L0.479116 5.90623L0.704607 6.88047L18.321 4.67531H43.2257L17.3895 8.08562H0.704607V9.08562H9.81361L0.467503 10.3193L0.704607 11.2908L17.4106 9.08562H38.0563L6.31249 13.231H0.704607V13.9633L0.469896 13.9939L0.704607 14.966L6.33329 14.231H35.9055L0.456431 19.1427L0.704607 20.1114H33.2756L0.437801 25.028L0.704607 25.9918H31.8057L0.426169 30.9117L0.704607 31.8722L38.2099 25.9918H66.8151L27.7836 32.3423H0.704607V33.3423H21.6374L0.416524 36.7949L0.704607 37.7526L27.8111 33.3423H65.7638L25.6452 40.4278H0.704607V41.4278H19.9832L0.394179 44.8875L0.704607 45.8381L25.6759 41.4278H62.1131L20.3145 49.2484H0.704607V50.2484H14.9698L0.377667 52.9786L0.704607 53.9237L20.3477 50.2484H62.1064L15.4376 59.5391H0.704607V60.5391H10.4144L0.359172 62.5409L0.704607 63.4793L15.4738 60.5391H58.4547L4.13814 72.0349H0.704607V72.7616L0.340185 72.8388L0.704607 73.77L4.17766 73.0349H59.5501L0.309446 86.8173L0.704607 87.7359V88.471H49.6986L0.285867 100.794L0.704607 101.702L53.7587 88.471H110.143L49.1448 105.112H0.704607V106.112H45.4793L0.254229 118.45L0.704607 119.343L49.2024 106.112H111.799L39.6074 127.899H0.704607V128.899H36.2939L0.217328 139.786L0.704607 140.66L39.6747 128.899H114.389L33.0417 156.566H0.704607V157.566H30.1014L0.172258 167.745L0.704607 168.591L33.1228 157.566H115.874L21.5151 194.053H0.704607V195.053H18.9291L0.12299 202.325L0.704607 203.139L21.6143 195.053H119.15L7.10803 245.507H0.704607V246.507H4.88733L0.0647466 248.678L0.704607 249.447L7.23379 246.507H123.233L0 312.687L0.704607 313.396L125.259 246.507H240.118L124.338 323.422H0.704607V324.422H122.833L10.9237 398.766L11.6992 399.397L124.559 324.422H269.122L183.765 398.87L184.615 399.397L270.576 324.422H416.803L358.608 399.008L359.529 399.397L418.028 324.422H563.789L532.469 399.176L533.444 399.397L564.857 324.422H711.285L707.359 399.369L708.358 399.397L712.286 324.422H858.91L882.286 399.563L883.273 399.397L859.948 324.422H1005.42L1056.25 399.74L1057.19 399.397L1006.59 324.422H1152.04L1230.23 399.886L1231.1 399.397L1153.42 324.422H1298.61L1404.22 400L1405.02 399.397L1300.25 324.422H1440V323.422H1298.85L1191.37 246.507H1306.66L1439.27 322.17L1440 321.482L1308.59 246.507H1423.77L1439.34 253.875L1440 253.122L1426.02 246.507H1440V245.507H1423.91L1317.3 195.053H1413.83L1439.4 205.409L1440 204.609L1416.41 195.053H1440V194.053H1413.94L1323.84 157.566H1407.86L1439.45 168.694L1440 167.856L1410.78 157.566H1440V156.566H1407.94L1329.38 128.899H1399.47L1439.5 141.523L1440 140.66L1402.71 128.899H1440V127.899H1399.54L1330.47 106.112H1394.87L1439.54 118.759L1440 117.873L1398.46 106.112H1440V105.112H1394.93L1336.15 88.471H1390.33L1439.57 101.135L1440 100.232L1394.27 88.471H1440V87.471H1390.39L1334.26 73.0349H1385.61L1439.6 85.713L1440 84.7957L1389.92 73.0349H1440V72.0349H1439.81L1440 71.5648L1389.09 60.5391H1434.98L1439.65 61.4767L1440 60.5391V59.5391H1435.01L1388.69 50.2484H1434.57L1439.68 51.1945L1440 50.2484V49.2484H1434.6L1392.38 41.4278H1425.94L1439.69 43.8488L1440 42.8979L1431.65 41.4278H1440V40.4278H1425.98L1385.75 33.3423H1420.68L1439.71 36.5033L1440 35.5474L1426.73 33.3423H1440V32.3423H1420.71L1382.5 25.9918H1414.88L1439.72 29.8923L1440 28.932L1421.27 25.9918H1440V24.9918H1414.9L1383.82 20.1114H1413.01L1439.74 24.0169L1440 23.0516L1419.88 20.1114H1440V19.1114H1413.03L1379.63 14.231H1406.26L1439.75 18.8749L1440 17.9062L1413.49 14.231H1438.03L1439.76 14.4658L1439.82 14.231H1440V13.4959V13.231H1438.05L1407.55 9.08562H1432.32L1439.77 10.0577L1440 9.08562V8.08562H1432.34L1406.2 4.67531H1427.79L1439.75 6.37744L1440 5.41037L1434.84 4.67531H1440V3.67531H1427.81L1409.02 1.0001L1408.76 1.96717L1420.76 3.67531H1398.53L1378.03 1.00012L1377.8 1.97223L1390.85 3.67531H1367.73L1348.05 1.00015L1347.8 1.97L1360.35 3.67531H1337.36L1318.06 1.00017L1317.81 1.96885L1330.12 3.67531H1307.38L1289.07 1.00021L1288.81 1.9656L1300.52 3.67531H1279.13L1262.09 1.00026L1261.81 1.96062L1272.73 3.67531H1248.2L1232.1 1.00013L1231.81 1.95602L1242.15 3.67531H1217.31L1202.12 1.00016L1201.81 1.95101L1211.6 3.67531H1188.57L1174.13 1.00018L1173.81 1.94623L1183.14 3.67531H1156.48L1143.15 1.00023L1142.8 1.93783L1151.46 3.67531H1126.51L1114.16 1.00007L1113.79 1.92841L1121.85 3.67531H1094.57L1083.17 1.00007L1082.78 1.91733L1090.26 3.67531H1064.59L1054.19 1.00007L1053.76 1.90314L1060.65 3.67531H1036.65L1027.2 1.00008L1026.74 1.88602L1033.06 3.67531H1005.7L997.217 1.00007L996.713 1.8639L1002.46 3.67531H973.828L966.232 1.00009L965.686 1.83808L970.903 3.67531H943.852L937.246 1.00007L936.647 1.80052L941.276 3.67531H912.914L907.261 1.00009L906.602 1.75264L910.665 3.67531H882.964L878.275 1.00004L877.549 1.688L881.033 3.67531H852.028L848.29 1.0001L847.492 1.60303L850.388 3.67531H821.076L818.304 1.00011L817.432 1.48897L819.697 3.67531H790.124L788.319 1.00076L787.38 1.34363L788.954 3.67531H760.165L759.333 1.00035L758.347 1.16626L759.128 3.67531H729.092L729.232 1H1440V0H0.704587V1H11.0646L0.494655 2.22728L0.704587 3.20499L19.6951 1ZM50.8227 4.67531L24.9865 8.08562H45.714L71.8291 4.67531H50.8227ZM53.3925 8.08562L79.5076 4.67531H104.871L80.2583 8.08562H53.3925ZM13.991 13.231L45.7348 9.08562H73.041L43.1228 13.231H13.991ZM112.111 4.67531L87.4979 8.08562H113.595L136.372 4.67531H112.111ZM80.2806 9.08562L50.3625 13.231H79.2293L106.916 9.08562H80.2806ZM43.1452 14.231L7.9219 19.1114H39.9545L72.5503 14.231H43.1452ZM120.298 8.08562L143.075 4.67531H167.762L146.011 8.08562H120.298ZM85.9329 13.231L113.619 9.08562H139.633L113.194 13.231H85.9329ZM46.6581 19.1114L79.254 14.231H106.816L75.6889 19.1114H46.6581ZM7.38352 24.9918L39.9792 20.1114H69.3109L38.1837 24.9918H7.38352ZM174.166 4.67531L152.415 8.08562H176.87L197.83 4.67531H174.166ZM146.037 9.08562L119.598 13.231H145.246L170.724 9.08562H146.037ZM113.22 14.231L82.0931 19.1114H109.103L139.099 14.231H113.22ZM75.7151 20.1114L44.5879 24.9918H72.9613L102.957 20.1114H75.7151ZM183.044 8.08562L204.004 4.67531H228.077L208.768 8.08562H183.044ZM151.419 13.231L176.897 9.08562H203.106L179.635 13.231H151.419ZM115.277 19.1114L145.273 14.231H173.973L146.34 19.1114H115.277ZM79.135 24.9918L109.131 20.1114H140.678L113.045 24.9918H79.135ZM33.9573 32.3423L72.9888 25.9918H107.383L71.4258 32.3423H33.9573ZM233.77 4.67531L214.46 8.08562H240.317L258.544 4.67531H233.77ZM208.798 9.08562L185.327 13.231H212.816L234.972 9.08562H208.798ZM179.665 14.231L152.032 19.1114H181.388L207.472 14.231H179.665ZM146.37 20.1114L118.737 24.9918H149.959L176.043 20.1114H146.37ZM113.075 25.9918L77.1185 32.3423H110.673L144.614 25.9918H113.075ZM71.4565 33.3423L31.3379 40.4278H67.4578L105.328 33.3423H71.4565ZM245.695 8.08562L263.922 4.67531H291.028L273.898 8.08562H245.695ZM218.194 13.231L240.35 9.08562H268.875L248.052 13.231H218.194ZM186.765 19.1114L212.85 14.231H243.029L218.513 19.1114H186.765ZM155.337 24.9918L181.421 20.1114H213.49L188.975 24.9918H155.337ZM116.05 32.3423L149.992 25.9918H183.952L152.052 32.3423H116.05ZM72.8357 40.4278L110.706 33.3423H147.029L111.437 40.4278H72.8357ZM25.6924 49.2484L67.491 41.4278H106.414L67.1296 49.2484H25.6924ZM296.088 4.67531L278.957 8.08562H306.292L322.405 4.67531H296.088ZM273.934 9.08562L253.111 13.231H281.98L301.567 9.08562H273.934ZM248.088 14.231L223.573 19.1114H254.196L277.256 14.231H248.088ZM218.55 20.1114L194.035 24.9918H226.412L249.471 20.1114H218.55ZM189.011 25.9918L157.112 32.3423H191.682L221.687 25.9918H189.011ZM152.088 33.3423L116.496 40.4278H153.478L186.957 33.3423H152.088ZM111.473 41.4278L72.189 49.2484H111.802L148.753 41.4278H111.473ZM67.1658 50.2484L20.497 59.5391H63.1796L107.077 50.2484H67.1658ZM311.056 8.08562L327.169 4.67531H353.379L338.721 8.08562H311.056ZM286.745 13.231L306.331 9.08562H334.422L316.605 13.231H286.745ZM258.961 19.1114L282.02 14.231H312.306L291.329 19.1114H258.961ZM231.176 24.9918L254.236 20.1114H287.031L266.053 24.9918H231.176ZM196.446 32.3423L226.452 25.9918H261.755L234.459 32.3423H196.446ZM158.243 40.4278L191.721 33.3423H230.16L199.705 40.4278H158.243ZM116.566 49.2484L153.518 41.4278H195.407L161.791 49.2484H116.566ZM67.944 59.5391L111.842 50.2484H157.493L117.559 59.5391H67.944ZM8.90255 72.0349L63.2191 60.5391H113.261L63.8484 72.0349H8.90255ZM357.723 4.67531L343.064 8.08562H372.033L385.708 4.67531H357.723ZM338.766 9.08562L320.948 13.231H351.401L368.023 9.08562H338.766ZM316.65 14.231L295.673 19.1114H327.821L347.391 14.231H316.65ZM291.374 20.1114L270.397 24.9918H304.241L323.811 20.1114H291.374ZM266.099 25.9918L238.802 32.3423H274.767L300.232 25.9918H266.099ZM234.504 33.3423L204.048 40.4278H242.345L270.757 33.3423H234.504ZM199.75 41.4278L166.135 49.2484H206.976L238.335 41.4278H199.75ZM161.837 50.2484L121.903 59.5391H165.711L202.966 50.2484H161.837ZM117.604 60.5391L68.192 72.0349H115.605L161.702 60.5391H117.604ZM63.8937 73.0349L1.84342 87.471H53.7085L111.595 73.0349H63.8937ZM376.093 8.08562L389.768 4.67531H417.295L404.795 8.08562H376.093ZM355.461 13.231L372.083 9.08562H401.129L385.935 13.231H355.461ZM331.881 19.1114L351.451 14.231H382.269L364.38 19.1114H331.881ZM308.302 24.9918L327.871 20.1114H360.715L342.826 24.9918H308.302ZM278.827 32.3423L304.292 25.9918H339.16L315.882 32.3423H278.827ZM246.405 40.4278L274.817 33.3423H312.217L286.245 40.4278H246.405ZM211.036 49.2484L242.395 41.4278H282.579L253.913 49.2484H211.036ZM169.772 59.5391L207.026 50.2484H250.248L216.193 59.5391H169.772ZM119.665 72.0349L165.762 60.5391H212.527L170.389 72.0349H119.665ZM57.7686 87.471L115.655 73.0349H166.724L113.808 87.471H57.7686ZM421.018 4.67531L408.518 8.08562H436.616L447.917 4.67531H421.018ZM404.853 9.08562L389.658 13.231H419.567L433.303 9.08562H404.853ZM385.992 14.231L368.103 19.1114H400.082L416.253 14.231H385.992ZM364.438 20.1114L346.549 24.9918H380.597L396.768 20.1114H364.438ZM342.883 25.9918L319.605 32.3423H356.24L377.283 25.9918H342.883ZM315.94 33.3423L289.968 40.4278H329.448L352.927 33.3423H315.94ZM286.302 41.4278L257.636 49.2484H300.221L326.135 41.4278H286.302ZM253.971 50.2484L219.916 59.5391H266.122L296.907 50.2484H253.971ZM216.25 60.5391L174.112 72.0349H224.716L262.808 60.5391H216.25ZM170.447 73.0349L117.532 87.471H173.568L221.402 73.0349H170.447ZM113.866 88.471L52.8679 105.112H115.112L170.254 88.471H113.866ZM439.997 8.08562L451.297 4.67531H479.633L469.606 8.08562H439.997ZM422.948 13.231L436.684 9.08562H466.666L454.478 13.231H422.948ZM403.463 19.1114L419.634 14.231H451.538L437.188 19.1114H403.463ZM383.978 24.9918L400.149 20.1114H434.248L419.898 24.9918H383.978ZM359.621 32.3423L380.664 25.9918H416.958L398.286 32.3423H359.621ZM332.829 40.4278L356.308 33.3423H395.346L374.513 40.4278H332.829ZM303.601 49.2484L329.516 41.4278H371.573L348.578 49.2484H303.601ZM269.503 59.5391L300.288 50.2484H345.638L318.322 59.5391H269.503ZM228.097 72.0349L266.189 60.5391H315.381L281.581 72.0349H228.097ZM176.948 87.471L224.783 73.0349H278.641L236.195 87.471H176.948ZM118.493 105.112L173.635 88.471H233.255L184.326 105.112H118.493ZM42.9883 127.899L115.18 106.112H181.386L117.329 127.899H42.9883ZM482.655 4.67531L472.628 8.08562H502.437L511.256 4.67531H482.655ZM469.687 9.08562L457.499 13.231H489.131L499.851 9.08562H469.687ZM454.559 14.231L440.209 19.1114H473.924L486.545 14.231H454.559ZM437.269 20.1114L422.92 24.9918H458.717L471.338 20.1114H437.269ZM419.98 25.9918L401.308 32.3423H439.708L456.131 25.9918H419.98ZM398.367 33.3423L377.534 40.4278H418.799L437.122 33.3423H398.367ZM374.594 41.4278L351.6 49.2484H395.988L416.212 41.4278H374.594ZM348.66 50.2484L321.343 59.5391H369.376L393.402 50.2484H348.66ZM318.403 60.5391L284.602 72.0349H337.061L366.79 60.5391H318.403ZM281.662 73.0349L239.217 87.471H297.142L334.475 73.0349H281.662ZM236.277 88.471L187.348 105.112H251.521L294.556 88.471H236.277ZM184.408 106.112L120.35 127.899H192.594L248.935 106.112H184.408ZM117.41 128.899L36.063 156.566H118.46L190.008 128.899H117.41ZM505.122 8.08562L513.942 4.67531H541.923L534.35 8.08562H505.122ZM491.816 13.231L502.536 9.08562H532.129L522.924 13.231H491.816ZM476.609 19.1114L489.23 14.231H520.703L509.865 19.1114H476.609ZM461.402 24.9918L474.023 20.1114H507.644L496.807 24.9918H461.402ZM442.393 32.3423L458.816 25.9918H494.586L480.483 32.3423H442.393ZM421.484 40.4278L439.807 33.3423H478.263L462.528 40.4278H421.484ZM398.673 49.2484L418.898 41.4278H460.307L442.94 49.2484H398.673ZM372.061 59.5391L396.087 50.2484H440.719L420.087 59.5391H372.061ZM339.746 72.0349L369.475 60.5391H417.866L392.338 72.0349H339.746ZM299.828 87.471L337.16 73.0349H390.117L358.059 87.471H299.828ZM254.207 105.112L297.242 88.471H355.838L318.883 105.112H254.207ZM195.279 127.899L251.62 106.112H316.662L268.281 127.899H195.279ZM121.145 156.566L192.693 128.899H266.06L204.62 156.566H121.145ZM24.2004 194.053L118.559 157.566H202.399L121.371 194.053H24.2004ZM544.27 4.67531L536.696 8.08562H567.197L573.547 4.67531H544.27ZM534.476 9.08562L525.27 13.231H557.616L565.335 9.08562H534.476ZM523.049 14.231L512.212 19.1114H546.666L555.753 14.231H523.049ZM509.991 20.1114L499.153 24.9918H535.716L544.804 20.1114H509.991ZM496.932 25.9918L482.83 32.3423H522.028L533.854 25.9918H496.932ZM480.609 33.3423L464.874 40.4278H506.972L520.166 33.3423H480.609ZM462.653 41.4278L445.286 49.2484H490.548L505.11 41.4278H462.653ZM443.065 50.2484L422.434 59.5391H471.385L488.686 50.2484H443.065ZM420.213 60.5391L394.684 72.0349H448.117L469.523 60.5391H420.213ZM392.463 73.0349L360.405 87.471H419.373L446.255 73.0349H392.463ZM358.184 88.471L321.229 105.112H386.524L417.511 88.471H358.184ZM319.009 106.112L270.627 127.899H344.093L384.662 106.112H319.009ZM268.406 128.899L206.966 156.566H290.712L342.231 128.899H268.406ZM204.746 157.566L123.718 194.053H220.907L288.85 157.566H204.746ZM121.497 195.053L9.45449 245.507H125.095L219.045 195.053H121.497ZM569.223 8.08562L575.573 4.67531H604.144L599.011 8.08562H569.223ZM559.641 13.231L567.361 9.08562H597.505L591.266 13.231H559.641ZM548.692 19.1114L557.779 14.231H589.76L582.414 19.1114H548.692ZM537.742 24.9918L546.83 20.1114H580.909L573.562 24.9918H537.742ZM524.054 32.3423L535.88 25.9918H572.057L562.497 32.3423H524.054ZM508.998 40.4278L522.192 33.3423H560.992L550.326 40.4278H508.998ZM492.574 49.2484L507.136 41.4278H548.821L537.049 49.2484H492.574ZM473.411 59.5391L490.711 50.2484H535.544L521.558 59.5391H473.411ZM450.143 72.0349L471.549 60.5391H520.053L502.749 72.0349H450.143ZM421.399 87.471L448.281 73.0349H501.243L479.513 87.471H421.399ZM388.55 105.112L419.537 88.471H478.007L452.958 105.112H388.55ZM346.119 127.899L386.688 106.112H451.452L418.657 127.899H346.119ZM292.738 156.566L344.257 128.899H417.152L375.505 156.566H292.738ZM222.933 194.053L290.876 157.566H374L319.076 194.053H222.933ZM127.121 245.507L221.071 195.053H317.57L241.623 245.507H127.121ZM605.87 4.67531L600.737 8.08562H631.813L635.723 4.67531H605.87ZM599.231 9.08562L592.991 13.231H625.914L630.667 9.08562H599.231ZM591.486 14.231L584.14 19.1114H619.172L624.767 14.231H591.486ZM582.634 20.1114L575.288 24.9918H612.43L618.025 20.1114H582.634ZM573.783 25.9918L564.223 32.3423H604.002L611.283 25.9918H573.783ZM562.718 33.3423L552.052 40.4278H594.732L602.855 33.3423H562.718ZM550.547 41.4278L538.775 49.2484H584.619L593.585 41.4278H550.547ZM537.269 50.2484L523.284 59.5391H572.82L583.472 50.2484H537.269ZM521.779 60.5391L504.474 72.0349H558.493L571.673 60.5391H521.779ZM502.969 73.0349L481.239 87.471H540.795L557.346 73.0349H502.969ZM479.733 88.471L454.684 105.112H520.569L539.648 88.471H479.733ZM453.178 106.112L420.383 127.899H494.443L519.422 106.112H453.178ZM418.878 128.899L377.231 156.566H461.575L493.297 128.899H418.878ZM375.726 157.566L320.801 194.053H418.595L460.429 157.566H375.726ZM319.296 195.053L243.349 245.507H359.601L417.448 195.053H319.296ZM241.844 246.507L126.064 323.422H270.269L358.455 246.507H241.844ZM633.267 8.08562L637.177 4.67531H666.284L663.624 8.08562H633.267ZM627.368 13.231L632.121 9.08562H662.843L659.609 13.231H627.368ZM620.626 19.1114L626.221 14.231H658.829L655.021 19.1114H620.626ZM613.884 24.9918L619.479 20.1114H654.241L650.433 24.9918H613.884ZM605.456 32.3423L612.737 25.9918H649.652L644.697 32.3423H605.456ZM596.186 40.4278L604.31 33.3423H643.917L638.389 40.4278H596.186ZM586.073 49.2484L595.039 41.4278H637.608L631.506 49.2484H586.073ZM574.274 59.5391L584.926 50.2484H630.726L623.477 59.5391H574.274ZM559.947 72.0349L573.127 60.5391H622.697L613.727 72.0349H559.947ZM542.249 87.471L558.8 73.0349H612.947L601.683 87.471H542.249ZM522.023 105.112L541.102 88.471H600.903L587.919 105.112H522.023ZM495.897 127.899L520.876 106.112H587.139L570.14 127.899H495.897ZM463.03 156.566L494.751 128.899H569.36L547.773 156.566H463.03ZM420.049 194.053L461.883 157.566H546.992L518.523 194.053H420.049ZM361.055 245.507L418.902 195.053H517.743L478.377 245.507H361.055ZM271.723 323.422L359.909 246.507H477.596L417.584 323.422H271.723ZM667.509 4.67531L664.848 8.08562H696.326L697.754 4.67531H667.509ZM664.068 9.08562L660.834 13.231H694.17L695.907 9.08562H664.068ZM660.053 14.231L656.245 19.1114H691.706L693.751 14.231H660.053ZM655.465 20.1114L651.657 24.9918H689.242L691.287 20.1114H655.465ZM650.877 25.9918L645.922 32.3423H686.163L688.823 25.9918H650.877ZM645.142 33.3423L639.613 40.4278H682.775L685.744 33.3423H645.142ZM638.833 41.4278L632.731 49.2484H679.079L682.356 41.4278H638.833ZM631.951 50.2484L624.702 59.5391H674.768L678.66 50.2484H631.951ZM623.922 60.5391L614.952 72.0349H669.532L674.349 60.5391H623.922ZM614.172 73.0349L602.908 87.471H663.065L669.114 73.0349H614.172ZM602.128 88.471L589.144 105.112H655.674L662.646 88.471H602.128ZM588.363 106.112L571.365 127.899H646.127L655.255 106.112H588.363ZM570.584 128.899L548.997 156.566H634.116L645.708 128.899H570.584ZM548.217 157.566L519.748 194.053H618.41L633.697 157.566H548.217ZM518.967 195.053L479.601 245.507H596.852L617.991 195.053H518.967ZM478.821 246.507L418.808 323.422H564.208L596.433 246.507H478.821ZM700.362 1.00048L700.36 1H728.231L728.091 3.67531H699.241L700.362 1.00048ZM697.393 8.08562L698.822 4.67531H728.039L727.86 8.08562H697.393ZM695.238 13.231L696.975 9.08562H727.808L727.59 13.231H695.238ZM692.774 19.1114L694.819 14.231H727.538L727.282 19.1114H692.774ZM690.31 24.9918L692.355 20.1114H727.23L726.974 24.9918H690.31ZM687.231 32.3423L689.891 25.9918H726.922L726.589 32.3423H687.231ZM683.843 40.4278L686.812 33.3423H726.537L726.165 40.4278H683.843ZM680.147 49.2484L683.424 41.4278H726.113L725.703 49.2484H680.147ZM675.836 59.5391L679.728 50.2484H725.651L725.164 59.5391H675.836ZM670.6 72.0349L675.417 60.5391H725.112L724.509 72.0349H670.6ZM664.133 87.471L670.181 73.0349H724.457L723.701 87.471H664.133ZM656.742 105.112L663.714 88.471H723.648L722.776 105.112H656.742ZM647.195 127.899L656.323 106.112H722.724L721.582 127.899H647.195ZM635.184 156.566L646.776 128.899H721.53L720.08 156.566H635.184ZM619.478 194.053L634.765 157.566H720.028L718.116 194.053H619.478ZM597.92 245.507L619.059 195.053H718.064L715.42 245.507H597.92ZM565.276 323.422L597.501 246.507H715.368L711.338 323.422H565.276ZM1398.51 4.67531L1424.65 8.08562H1400.19L1375.09 4.67531H1398.51ZM1367.71 4.67531H1344.57L1369.17 8.08562H1392.81L1367.71 4.67531ZM1400.16 9.08562H1376.38L1406.28 13.231H1430.67L1400.16 9.08562ZM1369.14 9.08562L1399.04 13.231H1372.79L1344.41 9.08562H1369.14ZM1337.33 4.67531L1361.93 8.08562H1337.57L1314.23 4.67531H1337.33ZM1307.36 4.67531H1285.5L1307.22 8.08562H1330.7L1307.36 4.67531ZM1337.55 9.08562H1313.59L1339.99 13.231H1365.92L1337.55 9.08562ZM1372.76 14.231H1346.36L1377.45 19.1114H1406.16L1372.76 14.231ZM1377.42 20.1114L1408.51 24.9918H1376.48L1347.11 20.1114H1377.42ZM1339.97 14.231L1371.05 19.1114H1341.09L1311.72 14.231H1339.97ZM1307.19 9.08562L1333.6 13.231H1305.7L1280.76 9.08562H1307.19ZM1279.1 4.67531L1300.82 8.08562H1274.74L1254.22 4.67531H1279.1ZM1248.17 4.67531H1222.98L1242.35 8.08562H1268.69L1248.17 4.67531ZM1274.71 9.08562H1248.02L1271.56 13.231H1299.66L1274.71 9.08562ZM1305.68 14.231H1277.24L1304.95 19.1114H1335.05L1305.68 14.231ZM1341.06 20.1114H1310.62L1338.33 24.9918H1370.43L1341.06 20.1114ZM1376.45 25.9918H1344.01L1380.07 32.3423H1414.67L1376.45 25.9918ZM1380.04 33.3423L1420.27 40.4278H1386.98L1348.73 33.3423H1380.04ZM1338.3 25.9918L1374.36 32.3423H1343.33L1309.05 25.9918H1338.3ZM1304.92 20.1114L1332.63 24.9918H1303.65L1277.3 20.1114H1304.92ZM1271.53 14.231L1299.24 19.1114H1271.91L1245.56 14.231H1271.53ZM1242.32 9.08562L1265.85 13.231H1240.16L1217.78 9.08562H1242.32ZM1217.28 4.67531L1236.64 8.08562H1212.38L1193.97 4.67531H1217.28ZM1188.54 4.67531H1161.47L1178.47 8.08562H1206.95L1188.54 4.67531ZM1212.35 9.08562H1183.46L1204.13 13.231H1234.73L1212.35 9.08562ZM1240.13 14.231H1209.11L1233.45 19.1114H1266.47L1240.13 14.231ZM1271.87 20.1114H1238.43L1262.77 24.9918H1298.22L1271.87 20.1114ZM1303.62 25.9918H1267.75L1299.41 32.3423H1337.9L1303.62 25.9918ZM1343.3 33.3423H1304.4L1339.73 40.4278H1381.55L1343.3 33.3423ZM1386.95 41.4278H1344.71L1383.71 49.2484H1429.17L1386.95 41.4278ZM1383.67 50.2484L1429.99 59.5391H1384.47L1341.57 50.2484H1383.67ZM1339.69 41.4278L1378.68 49.2484H1336.95L1300.84 41.4278H1339.69ZM1299.38 33.3423L1334.71 40.4278H1296.22L1263.5 33.3423H1299.38ZM1262.73 25.9918L1294.39 32.3423H1258.89L1229.56 25.9918H1262.73ZM1233.41 20.1114L1257.74 24.9918H1224.94L1202.41 20.1114H1233.41ZM1204.09 14.231L1228.42 19.1114H1197.79L1175.25 14.231H1204.09ZM1178.44 9.08562L1199.1 13.231H1170.64L1151.5 9.08562H1178.44ZM1156.45 4.67531L1173.45 8.08562H1146.88L1131.13 4.67531H1156.45ZM1126.47 4.67531H1098.82L1113.35 8.08562H1142.22L1126.47 4.67531ZM1146.84 9.08562H1117.61L1135.26 13.231H1165.98L1146.84 9.08562ZM1170.6 14.231H1139.52L1160.3 19.1114H1193.13L1170.6 14.231ZM1197.75 20.1114H1164.56L1185.34 24.9918H1220.29L1197.75 20.1114ZM1224.9 25.9918H1189.6L1216.64 32.3423H1254.23L1224.9 25.9918ZM1258.84 33.3423H1220.9L1251.07 40.4278H1291.56L1258.84 33.3423ZM1296.18 41.4278H1255.33L1288.63 49.2484H1332.29L1296.18 41.4278ZM1336.91 50.2484H1292.89L1332.45 59.5391H1379.81L1336.91 50.2484ZM1384.43 60.5391H1336.71L1385.66 72.0349H1437.51L1384.43 60.5391ZM1332.4 60.5391L1381.36 72.0349H1330.37L1285.68 60.5391H1332.4ZM1288.58 50.2484L1328.15 59.5391H1281.79L1245.67 50.2484H1288.58ZM1251.02 41.4278L1284.33 49.2484H1241.78L1211.37 41.4278H1251.02ZM1216.59 33.3423L1246.76 40.4278H1207.48L1179.93 33.3423H1216.59ZM1185.29 25.9918L1212.33 32.3423H1176.05L1151.36 25.9918H1185.29ZM1160.25 20.1114L1181.03 24.9918H1147.47L1128.49 20.1114H1160.25ZM1135.21 14.231L1155.99 19.1114H1124.61L1105.63 14.231H1135.21ZM1113.3 9.08562L1130.95 13.231H1101.74L1085.63 9.08562H1113.3ZM1094.52 4.67531L1109.04 8.08562H1081.74L1068.48 4.67531H1094.52ZM1064.54 4.67531H1040.18L1052.23 8.08562H1077.8L1064.54 4.67531ZM1081.68 9.08562H1055.76L1070.4 13.231H1097.8L1081.68 9.08562ZM1101.69 14.231H1073.93L1091.17 19.1114H1120.66L1101.69 14.231ZM1124.55 20.1114H1094.7L1111.94 24.9918H1143.53L1124.55 20.1114ZM1147.42 25.9918H1115.47L1137.9 32.3423H1172.11L1147.42 25.9918ZM1175.99 33.3423H1141.44L1166.46 40.4278H1203.54L1175.99 33.3423ZM1207.43 41.4278H1169.99L1197.62 49.2484H1237.84L1207.43 41.4278ZM1241.72 50.2484H1201.15L1233.96 59.5391H1277.85L1241.72 50.2484ZM1281.73 60.5391H1237.5L1278.1 72.0349H1326.43L1281.73 60.5391ZM1330.32 73.0349H1281.63L1332.62 87.471H1386.45L1330.32 73.0349ZM1332.56 88.471L1391.34 105.112H1327.3L1274.54 88.471H1332.56ZM1278.04 73.0349L1329.03 87.471H1271.37L1225.6 73.0349H1278.04ZM1233.9 60.5391L1274.51 72.0349H1222.43L1185.98 60.5391H1233.9ZM1197.56 50.2484L1230.37 59.5391H1182.81L1153.36 50.2484H1197.56ZM1166.4 41.4278L1194.02 49.2484H1150.19L1125.39 41.4278H1166.4ZM1137.84 33.3423L1162.87 40.4278H1122.22L1099.76 33.3423H1137.84ZM1111.88 25.9918L1134.31 32.3423H1096.59L1076.45 25.9918H1111.88ZM1091.11 20.1114L1108.35 24.9918H1073.28L1057.81 20.1114H1091.11ZM1070.34 14.231L1087.58 19.1114H1054.64L1039.16 14.231H1070.34ZM1052.17 9.08562L1066.81 13.231H1035.99L1022.85 9.08562H1052.17ZM1036.59 4.67531L1048.64 8.08562H1019.68L1008.87 4.67531H1036.59ZM1005.63 4.67531H976.667L986.35 8.08562H1016.44L1005.63 4.67531ZM1019.61 9.08562H989.19L1000.96 13.231H1032.75L1019.61 9.08562ZM1035.92 14.231H1003.8L1017.66 19.1114H1051.4L1035.92 14.231ZM1054.57 20.1114H1020.5L1034.35 24.9918H1070.04L1054.57 20.1114ZM1073.21 25.9918H1037.19L1055.22 32.3423H1093.34L1073.21 25.9918ZM1096.51 33.3423H1058.06L1078.18 40.4278H1118.98L1096.51 33.3423ZM1122.15 41.4278H1081.02L1103.23 49.2484H1146.94L1122.15 41.4278ZM1150.11 50.2484H1106.07L1132.45 59.5391H1179.57L1150.11 50.2484ZM1182.74 60.5391H1135.29L1167.93 72.0349H1219.19L1182.74 60.5391ZM1222.36 73.0349H1170.77L1211.76 87.471H1268.13L1222.36 73.0349ZM1271.3 88.471H1214.59L1261.85 105.112H1324.06L1271.3 88.471ZM1327.23 106.112H1264.68L1326.55 127.899H1396.3L1327.23 106.112ZM1326.46 128.899L1405.02 156.566H1321.37L1253.06 128.899H1326.46ZM1261.76 106.112L1323.62 127.899H1250.59L1196.79 106.112H1261.76ZM1211.67 88.471L1258.92 105.112H1194.32L1153.23 88.471H1211.67ZM1167.84 73.0349L1208.83 87.471H1150.76L1115.12 73.0349H1167.84ZM1132.36 60.5391L1165 72.0349H1112.65L1084.26 60.5391H1132.36ZM1103.14 50.2484L1129.52 59.5391H1081.79L1058.85 50.2484H1103.14ZM1078.1 41.4278L1100.3 49.2484H1056.38L1037.07 41.4278H1078.1ZM1055.14 33.3423L1075.26 40.4278H1034.6L1017.11 33.3423H1055.14ZM1034.27 25.9918L1052.3 32.3423H1014.64L998.956 25.9918H1034.27ZM1017.57 20.1114L1031.43 24.9918H996.487L984.436 20.1114H1017.57ZM1000.87 14.231L1014.73 19.1114H981.967L969.916 14.231H1000.87ZM986.265 9.08562L998.035 13.231H967.447L957.211 9.08562H986.265ZM973.742 4.67531L983.425 8.08562H954.742L946.321 4.67531H973.742ZM943.745 4.67531H915.027L922.233 8.08562H952.166L943.745 4.67531ZM954.635 9.08562H924.346L933.105 13.231H964.871L954.635 9.08562ZM967.34 14.231H935.218L945.53 19.1114H979.391L967.34 14.231ZM981.86 20.1114H947.643L957.956 24.9918H993.911L981.86 20.1114ZM996.38 25.9918H960.069L973.487 32.3423H1012.06L996.38 25.9918ZM1014.53 33.3423H975.6L990.572 40.4278H1032.03L1014.53 33.3423ZM1034.49 41.4278H992.685L1009.21 49.2484H1053.81L1034.49 41.4278ZM1056.28 50.2484H1011.32L1030.95 59.5391H1079.22L1056.28 50.2484ZM1081.68 60.5391H1033.07L1057.36 72.0349H1110.07L1081.68 60.5391ZM1112.54 73.0349H1059.47L1089.98 87.471H1148.19L1112.54 73.0349ZM1150.65 88.471H1092.09L1127.25 105.112H1191.75L1150.65 88.471ZM1194.21 106.112H1129.36L1175.4 127.899H1248.01L1194.21 106.112ZM1250.48 128.899H1177.51L1235.97 156.566H1318.8L1250.48 128.899ZM1321.26 157.566H1238.09L1315.19 194.053H1411.36L1321.26 157.566ZM1315.05 195.053L1421.66 245.507H1306.83L1218.4 195.053H1315.05ZM1235.84 157.566L1312.94 194.053H1216.65L1152.7 157.566H1235.84ZM1175.26 128.899L1233.73 156.566H1150.94L1102.45 128.899H1175.26ZM1127.12 106.112L1173.15 127.899H1100.7L1062.51 106.112H1127.12ZM1089.84 88.471L1125 105.112H1060.76L1031.59 88.471H1089.84ZM1057.22 73.0349L1087.73 87.471H1029.84L1004.53 73.0349H1057.22ZM1030.82 60.5391L1055.11 72.0349H1002.78L982.632 60.5391H1030.82ZM1009.07 50.2484L1028.71 59.5391H980.879L964.595 50.2484H1009.07ZM990.437 41.4278L1006.96 49.2484H962.842L949.135 41.4278H990.437ZM973.352 33.3423L988.324 40.4278H947.382L934.963 33.3423H973.352ZM957.82 25.9918L971.239 32.3423H933.21L922.079 25.9918H957.82ZM945.395 20.1114L955.707 24.9918H920.326L911.772 20.1114H945.395ZM932.969 14.231L943.282 19.1114H910.02L901.466 14.231H932.969ZM922.097 9.08562L930.856 13.231H899.713L892.447 9.08562H922.097ZM912.778 4.67531L919.984 8.08562H890.694L884.717 4.67531H912.778ZM882.785 4.67531H853.425L858.191 8.08562H888.763L882.785 4.67531ZM890.515 9.08562H859.589L865.381 13.231H897.781L890.515 9.08562ZM899.534 14.231H866.779L873.599 19.1114H908.088L899.534 14.231ZM909.841 20.1114H874.996L881.816 24.9918H918.395L909.841 20.1114ZM920.148 25.9918H883.213L892.088 32.3423H931.279L920.148 25.9918ZM933.031 33.3423H893.485L903.387 40.4278H945.451L933.031 33.3423ZM947.203 41.4278H904.784L915.713 49.2484H960.911L947.203 41.4278ZM962.664 50.2484H917.11L930.093 59.5391H978.948L962.664 50.2484ZM980.701 60.5391H931.491L947.555 72.0349H1000.85L980.701 60.5391ZM1002.6 73.0349H948.952L969.126 87.471H1027.91L1002.6 73.0349ZM1029.66 88.471H970.523L993.778 105.112H1058.83L1029.66 88.471ZM1060.58 106.112H995.175L1025.62 127.899H1098.77L1060.58 106.112ZM1100.52 128.899H1027.02L1065.68 156.566H1149.01L1100.52 128.899ZM1150.76 157.566H1067.08L1118.07 194.053H1214.72L1150.76 157.566ZM1216.47 195.053H1119.46L1189.97 245.507H1304.9L1216.47 195.053ZM1189.72 246.507L1297.21 323.422H1152.38L1072.69 246.507H1189.72ZM1117.82 195.053L1188.33 245.507H1071.65L1019.37 195.053H1117.82ZM1065.44 157.566L1116.43 194.053H1018.34L980.529 157.566H1065.44ZM1025.38 128.899L1064.04 156.566H979.493L950.826 128.899H1025.38ZM993.535 106.112L1023.98 127.899H949.79L927.216 106.112H993.535ZM968.883 88.471L992.137 105.112H926.18L908.937 88.471H968.883ZM947.312 73.0349L967.485 87.471H907.901L892.943 73.0349H947.312ZM929.85 60.5391L945.915 72.0349H891.907L879.995 60.5391H929.85ZM915.47 50.2484L928.453 59.5391H878.959L869.333 50.2484H915.47ZM903.144 41.4278L914.072 49.2484H868.297L860.193 41.4278H903.144ZM891.845 33.3423L901.746 40.4278H859.157L851.816 33.3423H891.845ZM881.573 25.9918L890.447 32.3423H850.779L844.199 25.9918H881.573ZM873.356 20.1114L880.176 24.9918H843.163L838.106 20.1114H873.356ZM865.138 14.231L871.958 19.1114H837.07L832.013 14.231H865.138ZM857.948 9.08562L863.741 13.231H830.977L826.682 9.08562H857.948ZM851.785 4.67531L856.551 8.08562H825.646L822.112 4.67531H851.785ZM820.733 4.67531H790.799L793.101 8.08562H824.267L820.733 4.67531ZM825.303 9.08562H793.776L796.573 13.231H829.598L825.303 9.08562ZM830.635 14.231H797.248L800.542 19.1114H835.691L830.635 14.231ZM836.727 20.1114H801.217L804.51 24.9918H841.784L836.727 20.1114ZM842.82 25.9918H805.185L809.471 32.3423H849.401L842.82 25.9918ZM850.437 33.3423H810.146L814.928 40.4278H857.778L850.437 33.3423ZM858.814 41.4278H815.603L820.881 49.2484H866.918L858.814 41.4278ZM867.954 50.2484H821.555L827.826 59.5391H877.58L867.954 50.2484ZM878.617 60.5391H828.5L836.259 72.0349H890.528L878.617 60.5391ZM891.564 73.0349H836.933L846.676 87.471H906.522L891.564 73.0349ZM907.558 88.471H847.351L858.582 105.112H924.801L907.558 88.471ZM925.837 106.112H859.257L873.96 127.899H948.411L925.837 106.112ZM949.447 128.899H874.635L893.306 156.566H978.114L949.447 128.899ZM979.15 157.566H893.981L918.606 194.053H1016.96L979.15 157.566ZM1017.99 195.053H919.281L953.331 245.507H1070.27L1017.99 195.053ZM1071.31 246.507H954.005L1005.91 323.422H1151L1071.31 246.507ZM952.835 246.507L1004.74 323.422H859.637L835.709 246.507H952.835ZM918.11 195.053L952.16 245.507H835.398L819.702 195.053H918.11ZM892.81 157.566L917.435 194.053H819.391L808.04 157.566H892.81ZM873.464 128.899L892.136 156.566H807.729L799.122 128.899H873.464ZM858.086 106.112L872.789 127.899H798.811L792.033 106.112H858.086ZM846.18 88.471L857.411 105.112H791.722L786.545 88.471H846.18ZM835.763 73.0349L845.505 87.471H786.234L781.743 73.0349H835.763ZM827.33 60.5391L835.088 72.0349H781.432L777.855 60.5391H827.33ZM820.385 50.2484L826.655 59.5391H777.544L774.654 50.2484H820.385ZM814.432 41.4278L819.71 49.2484H774.343L771.91 41.4278H814.432ZM808.975 33.3423L813.757 40.4278H771.599L769.395 33.3423H808.975ZM804.014 25.9918L808.3 32.3423H769.084L767.108 25.9918H804.014ZM800.046 20.1114L803.34 24.9918H766.797L765.279 20.1114H800.046ZM796.077 14.231L799.371 19.1114H764.968L763.449 14.231H796.077ZM792.605 9.08562L795.402 13.231H763.138L761.849 9.08562H792.605ZM789.628 4.67531L791.93 8.08562H761.537L760.477 4.67531H789.628ZM759.439 4.67531H729.04L728.861 8.08562H760.5L759.439 4.67531ZM760.811 9.08562H728.809L728.591 13.231H762.1L760.811 9.08562ZM762.411 14.231H728.539L728.283 19.1114H763.93L762.411 14.231ZM764.241 20.1114H728.231L727.975 24.9918H765.759L764.241 20.1114ZM766.07 25.9918H727.923L727.59 32.3423H768.046L766.07 25.9918ZM768.357 33.3423H727.538L727.167 40.4278H770.561L768.357 33.3423ZM770.872 41.4278H727.114L726.704 49.2484H773.305L770.872 41.4278ZM773.616 50.2484H726.652L726.165 59.5391H776.507L773.616 50.2484ZM776.818 60.5391H726.113L725.51 72.0349H780.394L776.818 60.5391ZM780.705 73.0349H725.458L724.702 87.471H785.196L780.705 73.0349ZM785.507 88.471H724.649L723.777 105.112H790.684L785.507 88.471ZM790.995 106.112H723.725L722.583 127.899H797.773L790.995 106.112ZM798.084 128.899H722.531L721.081 156.566H806.691L798.084 128.899ZM807.002 157.566H721.029L719.117 194.053H818.353L807.002 157.566ZM818.664 195.053H719.065L716.421 245.507H834.36L818.664 195.053ZM834.671 246.507H716.369L712.339 323.422H858.599L834.671 246.507Z" fill="url(#paint0_radial_85_325)"/>
            <defs>
            <radialGradient id="paint0_radial_85_325" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.295 1.80392e-05) rotate(90.0422) scale(400 903.824)">
            <stop offset="0.203125" stopColor="#FF0255" stopOpacity="0"/>
            <stop offset="0.614583" stopColor="#FF0255" stopOpacity="0.1"/>
            <stop offset="1" stopColor="#2BCDC7" stopOpacity="0.5"/>
            </radialGradient>
            </defs>
        </svg>
    )
}