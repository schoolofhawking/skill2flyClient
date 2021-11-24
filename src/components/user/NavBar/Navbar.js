import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { userData } from '../../../redux/rootActions'

function Navbar() {
  let history = useHistory()
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userData)
  useEffect(() => {
  }, [])
  const logout = ()=>
  {
    Swal.fire({
      icon:"question",
      title:"Are You Sure to Logout?",
      showConfirmButton:true,
      confirmButtonText:"Proceed to Logout",
      confirmButtonColor:"red",
      showCancelButton:true
    }).then((result)=>
    {
      if(result.isConfirmed)
      {
        let userInfo = {
          userId: "",
          userName: "",
          userMail: "",
          userJwt:"",
          userPhone: "",
          userLogin: false
        }
        dispatch(userData(userInfo))
        localStorage.removeItem('persist:root')
        history.push('/')
      }
    })
  }
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/course">Courses</Link>
                  </li>
                  {/* <li className="menu-item-has-children">
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
                    </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav Menu End */}
              {/* User Btn */}
              {userDetails.userLogin==true?<div id="Logout" style={{cursor:"pointer"}} onClick={logout}><span className="text-white" style={{fontWeight:"600"}} >Logout</span></div>:<div id="ProfileBtn"><Link to="/profile"><i className="ti-user" style={{ fontSize: "1.5em", color: "white" }} /></Link></div>}
              {/* User Btn */}
              {/* Join Btn */}
              {userDetails.userLogin==true?<div id="UserBtn" ><Link to="/profile" className="join-btn">{userDetails.userName}</Link></div>:<div id="JoinBtn"><Link to="/signup" className="join-btn">Join for Free</Link></div>}
              {/* This feature is under maintainace...used for putting logout btn on profile hover*/}
              {/* <ul id="userProfile" className="navbar-nav">
                <li className="menu-item-has-children">
                  <a href="javascript:void(0);"><Link to='/profile' className="join-btn">{userData.userName}</Link></a>
                  <ul className="sub-menu" style={{marginTop:"-1em"}}>
                    <li><Link to="/logout">Logout</Link></li>
                  </ul>
                </li>
              </ul> */}

            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
