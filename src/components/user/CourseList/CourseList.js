import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { courseAction } from '../../../redux/rootActions'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function CourseList() {

    const courseDetails = useSelector(state => state.courseData)
    const userData = useSelector((state) => state.userData);
    const dispatch = useDispatch()

    useEffect(() => {
        if (courseDetails.course.length < 1) {
            loadCourseData();
        }

    }, [])
    const loadCourseData = async () => {
        axios.get(process.env.REACT_APP_SERVER + '/getCourses', {
            headers: {
                authorization: "Bearer " + userData.userJwt,
            },
        }).then((response) => {
            if (response.data.error == false) {
                let courseData = response.data.data.reverse()
                //setCourse(courseData)
                let data = {
                    courseData
                }
                dispatch(courseAction(data))
            }
        })

    }
    return (
        <div>
            <Navbar />

            <section className="page-banner" style={{ backgroundImage: 'url(assets/images/banner3.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="banner-title">Courses Grid</h2>
                            <div className="bread-crumbs">
                                <a href="index.html">Home</a> <span /> Courses Grid
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coursepage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="toolbar-wrapper">
                                <ul className="toolbar-btn nav nav-tabs">
                                    <li><a className="active" href="#grid" data-toggle="tab"><i className="icon_grid-2x2" />Grid</a></li>
                                    <li><a href="#list" data-toggle="tab"><i className="icon_menu" />List</a></li>
                                </ul>
                                <div className="sorting" style={{display:"none"}}>
                                    <p>Sort by:</p>
                                    <select name="orderby" className="orderby">
                                        <option value="menu_order" selected="selected">Default</option>
                                        <option value="new">Newest Course</option>
                                        <option value="popular">Popular Course</option>
                                        <option value="rating">Average Rating</option>
                                        <option value="price">Low to High</option>
                                        <option value="price-desc">High to Low</option>
                                    </select>
                                </div>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content">
                                {/* Grid Tab */}
                                <div className="tab-pane fade show in active" id="grid" role="tabpanel">
                                    {/* Filter Title */}
                                    <ul className="shaf-filter course-filter" style={{display:"none"}}>
                                        <li className="active" data-group="all">All</li>
                                        <li data-group="development">Web Development</li>
                                        <li data-group="architecture">Architecture</li>
                                        <li data-group="engineering">Engineering</li>
                                        <li data-group="science">Data Science</li>
                                    </ul>
                                    {/* Filter Title */}
                                    {/* Filter Content */}
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
                                                        <h4><a href="single-course.html">Using Creative Problem Solving</a></h4>
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
                                                        <h4><a href="single-course.html">The Art of Black and White Photography</a></h4>
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
                                                        <h4><a href="single-course.html">Learning jQuery Mobile for Beginners</a></h4>
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
                                                        <h4><a href="single-course.html">Making Music with Other People</a></h4>
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
                                                        <h4><a href="single-course.html">Fundamentals of<br /> UI Design</a></h4>
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
                                                        <h4><a href="single-course.html">Buddhism and Modern Psychology</a></h4>
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
                                        <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;development&quot;]">
                                            <div className="feature-course-item">
                                                <div className="flipper">
                                                    <div className="front">
                                                        <div className="fcf-thumb">
                                                            <img src="assets/images/home/course/7.png" alt="" />
                                                        </div>
                                                        <p>Visual Design</p>
                                                        <h4>Mastering Duotones in Photoshop</h4>
                                                        <div className="fcf-bottom">
                                                            <a href="#"><i className="icon_book_alt" />7 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />103</a>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="fcf-thumb">
                                                            <img src="assets/images/home/course/7.png" alt="" />
                                                        </div>
                                                        <a href="#" className="c-cate">Data Science</a>
                                                        <h4><a href="single-course.html">Mastering Duotones in Photoshop</a></h4>
                                                        <div className="ratings">
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <span>4.5 (2 Reviews)</span>
                                                        </div>
                                                        <div className="course-price">
                                                            $75.00
                                                            <span>$85.00</span>
                                                        </div>
                                                        <div className="author">
                                                            <img src="assets/images/home/course/author.png" alt="" />
                                                            <a href="#">Anthony</a>
                                                        </div>
                                                        <div className="fcf-bottom">
                                                            <a href="#"><i className="icon_book_alt" />7 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />103</a>
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
                                                            <img src="assets/images/home/course/3.png" alt="" />
                                                        </div>
                                                        <p>Designing</p>
                                                        <h4>Dynamic Brand Identity Designing Logos</h4>
                                                        <div className="fcf-bottom">
                                                            <a href="#"><i className="icon_book_alt" />14 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />206</a>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="fcf-thumb">
                                                            <img src="assets/images/home/course/3.png" alt="" />
                                                        </div>
                                                        <a href="#" className="c-cate">Designing</a>
                                                        <h4><a href="single-course.html">Dynamic Brand Identity Designing Logos</a></h4>
                                                        <div className="ratings">
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <span>4.5 (2 Reviews)</span>
                                                        </div>
                                                        <div className="course-price">
                                                            $55.00
                                                            <span>$65.00</span>
                                                        </div>
                                                        <div className="author">
                                                            <img src="assets/images/home/course/author.png" alt="" />
                                                            <a href="#">Anthony</a>
                                                        </div>
                                                        <div className="fcf-bottom">
                                                            <a href="#"><i className="icon_book_alt" />14 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />206</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 shaf-item" data-groups="[&quot;all&quot;, &quot;science&quot;, &quot;engineering&quot;]">
                                            <div className="feature-course-item">
                                                <div className="flipper">
                                                    <div className="front">
                                                        <div className="fcf-thumb">
                                                            <img src="assets/images/home/course/9.png" alt="" />
                                                        </div>
                                                        <p>Software</p>
                                                        <h4>Illustrating Expressive, Stylized People</h4>
                                                        <div className="fcf-bottom">
                                                            <a href="#"><i className="icon_book_alt" />10 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />135</a>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="fcf-thumb">
                                                            <img src="assets/images/home/course/9.png" alt="" />
                                                        </div>
                                                        <a href="#" className="c-cate">Software</a>
                                                        <h4><a href="single-course.html">Illustrating Expressive, Stylized People</a></h4>
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
                                                            <a href="#"><i className="icon_book_alt" />10 Lessons</a>
                                                            <a href="#"><i className="icon_profile" />135</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Filter Content */}
                                    {/* Pagination */}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bisylms-pagination">
                                                <span className="current">01</span>
                                                <a href="#">02</a>
                                                <a className="next" href="#">next<i className="arrow_right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                </div>
                                {/* Grid Tab */}
                                {/* List Tab */}
                                <div className="tab-pane fade in" id="list" role="tabpanel">
                                    <div className="course-item-3 ci-3-color">
                                        <div className="ci-thumb">
                                            <img src="assets/images/home3/p1.jpg" alt="" />
                                            <a href="#" className="c-cate">Software</a>
                                        </div>
                                        <div className="course-details">
                                            <img className="line-bg" src="assets/images/home3/line.jpg" alt="" />
                                            <div className="fcf-bottom">
                                                <a href="#"><i className="icon_book_alt" />14 Lessons</a>
                                                <a href="#"><i className="icon_profile" />203</a>
                                            </div>
                                            <h4><a href="#">The Art of Black and White Photography</a></h4>
                                            <p>
                                                Discover how to become a successful Project Manager with this free online introductory course.
                                            </p>
                                            <div className="author">
                                                <img src="assets/images/home3/author.png" alt="" />
                                                <a href="#">Anthony</a>
                                            </div>
                                            <div className="price-rate">
                                                <div className="course-price">
                                                    $42.76
                                                    <span>$250.85</span>
                                                </div>
                                                <div className="ratings">
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <span>4.5 (2 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-item-3 ci-3-color">
                                        <div className="ci-thumb">
                                            <img src="assets/images/home3/p2.jpg" alt="" />
                                            <a href="#" className="c-cate">Data Science</a>
                                        </div>
                                        <div className="course-details">
                                            <img className="line-bg" src="assets/images/home3/line.jpg" alt="" />
                                            <div className="fcf-bottom">
                                                <a href="#"><i className="icon_book_alt" />18 Lessons</a>
                                                <a href="#"><i className="icon_profile" />228</a>
                                            </div>
                                            <h4><a href="#">Buddhism and Modern Psychology</a></h4>
                                            <p>
                                                Discover how to become a successful Project Manager with this free online introductory course.
                                            </p>
                                            <div className="author">
                                                <img src="assets/images/home3/author.png" alt="" />
                                                <a href="#">Anthony</a>
                                            </div>
                                            <div className="price-rate">
                                                <div className="course-price">
                                                    $65.50
                                                    <span>$220.65</span>
                                                </div>
                                                <div className="ratings">
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <span>4.5 (2 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-item-3 ci-3-color">
                                        <div className="ci-thumb">
                                            <img src="assets/images/home3/p1.jpg" alt="" />
                                            <a href="#" className="c-cate">Software</a>
                                        </div>
                                        <div className="course-details">
                                            <img className="line-bg" src="assets/images/home3/line.jpg" alt="" />
                                            <div className="fcf-bottom">
                                                <a href="#"><i className="icon_book_alt" />10 Lessons</a>
                                                <a href="#"><i className="icon_profile" />199</a>
                                            </div>
                                            <h4><a href="#">Learning jQuery Mobile for Beginners</a></h4>
                                            <p>
                                                Discover how to become a successful Project Manager with this free online introductory course.
                                            </p>
                                            <div className="author">
                                                <img src="assets/images/home3/author.png" alt="" />
                                                <a href="#">Anthony</a>
                                            </div>
                                            <div className="price-rate">
                                                <div className="course-price">
                                                    $42.76
                                                    <span>$250.85</span>
                                                </div>
                                                <div className="ratings">
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <i className="icon_star" />
                                                    <span>4.5 (2 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bisylms-pagination">
                                                <span className="current">01</span>
                                                <a href="#">02</a>
                                                <a className="next" href="#">next<i className="arrow_right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                </div>
                                {/* Grid Tab */}
                            </div>
                            {/* Tab Content */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Course Section End */}
            {/* Call To Action Start */}
            <section className="cta-section-2" style={{ backgroundImage: 'url(assets/images/home3/4.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="sec-title mb-15">Make the most of your<br /> Online learning experience</h2>
                            <p>
                                Our Online Learning Resource Center has tips, tricks and inspiring stories to help you<br /> learn while staying home.
                            </p>
                            <a href="#" className="bisylms-btn">Explore Resources</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call To Action End */}
            <Footer/>
        </div>
    )
}
