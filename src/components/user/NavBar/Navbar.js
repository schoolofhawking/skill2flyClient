import React from 'react'

function Navbar() {
    return (
        <header className="header-01 sticky" id="navbarSch">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                {/* logo Start*/}
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo4.png" alt="" />
                  <img className="sticky-logo" src="assets/images/logo4.png" alt="" />
                </a>
                {/* logo End*/}
                {/* Moblie Btn Start */}
                <button className="navbar-toggler" type="button">
                  <i className="fal fa-bars" />
                </button>
                {/* Moblie Btn End */}
                {/* Nav Menu Start */}
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0);">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-2.html">Home Two</a></li>
                        <li><a href="index-3.html">Home Three</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0);">Courses</a>
                      <ul className="sub-menu">
                        <li><a href="course-1.html">Course 01</a></li>
                        <li><a href="course-2.html">Course 02</a></li>
                        <li><a href="course-3.html">Course 03</a></li>
                        <li><a href="single-course.html">Course Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0);">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0);">About Pages</a>
                          <ul className="sub-menu">
                            <li><a href="about-1.html">About 01</a></li>
                            <li><a href="about-2.html">About 02</a></li>
                          </ul>
                        </li>
                        <li><a href="instructor.html">Instructor Page</a></li>
                        <li><a href="profile.html">Instructor Profile</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0);">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Blog Page</a></li>
                        <li><a href="single-post.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* Nav Menu End */}
                {/* User Btn */}
                <a href="#" className="user-btn"><i className="ti-user" /></a>
                {/* User Btn */}
                {/* Join Btn */}
                <a href="#" className="join-btn">Join for Free</a>
                {/* Join Btn */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Navbar
