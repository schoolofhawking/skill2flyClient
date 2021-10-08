import React from 'react'

export default function CourseCard() {
    return (
        <div>
            <section className="feature-course-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="sec-title"><span>Find the Right</span> Online Course for you</h2>
            </div>
            <div className="col-md-7">
              <ul className="shaf-filter">
                <li className="active" data-group="all">All</li>
                <li data-group="development">Web Development</li>
                <li data-group="architecture">Architecture</li>
                <li data-group="engineering">Engineering</li>
                <li data-group="science">Data Science</li>
              </ul>
            </div>
          </div>
          <div className="row shafull-container">
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;science&quot;, &quot;engineering&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/1.png" alt="" />
                    </div>
                    <p>Computer Science</p>
                    <h4>Using Creative Problem Solving</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />10 Lessons</a>
                      <a href="#"><i className="icon_profile" />142</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/1.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">Computer Science</a>
                    <h4><a href="#">Using Creative Problem Solving</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (1 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $38.00
                      <span>$50.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />10 Lessons</a>
                      <a href="#"><i className="icon_profile" />142</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;architecture&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/2.png" alt="" />
                    </div>
                    <p>Art &amp; Design</p>
                    <h4>The Art of Black and White Photography</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />14 Lessons</a>
                      <a href="#"><i className="icon_profile" />203</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/2.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">Art &amp; Design</a>
                    <h4><a href="#">The Art of Black and White Photography</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (2 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $36.00
                      <span>$60.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />14 Lessons</a>
                      <a href="#"><i className="icon_profile" />203</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;development&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/3.png" alt="" />
                    </div>
                    <p>Business Study</p>
                    <h4>Learning jQuery Mobile for Beginners</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />9 Lessons</a>
                      <a href="#"><i className="icon_profile" />76</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/3.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">Business Study</a>
                    <h4><a href="#">Learning jQuery Mobile for Beginners</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (2 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $30.00
                      <span>$40.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />9 Lessons</a>
                      <a href="#"><i className="icon_profile" />76</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;development&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/4.png" alt="" />
                    </div>
                    <p>Web Development</p>
                    <h4>Making Music with Other People</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />12 Lessons</a>
                      <a href="#"><i className="icon_profile" />124</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/4.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">Web Development</a>
                    <h4><a href="#">Making Music with Other People</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (2 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $45.00
                      <span>$55.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />12 Lessons</a>
                      <a href="#"><i className="icon_profile" />124</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;engineering&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/4.png" alt="" />
                    </div>
                    <p>UI/UXDesign</p>
                    <h4>Fundamentals of<br /> UI Design</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />8 Lessons</a>
                      <a href="#"><i className="icon_profile" />102</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/4.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">UI/UXDesign</a>
                    <h4><a href="#">Fundamentals of<br /> UI Design</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (2 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $40.00
                      <span>$50.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />8 Lessons</a>
                      <a href="#"><i className="icon_profile" />102</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;science&quot;]">
              <div className="feature-course-item">
                <div className="flipper">
                  <div className="front">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/6.png" alt="" />
                    </div>
                    <p>Data Science</p>
                    <h4>Buddhism and Modern Psychology</h4>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />18 Lessons</a>
                      <a href="#"><i className="icon_profile" />228</a>
                    </div>
                  </div>
                  <div className="back">
                    <div className="fcf-thumb">
                      <img src="assets/images/home/course/6.png" alt="" />
                    </div>
                    <a href="#" className="c-cate">Data Science</a>
                    <h4><a href="#">Buddhism and Modern Psychology</a></h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <span>4.5 (2 Reviews)</span>
                    </div>
                    <div className="course-price">
                      $65.00
                      <span>$75.00</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/home/course/author.png" alt="" />
                      <a href="#">Anthony</a>
                    </div>
                    <div className="fcf-bottom">
                      <a href="#"><i className="icon_book_alt" />18 Lessons</a>
                      <a href="#"><i className="icon_profile" />228</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
