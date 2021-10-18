import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function Profile() {
    return (
        <div>
            <Navbar />
            <section className="page-banner" style={{backgroundImage: 'url(assets/images/banner.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="banner-title">Profile</h2>
                <div className="bread-crumbs">
                  <a href="index.html">Home</a> <span /> Profile
                </div>
              </div>
            </div>
          </div>
        </section>  
        {/* Banner End */}
        {/* Teachers Section Start */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="teacher-profile">
                  <div className="teacher-thumb">
                    <img src="assets/images/home2/teacher/1.png" alt="" />
                  </div>
                  <div className="teacher-meta">
                    <h5>Dianne Ameter</h5>
                    <p>Illustrator</p>
                  </div>
                  <p>
                    Cup of char skive off bodge bobby blower tickety-boo quaint a blinding shot pear shaped squiffy harry, young delinquent grub so I said cuppa faff about bum bag bugger.
                  </p>
                  <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="#"><i className="social_facebook" /></a>
                    <a className="twi" href="#"><i className="social_twitter" /></a>
                    <a className="you" href="#"><i className="social_youtube" /></a>
                    <a className="lin" href="#"><i className="social_linkedin" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {/* Tab Title */}
                <ul className="tab-title nav nav-tabs">
                  <li><a className="active" href="#owned" data-toggle="tab">Owned</a></li>
                  <li><a href="#purchased" data-toggle="tab" className>Purchased</a></li>
                </ul>
                {/* Tab Title */}
                {/* Tab Content */}
                <div className="tab-content">
                  {/* Owned Tab */}
                  <div className="tab-pane fade show in active" id="owned" role="tabpanel">
                    <h3 className="course-title">My Courses</h3>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="feature-course-item-4">
                          <div className="fcf-thumb">
                            <img src="assets/images/profile/1.jpg" alt="" />
                            <a className="enroll" href="#">Enroll Now</a>
                          </div>
                          <div className="fci-details">
                            <a href="#" className="c-cate"><i className="icon_tag_alt" />Computer Science</a>
                            <h4><a href="#">Using Creative Problem Solving</a></h4>
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
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feature-course-item-4">
                          <div className="fcf-thumb">
                            <img src="assets/images/profile/2.jpg" alt="" />
                            <a className="enroll" href="#">Enroll Now</a>
                          </div>
                          <div className="fci-details">
                            <a href="#" className="c-cate"><i className="icon_tag_alt" />Art &amp; Design</a>
                            <h4><a href="#">The Art of Black and White Photography</a></h4>
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
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feature-course-item-4">
                          <div className="fcf-thumb">
                            <img src="assets/images/profile/3.jpg" alt="" />
                            <a className="enroll" href="#">Enroll Now</a>
                          </div>
                          <div className="fci-details">
                            <a href="#" className="c-cate"><i className="icon_tag_alt" />Business Study</a>
                            <h4><a href="#">Learning jQuery mobile for Beginners</a></h4>
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
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feature-course-item-4">
                          <div className="fcf-thumb">
                            <img src="assets/images/profile/4.jpg" alt="" />
                            <a className="enroll" href="#">Enroll Now</a>
                          </div>
                          <div className="fci-details">
                            <a href="#" className="c-cate"><i className="icon_tag_alt" />Data Science</a>
                            <h4><a href="#">Buddhism and modern Psychology</a></h4>
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
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feature-course-item-4">
                          <div className="fcf-thumb">
                            <img src="assets/images/profile/5.jpg" alt="" />
                            <a className="enroll" href="#">Enroll Now</a>
                          </div>
                          <div className="fci-details">
                            <a href="#" className="c-cate"><i className="icon_tag_alt" />Web Development</a>
                            <h4><a href="#">Making music with Other people</a></h4>
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
                  {/* Owned Tab */}
                  {/* Purchase Tab */}
                  <div className="tab-pane fade in" id="purchased" role="tabpanel">
                    <ul className="restult-tab-title nav nav-tabs">
                      <li><a className="active" href="#all" data-toggle="tab">All</a></li>
                      <li><a href="#finished" data-toggle="tab" className>Finished</a></li>
                      <li><a href="#passed" data-toggle="tab" className>Passed</a></li>
                      <li><a href="#failed" data-toggle="tab" className>Failed</a></li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab-content">
                      <div className="tab-pane fade show in active" id="all" role="tabpanel">
                        <table className="result-table">
                          <thead>
                            <tr>
                              <th className="course">Course</th>
                              <th className="date">Date</th>
                              <th className="grade">Passing Grade</th>
                              <th className="progres">Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="course">
                                <a href="#">Getting Started with LESS</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">50%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">LMS Interactive Content</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">40%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">From Zero to Hero with Nodejs</a>      
                              </td>
                              <td className="date">14/04/2019</td>
                              <td className="grade">70%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">Helping to change the world</a>      
                              </td>
                              <td className="date">04/07/2018</td>
                              <td className="grade">50%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="show-item">Displaying 1 to 4 of 4 courses.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane show in" id="finished" role="tabpanel">
                        <table className="result-table">
                          <thead>
                            <tr>
                              <th className="course">Course</th>
                              <th className="date">Date</th>
                              <th className="grade">Passing Grade</th>
                              <th className="progres">Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="course">
                                <a href="#">Getting Started with LESS</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">50%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">LMS Interactive Content</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">40%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane show in" id="passed" role="tabpanel">
                        <table className="result-table">
                          <thead>
                            <tr>
                              <th className="course">Course</th>
                              <th className="date">Date</th>
                              <th className="grade">Passing Grade</th>
                              <th className="progres">Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="course">
                                <a href="#">From Zero to Hero with Nodejs</a>      
                              </td>
                              <td className="date">14/04/2019</td>
                              <td className="grade">70%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">Helping to change the world</a>      
                              </td>
                              <td className="date">04/07/2018</td>
                              <td className="grade">50%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane show in" id="failed" role="tabpanel">
                        <table className="result-table">
                          <thead>
                            <tr>
                              <th className="course">Course</th>
                              <th className="date">Date</th>
                              <th className="grade">Passing Grade</th>
                              <th className="progres">Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="course">
                                <a href="#">Getting Started with LESS</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">50%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                            <tr>
                              <td className="course">
                                <a href="#">LMS Interactive Content</a>      
                              </td>
                              <td className="date">24/03/2020</td>
                              <td className="grade">40%</td>
                              <td className="progres">0% In Progress</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Tab Content */}
                  </div>
                  {/* Purchase Tab */}
                </div>
                {/* Tab Content */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    )
}
