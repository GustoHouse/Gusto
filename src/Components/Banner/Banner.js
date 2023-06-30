import './Banner.scss';

const handleBtnClick = (e, target) => {
    e.preventDefault();

    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
}

export default function Banner() {
    return (
        <a href="#pricing" onClick={(e) => handleBtnClick(e, 'pricing')} className="banner">
            Take <strong>50% OFF</strong> your first month using code <code>WELCOME50</code>
        </a>
    )
}