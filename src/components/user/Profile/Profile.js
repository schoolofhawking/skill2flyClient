import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { profileData as profileAction } from '../../../redux/rootActions'
import Swal from 'sweetalert2'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'
import './Profile.css'

export default function Profile() {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const profileData = useSelector(state => state.profileData)
  let history = useHistory()
  useEffect(() => {
    if (userData.userLogin === false) {
      swalFire()
    }
  }, [])
  function swalFire() {
    Swal.fire({
      icon: "warning",
      title: "You Haven't Logged In!",
      showCancelButton: true,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Go To Login",
      denyButtonText: "Register Now"
    }).then((result) => {

      if (result.isConfirmed) {
        history.push('/login')
      } else if (result.isDenied) {
        history.push('/signup')
      } else {
        swalFire()
      }
    })
  }
  const editProfile = ()=>
  {
    axios.get(process.env.REACT_APP_SERVER + '/getProfileData',{
      headers:{
        authorization : 'Bearer ' + userData.userJwt
      }
    }).then((response)=>{
      if(response.data.error===false)
      {
        dispatch(profileAction(response.data.profileData))
      }
    })
  }
  return (
    <div>
      <Navbar />
      <section className="page-banner" style={{ backgroundImage: 'url(assets/images/banner.jpg)' }}>
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
                  {userData.userLogin === true ? <h5>{userData.userName}</h5> : <h5>User001</h5>}
                  <p>{profileData.profileDesignation=='-'?'My Designation':profileData.profileDesignation}</p>
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
                <li><a className="active" href="#myprofile" data-toggle="tab">My Profile</a></li>
                <li><a href="#owned" data-toggle="tab">Owned</a></li>
                <li><a href="#purchased" data-toggle="tab" className>Purchased</a></li>
                <li><a href="#editprofile" onClick={()=>editProfile()} data-toggle="tab">Edit Profile</a></li>
              </ul>
              {/* Tab Title */}
              {/* Tab Content */}
              <div className="tab-content">
                {/* Profile Tab */}
                <div className="tab-pane fade active show" id="myprofile" role="tabpanel">
                  <h3 className="course-title">My Profile</h3>
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-5 profileList">
                      <label>Name : </label>
                      <p className="profileName">{userData.userName}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Email : </label>
                      <p className="profileName">{userData.userMail}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Mobile : </label>
                      <p className="profileName">{userData.userPhone}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Country : </label>
                      <p className="profileName">{profileData.profileCountry.length!=0?profileData.profileCountry:'-'}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>State : </label>
                      <p className="profileName">{profileData.profileState.length!=0?profileData.profileState:'-'}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>City : </label>
                      <p className="profileName">{profileData.profileCity.length!=0?profileData.profileCity:'-'}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Qualification : </label>
                      <p className="profileName">{profileData.profileQualification.length!=0?profileData.profileQualification:'-'}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Designation : </label>
                      <p className="profileName">{profileData.profileDesignation.length!=0?profileData.profileDesignation:'-'}</p>
                    </div>

                  </div>
                </div>
                {/* Profile Tab Ends */}
                <div className="tab-pane fade in" id="owned" role="tabpanel">
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
                <div className="tab-pane fade" id="editprofile" role="tabpanel">edit</div>
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
