import React from 'react'

export default function HomeVideo() {
    return (
        <div>
            <section className="cta-section" style={{ backgroundImage: 'url(assets/images/home/cta-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="sec-title"><span>Online Course</span> From 160 Top Institutions.</h2>
                            <p>
                                So I said codswallop car boot cheers mufty I don't want no agro are you taking the<br /> piss cheeky my lady gutted mate excuse my french.
                            </p>
                            <a href="#" className="bisylms-btn">Start Courses</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cta End */}
            {/* Video Start */}
            <div className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <div className="video-banner" style={{ backgroundImage: 'url(assets/images/home/video-bg.jpg)' }}>
                                <a className="popup-video" href="https://player.vimeo.com/video/101626307" data-rel="lightcase"><i className="fas fa-play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
