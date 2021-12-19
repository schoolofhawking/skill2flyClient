import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { courseAction } from '../../../redux/rootActions'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function CourseList() {

    const courseDetails = useSelector(state => state.courseData)
    const userData = useSelector((state) => state.userData);
    const dispatch = useDispatch()
    const history = useHistory()

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

    const courseClick = (id) => {
        history.push('/singlecourse/' + id)
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
                                <div className="sorting" style={{ display: "none" }}>
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
                                    <ul className="shaf-filter course-filter" style={{ display: "none" }}>
                                        <li className="active" data-group="all">All</li>
                                        <li data-group="development">Web Development</li>
                                        <li data-group="architecture">Architecture</li>
                                        <li data-group="engineering">Engineering</li>
                                        <li data-group="science">Data Science</li>
                                    </ul>
                                    {/* Filter Title */}
                                    {/* Filter Content */}
                                    {/* data-groups="[&quot;all&quot;, &quot;science&quot;, &quot;engineering&quot;]" */}
                                    <div className="row shafull-container">
                                        {courseDetails.course.length > 0 ? courseDetails.course.map((data, i) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 shaf-item" >
                                                    <div className="feature-course-item">
                                                        <div className="flipper">
                                                            <div className="front">
                                                                <div className="fcf-thumb">
                                                                    <img src={process.env.REACT_APP_S3_COURSE_BUCKET + data._id + ".jpg"} onError={(e) => { e.target.onerror = null; e.target.src = "assets/images/home/course/2.png" }} alt="" />
                                                                </div>
                                                                <p target="_blank" href={'https://www.google.com/search?q=' + data.courseCategory.categoryName}>{data.courseCategory.categoryName}</p>
                                                                <h4>{data.courseName}</h4>
                                                                <div className="fcf-bottom">
                                                                    <a><i className="icon_book_alt" />{data.subCourses.length + " Sections"}</a>
                                                                    <a><i className="far fa-clock" />{data.duration}</a>
                                                                </div>
                                                            </div>
                                                            <div className="back">
                                                                <div className="fcf-thumb">
                                                                    <img src={process.env.REACT_APP_S3_COURSE_BUCKET + data._id + ".jpg"} onError={(e) => { e.target.onerror = null; e.target.src = "assets/images/home/course/1.png" }} alt="" />
                                                                </div>
                                                                <a target="_blank" href={'https://www.google.com/search?q=' + data.courseCategory.categoryName} className="c-cate">{data.courseCategory.categoryName}</a>
                                                                <h4 style={{ cursor: "pointer" }} onClick={() => courseClick(data._id)}>{data.courseName}</h4>
                                                                {/* <div className="ratings">
                                                                    <i className="icon_star" />
                                                                    <i className="icon_star" />
                                                                    <i className="icon_star" />
                                                                    <i className="icon_star" />
                                                                    <i className="icon_star" />
                                                                    <span>4.5 (1 Reviews)</span>
                                                                </div> */}
                                                                <div className="course-price">
                                                                    {'₹' + data.discountPrice + '.00'}
                                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                                        <span>{'₹' + data.actualPrice + '.00'}</span>
                                                                        <a style={{ fontSize: "medium", margin: "5px 10px" }}>{data.discountPercentage + '% OFF'}</a>
                                                                    </div>
                                                                </div>
                                                                <div className="author">
                                                                    <img src="assets/images/home/course/author.png" alt="" />
                                                                    <a>{data.author}</a>
                                                                </div>
                                                                <div className="fcf-bottom">
                                                                    <a ><i className="icon_book_alt" />{data.subCourses.length + " Sections"}</a>
                                                                    <a><i className="far fa-clock" />{data.duration}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }) : <h1>No courses Available</h1>}

                                    </div>
                                    {/* Filter Content */}
                                    {/* Pagination */}

                                    {/* <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bisylms-pagination">
                                                <span className="current">01</span>
                                                <a href="#">02</a>
                                                <a className="next" href="#">next<i className="arrow_right" /></a>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* Pagination */}
                                </div>
                                {/* Grid Tab */}
                                {/* List Tab */}
                                <div className="tab-pane fade in" id="list" role="tabpanel">
                                    {courseDetails.course.length > 0 ? courseDetails.course.map((data, i) => {
                                        return (
                                            <div className="course-item-3 ci-3-color">
                                                <div className="ci-thumb" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                                    <img style={{ width: "400px", height: "auto" }} src={process.env.REACT_APP_S3_COURSE_BUCKET + data._id + ".jpg"} onError={(e) => { e.target.onerror = null; e.target.src = "assets/images/home/course/1.png" }} alt="" />
                                                    <a style={{ top: "auto" }} target="_blank" href={'https://www.google.com/search?q=' + data.courseCategory.categoryName} className="c-cate">{data.courseCategory.categoryName}</a>
                                                </div>
                                                <div className="course-details">
                                                    <img className="line-bg" src="assets/images/home3/line.jpg" alt="" />
                                                    <div className="fcf-bottom">
                                                        <a ><i className="icon_book_alt" />{data.subCourses.length + " Sections"}</a>
                                                        <a><i className="far fa-clock" />{data.duration}</a>
                                                    </div>
                                                    <h4>{data.courseName}</h4>
                                                    <p>
                                                        {data.courseDescription.split('. ', 1)[0]}
                                                    </p>
                                                    <div className="author">
                                                       
                                                        <a>{data.author}</a>
                                                    </div>
                                                    <div className="price-rate">
                                                    <div className="course-price">
                                                                    {'₹' + data.discountPrice + '.00'}
                                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                                        <span>{'₹' + data.actualPrice + '.00'}</span>
                                                                        <a style={{ fontSize: "medium", marginLeft: "10px" }}>{data.discountPercentage + '% OFF'}</a>
                                                                    </div>
                                                                </div>
                                                        {/* <div className="ratings">
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <i className="icon_star" />
                                                            <span>4.5 (2 Reviews)</span>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : <p>No course Available</p>}

                                    {/* Pagination */}
                                    {/* <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bisylms-pagination">
                                                <span className="current">01</span>
                                                <a href="#">02</a>
                                                <a className="next" href="#">next<i className="arrow_right" /></a>
                                            </div>
                                        </div>
                                    </div> */}
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
            <Footer />
        </div>
    )
}
