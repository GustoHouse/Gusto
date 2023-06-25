import './ThisIsTheWay.scss';

export default function ThisIsTheWay() {

    const handleBtnClick = (e, target) => {
        e.preventDefault();

        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="theway" className="theway">
            <div className="container">

                <h2>This is <strong>the way.</strong></h2>
                <p>Our process is special because it's simple. You'll never want to go back.</p>

                <div className="process">
                    <div className="setup">

                        <svg width="301" height="301" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="298" y="13" width="3" height="3" rx="1.5" />
                            <rect x="175" y="10" width="9" height="9" rx="4.5" />
                            <rect x="190" y="10" width="9" height="9" rx="4.5" />
                            <rect x="70" y="10" width="9" height="9" rx="4.5" />
                            <rect x="55" y="10" width="9" height="9" rx="4.5" />
                            <rect x="250" y="10" width="9" height="9" rx="4.5" />
                            <rect x="130" y="10" width="9" height="9" rx="4.5" />
                            <rect x="205" y="10" width="9" height="9" rx="4.5" />
                            <rect x="85" y="10" width="9" height="9" rx="4.5" />
                            <rect x="10" y="100" width="9" height="9" rx="4.5" />
                            <rect x="13" y="298" width="3" height="3" rx="1.5" />
                            <rect x="10" y="190" width="9" height="9" rx="4.5" />
                            <rect x="10" y="55" width="9" height="9" rx="4.5" />
                            <rect x="10" y="145" width="9" height="9" rx="4.5" />
                            <rect x="10" y="235" width="9" height="9" rx="4.5" />
                            <rect x="16" y="25" width="9" height="9" rx="4.5" />
                            <rect x="10" y="115" width="9" height="9" rx="4.5" />
                            <rect x="10" y="205" width="9" height="9" rx="4.5" />
                            <rect x="10" y="70" width="9" height="9" rx="4.5" />
                            <rect x="10" y="160" width="9" height="9" rx="4.5" />
                            <rect x="10" y="250" width="9" height="9" rx="4.5" />
                            <rect x="10" y="40" width="9" height="9" rx="4.5" />
                            <rect x="10" y="130" width="9" height="9" rx="4.5" />
                            <rect x="10" y="220" width="9" height="9" rx="4.5" />
                            <rect x="10" y="85" width="9" height="9" rx="4.5" />
                            <rect x="12" y="282" width="5" height="5" rx="2.5" />
                            <rect x="10" y="175" width="9" height="9" rx="4.5" />
                            <rect x="11" y="266" width="7" height="7" rx="3.5" />
                            <rect y="93" width="5" height="5" rx="2.5" />
                            <rect x="2" y="289" width="2" height="2" rx="1" />
                            <rect y="183" width="5" height="5" rx="2.5" />
                            <rect y="48" width="5" height="5" rx="2.5" />
                            <rect y="138" width="5" height="5" rx="2.5" />
                            <rect y="228" width="5" height="5" rx="2.5" />
                            <rect x="4" y="21" width="5" height="5" rx="2.5" />
                            <rect y="108" width="5" height="5" rx="2.5" />
                            <rect y="198" width="5" height="5" rx="2.5" />
                            <rect y="63" width="5" height="5" rx="2.5" />
                            <rect y="153" width="5" height="5" rx="2.5" />
                            <rect y="243" width="5" height="5" rx="2.5" />
                            <rect y="33" width="5" height="5" rx="2.5" />
                            <rect y="123" width="5" height="5" rx="2.5" />
                            <rect y="213" width="5" height="5" rx="2.5" />
                            <rect y="78" width="5" height="5" rx="2.5" />
                            <rect x="1" y="274" width="3" height="3" rx="1.5" />
                            <rect y="168" width="5" height="5" rx="2.5" />
                            <rect y="258" width="5" height="5" rx="2.5" />
                            <rect x="266" y="11" width="7" height="7" rx="3.5" />
                            <rect x="145" y="10" width="9" height="9" rx="4.5" />
                            <rect x="220" y="10" width="9" height="9" rx="4.5" />
                            <rect x="100" y="10" width="9" height="9" rx="4.5" />
                            <rect x="25" y="14" width="9" height="9" rx="4.5" />
                            <rect x="282" y="12" width="5" height="5" rx="2.5" />
                            <rect x="160" y="10" width="9" height="9" rx="4.5" />
                            <rect x="235" y="10" width="9" height="9" rx="4.5" />
                            <rect x="115" y="10" width="9" height="9" rx="4.5" />
                            <rect x="40" y="10" width="9" height="9" rx="4.5" />
                            <rect x="290" y="2" width="2" height="2" rx="1" />
                            <rect x="169" width="5" height="5" rx="2.5" />
                            <rect x="184" width="5" height="5" rx="2.5" />
                            <rect x="64" width="5" height="5" rx="2.5" />
                            <rect x="49" width="5" height="5" rx="2.5" />
                            <rect x="244" width="5" height="5" rx="2.5" />
                            <rect x="124" width="5" height="5" rx="2.5" />
                            <rect x="199" width="5" height="5" rx="2.5" />
                            <rect x="79" width="5" height="5" rx="2.5" />
                            <rect x="259" width="5" height="5" rx="2.5" />
                            <rect x="139" width="5" height="5" rx="2.5" />
                            <rect x="214" width="5" height="5" rx="2.5" />
                            <rect x="94" width="5" height="5" rx="2.5" />
                            <rect x="22" y="2" width="5" height="5" rx="2.5" />
                            <rect x="11" y="10" width="5" height="5" rx="2.5" />
                            <rect x="275" y="1" width="3" height="3" rx="1.5" />
                            <rect x="154" width="5" height="5" rx="2.5" />
                            <rect x="229" width="5" height="5" rx="2.5" />
                            <rect x="109" width="5" height="5" rx="2.5" />
                            <rect x="35" width="5" height="5" rx="2.5" />
                        </svg>

                        <h3><strong>Instant</strong> Setup</h3>
                        <p>Once you've subscribed, we'll fire up our AI powered automated setup. You'll instantly get invited to your brand new project request board where all updates funnel back and forth.</p>
                    </div>
                    <div className="requests">

                        <svg width="301" height="301" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="298" y="13" width="3" height="3" rx="1.5" />
                            <rect x="175" y="10" width="9" height="9" rx="4.5" />
                            <rect x="190" y="10" width="9" height="9" rx="4.5" />
                            <rect x="70" y="10" width="9" height="9" rx="4.5" />
                            <rect x="55" y="10" width="9" height="9" rx="4.5" />
                            <rect x="250" y="10" width="9" height="9" rx="4.5" />
                            <rect x="130" y="10" width="9" height="9" rx="4.5" />
                            <rect x="205" y="10" width="9" height="9" rx="4.5" />
                            <rect x="85" y="10" width="9" height="9" rx="4.5" />
                            <rect x="10" y="100" width="9" height="9" rx="4.5" />
                            <rect x="13" y="298" width="3" height="3" rx="1.5" />
                            <rect x="10" y="190" width="9" height="9" rx="4.5" />
                            <rect x="10" y="55" width="9" height="9" rx="4.5" />
                            <rect x="10" y="145" width="9" height="9" rx="4.5" />
                            <rect x="10" y="235" width="9" height="9" rx="4.5" />
                            <rect x="16" y="25" width="9" height="9" rx="4.5" />
                            <rect x="10" y="115" width="9" height="9" rx="4.5" />
                            <rect x="10" y="205" width="9" height="9" rx="4.5" />
                            <rect x="10" y="70" width="9" height="9" rx="4.5" />
                            <rect x="10" y="160" width="9" height="9" rx="4.5" />
                            <rect x="10" y="250" width="9" height="9" rx="4.5" />
                            <rect x="10" y="40" width="9" height="9" rx="4.5" />
                            <rect x="10" y="130" width="9" height="9" rx="4.5" />
                            <rect x="10" y="220" width="9" height="9" rx="4.5" />
                            <rect x="10" y="85" width="9" height="9" rx="4.5" />
                            <rect x="12" y="282" width="5" height="5" rx="2.5" />
                            <rect x="10" y="175" width="9" height="9" rx="4.5" />
                            <rect x="11" y="266" width="7" height="7" rx="3.5" />
                            <rect y="93" width="5" height="5" rx="2.5" />
                            <rect x="2" y="289" width="2" height="2" rx="1" />
                            <rect y="183" width="5" height="5" rx="2.5" />
                            <rect y="48" width="5" height="5" rx="2.5" />
                            <rect y="138" width="5" height="5" rx="2.5" />
                            <rect y="228" width="5" height="5" rx="2.5" />
                            <rect x="4" y="21" width="5" height="5" rx="2.5" />
                            <rect y="108" width="5" height="5" rx="2.5" />
                            <rect y="198" width="5" height="5" rx="2.5" />
                            <rect y="63" width="5" height="5" rx="2.5" />
                            <rect y="153" width="5" height="5" rx="2.5" />
                            <rect y="243" width="5" height="5" rx="2.5" />
                            <rect y="33" width="5" height="5" rx="2.5" />
                            <rect y="123" width="5" height="5" rx="2.5" />
                            <rect y="213" width="5" height="5" rx="2.5" />
                            <rect y="78" width="5" height="5" rx="2.5" />
                            <rect x="1" y="274" width="3" height="3" rx="1.5" />
                            <rect y="168" width="5" height="5" rx="2.5" />
                            <rect y="258" width="5" height="5" rx="2.5" />
                            <rect x="266" y="11" width="7" height="7" rx="3.5" />
                            <rect x="145" y="10" width="9" height="9" rx="4.5" />
                            <rect x="220" y="10" width="9" height="9" rx="4.5" />
                            <rect x="100" y="10" width="9" height="9" rx="4.5" />
                            <rect x="25" y="14" width="9" height="9" rx="4.5" />
                            <rect x="282" y="12" width="5" height="5" rx="2.5" />
                            <rect x="160" y="10" width="9" height="9" rx="4.5" />
                            <rect x="235" y="10" width="9" height="9" rx="4.5" />
                            <rect x="115" y="10" width="9" height="9" rx="4.5" />
                            <rect x="40" y="10" width="9" height="9" rx="4.5" />
                            <rect x="290" y="2" width="2" height="2" rx="1" />
                            <rect x="169" width="5" height="5" rx="2.5" />
                            <rect x="184" width="5" height="5" rx="2.5" />
                            <rect x="64" width="5" height="5" rx="2.5" />
                            <rect x="49" width="5" height="5" rx="2.5" />
                            <rect x="244" width="5" height="5" rx="2.5" />
                            <rect x="124" width="5" height="5" rx="2.5" />
                            <rect x="199" width="5" height="5" rx="2.5" />
                            <rect x="79" width="5" height="5" rx="2.5" />
                            <rect x="259" width="5" height="5" rx="2.5" />
                            <rect x="139" width="5" height="5" rx="2.5" />
                            <rect x="214" width="5" height="5" rx="2.5" />
                            <rect x="94" width="5" height="5" rx="2.5" />
                            <rect x="22" y="2" width="5" height="5" rx="2.5" />
                            <rect x="11" y="10" width="5" height="5" rx="2.5" />
                            <rect x="275" y="1" width="3" height="3" rx="1.5" />
                            <rect x="154" width="5" height="5" rx="2.5" />
                            <rect x="229" width="5" height="5" rx="2.5" />
                            <rect x="109" width="5" height="5" rx="2.5" />
                            <rect x="35" width="5" height="5" rx="2.5" />
                        </svg>

                        <h3><strong>Infinite</strong> Requests</h3>
                        <p>Go wild! You and your entire team may add as many design and development requests to the queue as you want. We'll knock them out one by one. At any point you can reorder their priority and we'll adjust. </p>
                    </div>
                    <div className="updates">

                        <svg width="301" height="301" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="298" y="13" width="3" height="3" rx="1.5" />
                            <rect x="175" y="10" width="9" height="9" rx="4.5" />
                            <rect x="190" y="10" width="9" height="9" rx="4.5" />
                            <rect x="70" y="10" width="9" height="9" rx="4.5" />
                            <rect x="55" y="10" width="9" height="9" rx="4.5" />
                            <rect x="250" y="10" width="9" height="9" rx="4.5" />
                            <rect x="130" y="10" width="9" height="9" rx="4.5" />
                            <rect x="205" y="10" width="9" height="9" rx="4.5" />
                            <rect x="85" y="10" width="9" height="9" rx="4.5" />
                            <rect x="10" y="100" width="9" height="9" rx="4.5" />
                            <rect x="13" y="298" width="3" height="3" rx="1.5" />
                            <rect x="10" y="190" width="9" height="9" rx="4.5" />
                            <rect x="10" y="55" width="9" height="9" rx="4.5" />
                            <rect x="10" y="145" width="9" height="9" rx="4.5" />
                            <rect x="10" y="235" width="9" height="9" rx="4.5" />
                            <rect x="16" y="25" width="9" height="9" rx="4.5" />
                            <rect x="10" y="115" width="9" height="9" rx="4.5" />
                            <rect x="10" y="205" width="9" height="9" rx="4.5" />
                            <rect x="10" y="70" width="9" height="9" rx="4.5" />
                            <rect x="10" y="160" width="9" height="9" rx="4.5" />
                            <rect x="10" y="250" width="9" height="9" rx="4.5" />
                            <rect x="10" y="40" width="9" height="9" rx="4.5" />
                            <rect x="10" y="130" width="9" height="9" rx="4.5" />
                            <rect x="10" y="220" width="9" height="9" rx="4.5" />
                            <rect x="10" y="85" width="9" height="9" rx="4.5" />
                            <rect x="12" y="282" width="5" height="5" rx="2.5" />
                            <rect x="10" y="175" width="9" height="9" rx="4.5" />
                            <rect x="11" y="266" width="7" height="7" rx="3.5" />
                            <rect y="93" width="5" height="5" rx="2.5" />
                            <rect x="2" y="289" width="2" height="2" rx="1" />
                            <rect y="183" width="5" height="5" rx="2.5" />
                            <rect y="48" width="5" height="5" rx="2.5" />
                            <rect y="138" width="5" height="5" rx="2.5" />
                            <rect y="228" width="5" height="5" rx="2.5" />
                            <rect x="4" y="21" width="5" height="5" rx="2.5" />
                            <rect y="108" width="5" height="5" rx="2.5" />
                            <rect y="198" width="5" height="5" rx="2.5" />
                            <rect y="63" width="5" height="5" rx="2.5" />
                            <rect y="153" width="5" height="5" rx="2.5" />
                            <rect y="243" width="5" height="5" rx="2.5" />
                            <rect y="33" width="5" height="5" rx="2.5" />
                            <rect y="123" width="5" height="5" rx="2.5" />
                            <rect y="213" width="5" height="5" rx="2.5" />
                            <rect y="78" width="5" height="5" rx="2.5" />
                            <rect x="1" y="274" width="3" height="3" rx="1.5" />
                            <rect y="168" width="5" height="5" rx="2.5" />
                            <rect y="258" width="5" height="5" rx="2.5" />
                            <rect x="266" y="11" width="7" height="7" rx="3.5" />
                            <rect x="145" y="10" width="9" height="9" rx="4.5" />
                            <rect x="220" y="10" width="9" height="9" rx="4.5" />
                            <rect x="100" y="10" width="9" height="9" rx="4.5" />
                            <rect x="25" y="14" width="9" height="9" rx="4.5" />
                            <rect x="282" y="12" width="5" height="5" rx="2.5" />
                            <rect x="160" y="10" width="9" height="9" rx="4.5" />
                            <rect x="235" y="10" width="9" height="9" rx="4.5" />
                            <rect x="115" y="10" width="9" height="9" rx="4.5" />
                            <rect x="40" y="10" width="9" height="9" rx="4.5" />
                            <rect x="290" y="2" width="2" height="2" rx="1" />
                            <rect x="169" width="5" height="5" rx="2.5" />
                            <rect x="184" width="5" height="5" rx="2.5" />
                            <rect x="64" width="5" height="5" rx="2.5" />
                            <rect x="49" width="5" height="5" rx="2.5" />
                            <rect x="244" width="5" height="5" rx="2.5" />
                            <rect x="124" width="5" height="5" rx="2.5" />
                            <rect x="199" width="5" height="5" rx="2.5" />
                            <rect x="79" width="5" height="5" rx="2.5" />
                            <rect x="259" width="5" height="5" rx="2.5" />
                            <rect x="139" width="5" height="5" rx="2.5" />
                            <rect x="214" width="5" height="5" rx="2.5" />
                            <rect x="94" width="5" height="5" rx="2.5" />
                            <rect x="22" y="2" width="5" height="5" rx="2.5" />
                            <rect x="11" y="10" width="5" height="5" rx="2.5" />
                            <rect x="275" y="1" width="3" height="3" rx="1.5" />
                            <rect x="154" width="5" height="5" rx="2.5" />
                            <rect x="229" width="5" height="5" rx="2.5" />
                            <rect x="109" width="5" height="5" rx="2.5" />
                            <rect x="35" width="5" height="5" rx="2.5" />
                        </svg>

                        <h3><strong>Quick</strong> Updates</h3>
                        <p>Constant communication is absolutely essential for success. You will be updated through the request board every 2-3 days, and many requests may even be completed in that time.</p>
                    </div>
                </div>

                <a onClick={(e) => handleBtnClick(e, 'services')} className="link">What can I request?</a>

            </div>
        </section>
    )
}