import React from 'react'
import Navbar from '../NavBar/Navbar'

function SingleCourse() {
    return (

        <div>
            <Navbar/>


                  {/* Banner Start */}
      <section className="page-banner" style={{backgroundImage: 'url(assets/images/banner5.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="banner-title">Courses Single</h2>
              <div className="bread-crumbs">
                <a href="index.html">Home</a> <span /> Courses Single
              </div>
            </div>
          </div>
        </div>
      </section>  
      {/* Banner End */}
      
            <section className="course-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="single-course-area">
                <div className="course-top">
                  <h4>Using Creative Problem Solving</h4>
                  <div className="course-meta">
                    <div className="author">
                      <img src="assets/images/home3/course/a1.png" alt="" />
                      <span>Teacher</span>
                      <a href="#">Anthony</a>
                    </div>
                    <div className="categories">
                      <span>Categories:</span>
                      <a href="#">Art &amp; Design</a>
                    </div>
                    <div className="ratings">
                      <span>4.5 (9 Reviews)</span>
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                  </div>
                  <div className="course-price">
                    $75.00
                    <span>$92.00</span>
                  </div>
                </div>
                <div className="sc-thumb">
                  <img src="assets/images/single-course/1.jpg" alt="" />
                </div>
                <div className="course-tab-wrapper">
                  <ul className="course-tab-btn nav nav-tabs">
                    <li><a href="#overview" data-toggle="tab"><i className="icon_ribbon_alt" />Overview</a></li>
                    <li><a href="#curriculum" data-toggle="tab"><i className="icon_book_alt" />Curriculum</a></li>
                    <li><a className="active" href="#instructors" data-toggle="tab"><i className="icon_profile" />Instructors</a></li>
                    <li><a href="#reviews" data-toggle="tab"><i className="icon_star" />Reviews</a></li>
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content">
                    {/* Overview Tab */}
                    <div className="tab-pane fade in" id="overview" role="tabpanel">
                      <div className="overview-content">
                        <h4>Course Description</h4>
                        <p>
                          You mug tickety-boo bite your arm off David bamboozled easy peasy in my flat bugger argy-bargy, Oxford starkers barney bender haggle barmy A bit of how's your father, pear shaped arse over tit dropped a clanger cup of char bloke mufty pukka. He legged it some dodgy chav pardon you vagabond old bubble and squeak posh young delinquent mufty Charles quaint, bloke spend a penny sloshed Harry car boot bugger all mate bamboozled blatant cack, skive off hanky panky cheeky chap hotpot burke such a fibber cheeky bugger blag. Chinwag Eaton owt to do with me Charles excuse my French cor blimey guvnor bender give us a bell gosh bamboozled, wind up in my flat David bog lurgy the full monty cup of char cockup, brolly bevvy super bubble and squeak well starkers cobblers smashing. Only a quid amongst well argy-bargy hotpot bugger all mate chimney pot cup of char do one barmy fantastic, Eaton bloke barney blower haggle cheesed off Elizabeth daft. 
                        </p>
                        <p>
                          Chimney pot barmy easy peasy he lost his bottle nancy boy old cor blimey guvnor bog tickety-boo geeza, Richard on your bike mate down the pub are you taking the piss cack super hunky-dory haggle I spend a penny, hanky panky zonked cobblers spiffing good time cup of tea in my flat faff about the full monty.
                        </p>
                        <h4>Course Description</h4>
                        <ul>
                          <li><i className="icon_check_alt2" />Learn The Latest Skills
                            <span>
                              He lost his bottle starkers up the duff wind up easy peasy cracking goal cheers I butty only a quid he legged it, cuppa the little rotter bevvy bugger all mate spiffing good time.
                            </span>
                          </li>
                          <li><i className="icon_check_alt2" />Earn a Certificate or Degree
                            <span>
                              Chimney pot barmy easy peasy he lost his bottle nancy boy old cor blimey guvnor bog tickety-boo geeza, Richard on your bike mate down the pub are you taking.
                            </span>
                          </li>
                          <li><i className="icon_check_alt2" />Get Ready for a Career
                            <span>
                              Lost the plot plastered he lost his bottle blatant barney butty are you taking the piss porkies me old mucker young delinquent smashing so I said pear shaped cheeky say.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Overview Tab */}
                    {/* Curriculum Tab */}
                    <div className="tab-pane fade in" id="curriculum" role="tabpanel">
                      <div className="curriculum-item" id="id_1">
                        <div className="card-header" id="cc_1">
                          <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#acc_1" aria-expanded="true" aria-controls="acc_1">
                              Understanding Customer Service
                            </button>
                          </h5>
                        </div>
                        <div id="acc_1" className="collapse show" aria-labelledby="cc_1" data-parent="#id_1">
                          <div className="card-body">
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Identifying Customer Expectations</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">02 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Customer Service And The Telephone</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">04 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Handling Complaints</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">03 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Customer Service Skills - Course Assessment</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">03 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Focusing On The Customer</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">01 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="curriculum-item" id="id_2">
                        <div className="card-header" id="cc_2">
                          <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#acc_2" aria-expanded="true" aria-controls="acc_2">
                              Handling Complaints
                            </button>
                          </h5>
                        </div>
                        <div id="acc_2" className="collapse show" aria-labelledby="cc_2" data-parent="#id_2">
                          <div className="card-body">
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Handling Complaints</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">02 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Customer Service And The Telephone</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">04 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">WooCommerce Payments</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="questions">4 questions</a>
                                <a href="#" className="time">03 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="curriculum-item" id="id_3">
                        <div className="card-header" id="cc_3">
                          <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#acc_3" aria-expanded="true" aria-controls="acc_3">
                              Pellentesque Pretium
                            </button>
                          </h5>
                        </div>
                        <div id="acc_3" className="collapse show" aria-labelledby="cc_3" data-parent="#id_3">
                          <div className="card-body">
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">How to Use WordPress</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">02 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Certificate On Theme Development</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">04 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item with-bg">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Focusing On The Customer</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="questions">4 questions</a>
                                <a href="#" className="time">03 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                            <div className="ci-item">
                              <h5>
                                <i className="icon_menu-square_alt2" />
                                <a href="#">Identifying Customer Expectations</a>
                              </h5>
                              <div className="ci-tools">
                                <a href="#" className="time">03 hour</a>
                                <a href="#" className="lock"><i className="icon_lock_alt" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Curriculum Tab */}
                    {/* Instructors Tab */}
                    <div className="tab-pane fade in show active" id="instructors" role="tabpanel">
                      <div className="teacher-item-3">
                        <div className="teacher-thumb">
                          <img src="assets/images/single-course/i1.jpg" alt="" />
                        </div>
                        <div className="teacher-meta">
                          <h5><a href="#">Dianne Ameter</a></h5>
                          <span>Illustrator</span>
                          <p>
                            I don't want no agro car boot lavatory wind up twit haggle spiffing show off show off pick your nose and blow off spend a penny David zonked what a plonker are you taking.
                          </p>
                          <div className="teacher-social">
                            <a href="#"><i className="social_facebook" /></a>
                            <a href="#"><i className="social_twitter" /></a>
                            <a href="#"><i className="social_linkedin" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-item-3">
                        <div className="teacher-thumb">
                          <img src="assets/images/single-course/i2.jpg" alt="" />
                        </div>
                        <div className="teacher-meta">
                          <h5><a href="#">Hugh Saturation</a></h5>
                          <span>Photographer</span>
                          <p>
                            I don't want no agro car boot lavatory wind up twit haggle spiffing show off show off pick your nose and blow off spend a penny David zonked what a plonker are you taking.
                          </p>
                          <div className="teacher-social">
                            <a href="#"><i className="social_facebook" /></a>
                            <a href="#"><i className="social_twitter" /></a>
                            <a href="#"><i className="social_linkedin" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-item-3">
                        <div className="teacher-thumb">
                          <img src="assets/images/single-course/i3.jpg" alt="" />
                        </div>
                        <div className="teacher-meta">
                          <h5><a href="#">Jim Séchen</a></h5>
                          <span>Stylist &amp; Author</span>
                          <p>
                            I don't want no agro car boot lavatory wind up twit haggle spiffing show off show off pick your nose and blow off spend a penny David zonked what a plonker are you taking.
                          </p>
                          <div className="teacher-social">
                            <a href="#"><i className="social_facebook" /></a>
                            <a href="#"><i className="social_twitter" /></a>
                            <a href="#"><i className="social_linkedin" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Instructors Tab */}
                    {/* Reviews Tab */}
                    <div className="tab-pane fade in" id="reviews" role="tabpanel">
                      <div className="reviw-area">
                        <h4>Reviews</h4>
                        <div className="reating-details">
                          <div className="average-rate">
                            <p>Average Rating</p>
                            <div className="rate-box">
                              <h2>4.8</h2>
                              <div className="ratings">
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                              </div>
                              <span>4 Reviews</span>
                            </div>
                          </div>
                          <div className="details-rate">
                            <p>Detailed Rating</p>
                            <div className="detail-rate-box">
                              <div className="rate-item">
                                <p>5</p>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span>100%</span>
                              </div>
                              <div className="rate-item">
                                <p>4</p>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={30} />
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="rate-item">
                                <p>3</p>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={20} />
                                </div>
                                <span>20%</span>
                              </div>
                              <div className="rate-item">
                                <p>2</p>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={10} />
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="rate-item">
                                <p>1</p>
                                <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={0} />
                                </div>
                                <span>0%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-rating">
                          <h5>Comments ( 3 )</h5>
                          <ol>
                            <li>
                              <div className="single-comment">
                                <img src="assets/images/single-course/r1.png" alt="" />
                                <h5><a href="#">Dianne Ameter</a></h5>
                                <span>August 8, 2012 at 9:22 am</span>
                                <div className="comment">
                                  <p>
                                    I don't want no agro car boot lavatory wind up twit haggle spiffing show off show off pick your nose and blow off spend a penny David zonked what a plonker are you taking.
                                  </p>
                                </div>
                                <div className="ratings">
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                </div>
                                <div className="c-border" />
                              </div>
                            </li>
                            <li>
                              <div className="single-comment">
                                <img src="assets/images/single-course/r2.png" alt="" />
                                <h5><a href="#">Hugh Saturation</a></h5>
                                <span>March 14, 2012 at 10:13 am</span>
                                <div className="comment">
                                  <p>
                                    Lavatory wind up twit haggle spiffing show off show off pick your nose and blow off spend a penny David zonked what a plonker are you taking.
                                  </p>
                                </div>
                                <div className="ratings">
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <span><i className="icon_star" /></span>
                                </div>
                                <div className="c-border" />
                              </div>
                            </li>
                            <li>
                              <div className="single-comment">
                                <img src="assets/images/single-course/r3.png" alt="" />
                                <h5><a href="#">Jim Séchen</a></h5>
                                <span>April 16, 2012 at 12:15 pm</span>
                                <div className="comment">
                                  <p>
                                    He lost his bottle cheeky bugger such fibber Harry porkies spiffing good time wind up argy bargy arse bite your arm off bugger.
                                  </p>
                                </div>
                                <div className="ratings">
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <i className="icon_star" />
                                  <span>
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div className="review-form-area">
                          <h5>Leave a Comment</h5>
                          <div className="comment-form">
                            <form className="row" action="#" method="post">
                              <div className="col-md-6">
                                <input type="text" name="name" placeholder="Name" />
                              </div>
                              <div className="col-md-6">
                                <input type="email" name="email" placeholder="Email" />
                              </div>
                              <div className="col-md-12">
                                <input type="text" name="ttile" placeholder="Review Title" />
                              </div>
                              <div className="col-md-12">
                                <div className="comment-form-rating">
                                  <label>Ratings:</label>
                                  <div className="ratings" id="rating">
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <span>
                                      <i className="icon_star" />
                                      <i className="icon_star" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <textarea placeholder="Coment" defaultValue={""} />
                              </div>
                              <div className="col-md-12">
                                <button type="submit">Submit Review</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Reviews Tab */}
                  </div>
                  {/* Tab Content */}
                </div>
                <div className="post-share">
                  <h5>Share:</h5>
                  <a className="fac" href="#"><i className="social_facebook" /></a>
                  <a className="twi" href="#"><i className="social_twitter" /></a>
                  <a className="goo" href="#"><i className="social_googleplus" /></a>
                </div>
                <div className="related-course">
                  <h3>Related Courses</h3>
                  <div className="related-course-slider owl-carousel">
                    <div className="feature-course-item-4">
                      <div className="fcf-thumb">
                        <img src="assets/images/profile/1.jpg" alt="" />
                        <a className="enroll" href="#">Enroll Now</a>
                      </div>
                      <div className="fci-details">
                        <a href="#" className="c-cate"><i className="icon_tag_alt" />Computer Science</a>
                        <h4><a href="single-course.html">Using Creative Problem Solving</a></h4>
                        <div className="author">
                          <img src="assets/images/home3/course/a1.png" alt="" />
                          <a href="#">Anthony</a>
                        </div>
                        <div className="price-rate">
                          <div className="course-price">
                            Free
                            <span>$42.85</span>
                          </div>
                          <div className="ratings">
                            <i className="icon_star" />
                            <span>4.5 (2,420)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feature-course-item-4">
                      <div className="fcf-thumb">
                        <img src="assets/images/profile/2.jpg" alt="" />
                        <a className="enroll" href="#">Enroll Now</a>
                      </div>
                      <div className="fci-details">
                        <a href="#" className="c-cate"><i className="icon_tag_alt" />Art &amp; Design</a>
                        <h4><a href="single-course.html">The Art of Black and White Photography</a></h4>
                        <div className="author">
                          <img src="assets/images/home3/course/a2.png" alt="" />
                          <a href="#">Giles Posture</a>
                        </div>
                        <div className="price-rate">
                          <div className="course-price">
                            $75.00
                            <span>$92.00</span>
                          </div>
                          <div className="ratings">
                            <i className="icon_star" />
                            <span>4.2 (1,203)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feature-course-item-4">
                      <div className="fcf-thumb">
                        <img src="assets/images/profile/3.jpg" alt="" />
                        <a className="enroll" href="#">Enroll Now</a>
                      </div>
                      <div className="fci-details">
                        <a href="#" className="c-cate"><i className="icon_tag_alt" />Business Study</a>
                        <h4><a href="single-course.html">Learning jQuery mobile for Beginners</a></h4>
                        <div className="author">
                          <img src="assets/images/home3/course/a3.png" alt="" />
                          <a href="#">Hans Down</a>
                        </div>
                        <div className="price-rate">
                          <div className="course-price">
                            $53.00
                            <span>$74.00</span>
                          </div>
                          <div className="ratings">
                            <i className="icon_star" />
                            <span>4.5 (2,420)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feature-course-item-4">
                      <div className="fcf-thumb">
                        <img src="assets/images/profile/4.jpg" alt="" />
                        <a className="enroll" href="#">Enroll Now</a>
                      </div>
                      <div className="fci-details">
                        <a href="#" className="c-cate"><i className="icon_tag_alt" />Data Science</a>
                        <h4><a href="single-course.html">Buddhism and modern Psychology</a></h4>
                        <div className="author">
                          <img src="assets/images/home3/course/a4.png" alt="" />
                          <a href="#">Richard Tea</a>
                        </div>
                        <div className="price-rate">
                          <div className="course-price">
                            $62.00
                            <span>$97.00</span>
                          </div>
                          <div className="ratings">
                            <i className="icon_star" />
                            <span>4.5 (2,420)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feature-course-item-4">
                      <div className="fcf-thumb">
                        <img src="assets/images/profile/5.jpg" alt="" />
                        <a className="enroll" href="#">Enroll Now</a>
                      </div>
                      <div className="fci-details">
                        <a href="#" className="c-cate"><i className="icon_tag_alt" />Web Development</a>
                        <h4><a href="single-course.html">Making music with Other people</a></h4>
                        <div className="author">
                          <img src="assets/images/home3/course/a6.png" alt="" />
                          <a href="#">Hilary Ouse</a>
                        </div>
                        <div className="price-rate">
                          <div className="course-price">
                            #34.00
                            <span>$55.00</span>
                          </div>
                          <div className="ratings">
                            <i className="icon_star" />
                            <span>4.5 (2,420)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course-sidebar">
                <aside className="widget">
                  <div className="info-course">
                    <ul>
                      <li><i className="icon_house_alt" /><span>Instructor: </span> Justin Case</li>
                      <li><i className="icon_document_alt" /><span>Lectures: </span> 14</li>
                      <li><i className="icon_clock_alt" /><span>Duration: </span> 10 weeks</li>
                      <li><i className="icon_profile" /><span>Enrolled: </span> 75 students</li>
                      <li><i className="icon_cog" /><span>Language: </span> English</li>
                      <li><i className="icon_calendar" /><span>Deadline: </span> 16 April 2020</li>
                    </ul>
                    <a className="bisylms-btn" href="#">Enroll Course</a>
                  </div>
                </aside>
                <aside className="widget">
                  <h3 className="widget-title">Latest Courses</h3>
                  <div className="latest-course">
                    <a href="single-course.html"><img src="assets/images/course/1.jpg" alt="" /></a>
                    <h5><a href="single-course.html">Using creative problem Solving</a></h5>
                    <div className="course-price">
                      $24.00
                    </div>
                  </div>
                  <div className="latest-course">
                    <a href="single-course.html"><img src="assets/images/course/2.jpg" alt="" /></a>
                    <h5><a href="single-course.html">Fundamentals of UI Design</a></h5>
                    <div className="course-price">
                      Free
                      <span>$76.00</span>
                    </div>
                  </div>
                  <div className="latest-course">
                    <a href="single-course.html"><img src="assets/images/course/3.jpg" alt="" /></a>
                    <h5><a href="single-course.html">Making music Other people</a></h5>
                    <div className="course-price">
                      $46
                      <span>$76.00</span>
                    </div>
                  </div>
                  <div className="latest-course">
                    <a href="single-course.html"><img src="assets/images/course/4.jpg" alt="" /></a>
                    <h5><a href="single-course.html">Learning jQuery mobile.</a></h5>
                    <div className="course-price">
                      $74
                      <span>$94.00</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default SingleCourse
