import React from 'react'

function BannerOne() {
    return (
        <div>
            
      <section className="hero-banner-1" style={{backgroundImage: 'url(assets/images/home/banner.png)'}}>
        {/* shape */}
        <div className="shape-wrap">
          <div className="b-shape-1">
            <img src="assets/images/home/shape-1.png" alt="" />
          </div>
          <div className="b-shape-2">
            <img src="assets/images/home/shape-2.png" alt="" />
          </div>
          <div className="b-shape-3">
            <img src="assets/images/home/shape-3.png" alt="" />
          </div>
          <div className="b-shape-4">
            <img src="assets/images/home/shape-4.png" alt="" />
          </div>
        </div>
        {/* shape */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="hero-content">
              <h2> SKILL2FLY</h2>
                <p>
               we are under development!!!!!!!!! 
                </p>
                <a href="#" className="bisylms-btn">Ready to Get Started?</a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="banner-thumb">
                <img src="assets/images/newSvg/undraw_education_f8ru.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default BannerOne
