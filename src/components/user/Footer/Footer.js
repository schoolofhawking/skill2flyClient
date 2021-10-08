import React from 'react'

function Footer() {
    return (
        <footer className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-wrapper">
                <img src="assets/images/home/2.png" alt="" />
                <h3>You can be your own Guiding star with our help!</h3>
                <a href="#" className="bisylms-btn">Get Started Now</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <aside className="widget">
                <div className="about-widget">
                  <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                  <p>
                    Lost the plot Richard you mug cup of tea knackered boot bender.
                  </p>
                  <div className="ab-social">
                    <a className="fac" href="#"><i className="social_facebook" /></a>
                    <a className="twi" href="#"><i className="social_twitter" /></a>
                    <a className="you" href="#"><i className="social_youtube" /></a>
                    <a className="lin" href="#"><i className="social_linkedin" /></a>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-3 col-md-3">
              <aside className="widget">
                <h3 className="widget-title">Explore</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Success Story</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Resource Center</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-md-3">
              <aside className="widget">
                <h3 className="widget-title">Catecories</h3>
                <ul>
                  <li><a href="#">All Courses</a></li>
                  <li><a href="#">Storytelling &amp; Voice Over</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Design &amp; Branding</a></li>
                  <li><a href="#">Nanodegree Plus</a></li>
                  <li><a href="#">Veterans</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-2 col-md-3">
              <aside className="widget">
                <h3 className="widget-title">Support</h3>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">System Requirements</a></li>
                  <li><a href="#">Register Activation Key</a></li>
                  <li><a href="#">Site Feedback</a></li>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Forums</a></li>
                </ul>
              </aside>
            </div>
          </div>
          {/* Copyrigh */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright">
                <p>© 2021 Copyright all Right Reserved Design by <a href="http://quomodosoft.com/">Quomodosoft</a></p>
              </div>
            </div>
          </div>
          {/* Copyrigh */}
        </div>
      </footer>
    )
}

export default Footer
