import './Design.scss';

import { useRef } from 'react';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef();
  
    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    return (
        <video
            muted
            loop
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <source src={src} type="video/mp4" />
        </video>
    );
};

export default function Design() {
    return (
        <section id="design" className="design">
            <div className="container">

                <h2>It's all by <strong>design.</strong></h2>
                <p>We have design and development experience in a wide range of industries.</p>

                <div className="portfolio">

                    <VideoPlayer src="/videos/zimmer.mp4" />
                    <VideoPlayer src="/videos/gainesway.mp4" />
                    <VideoPlayer src="/videos/cognision.mp4" />
                    <VideoPlayer src="/videos/match.mp4" />
                    <VideoPlayer src="/videos/virtualpeaker.mp4" />
                    <VideoPlayer src="/videos/holidayinn.mp4" />
                    
                </div>

            </div>
        </section>
    )
}