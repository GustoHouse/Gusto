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
                <p>We have design experience in a wide range of industries and mediums.</p>

                <div className="portfolio">

                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0992_preview.mp4" />
                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/2020-04/large_watermarked/200314%20_Work%20Life_02_%204k_058_preview.mp4" />
                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/2015-05/large_watermarked/Barley_2_Videvo_preview.mp4" />
                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/FireworksSlowMotion_preview.mp4" />
                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-30_preview.mp4" />
                    <VideoPlayer src="https://joy1.videvo.net/videvo_files/video/free/video0469/large_watermarked/_import_616e710b7f2ff0.35776522_preview.mp4" />
                    
                </div>

            </div>
        </section>
    )
}