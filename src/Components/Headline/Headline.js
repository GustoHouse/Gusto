export default function Headline() {

    const handleBtnClick = (e, target) => {
        e.preventDefault();

        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="headline" className="headline">

            <h1><strong>Unlimited</strong> design & development projects for one simple price.</h1>
            <p>Our fresh take on the design and development process will <strong>surprise you</strong> - due to how effortlessly, timely, and affordably your projects get done.</p>

            <a href="#pricing" onClick={(e) => handleBtnClick(e, 'pricing')} className="btn">Start Now</a>

            <a href="#theway" onClick={(e) => handleBtnClick(e, 'theway')} className="link">How is this possible?</a>

        </section>
    )
}