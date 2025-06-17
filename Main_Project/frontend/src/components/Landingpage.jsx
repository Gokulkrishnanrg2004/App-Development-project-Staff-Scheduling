import React from 'react';
import '../assets/Pro.css';

import { Link } from 'react-router-dom';
import background from '../assets/images/bg.png';
// import Layout from './Layout';
import video2 from '../assets/images/video2.webm';

export const LandingPage = () => {
    return (
        <>
            <div>
                {/* <img src={logo} alt="Logo" className="logo" /> */}
                <header style={HeaderStyle}>
                    <h1 className="main-title text-center" >Welcome to FindMyShift</h1>
                    <div className="buttons text-center">
                        <Link to="/home">
                            <button className="primary-button">Explore Now</button>
                        </Link>
                    </div>
                </header>
            </div>
            <div className="primary-content">
                <div className="feature-content">
                <div id="875Hj" className="wrapper feature first-feature video-feature">
                    <h2>Manage your employees from anywhere.</h2>
                    <p class="introduction">Working from home or on the go? Findmyshift is with you wherever you need it. There's
                        nothing to install and nothing to download. Everything you need to manage your employees is right here in your
                        web browser.</p>
                    <div class=" feature-video-container video-videos/features/work-from-anywhere-line-background" data-src="https://cdn6.findmyshift.com/videos/features/work-from-anywhere-line-background">
                        <div></div>
                        <div class="border"></div>
                        <video className="fullscreen-video" autoPlay loop muted>
                            <source src={video2} type="video/webm" />
                            {/* Optionally include an MP4 source if available */}
                            {/* <source src={video1.replace('.webm', '.mp4')} type="video/mp4" /> */}
                        </video>
                    </div>
                    </div>
                </div>
                </div>
            </>
            )
}
            const HeaderStyle = {
            
            width: "100%",
            height: "100vh",
            background: `url(${background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
}
