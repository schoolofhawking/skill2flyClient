import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, Switch } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { adminData as adminAction } from "../../../redux/rootActions";
import AdminManagement from "../AdminManagement/AdminManagement";
import CourseCategoryManagement from "../CourseCategoryManagement/CourseCategoryManagement";
import CourseManagement from "../CourseManagement/CourseManagement";
import SubCourse from "../SubCourse/SubCourse";
import UserManagement from "../UserManagement/UserManagement";
import './Sidebar.css'

export default function Sidebar() {
  const adminDetails = useSelector(state => state.adminData)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (adminDetails.adminLogin == false) {
      toast.dismiss("You are not authorized to Access this page")
      history.push('/admin')
    }
  })

  const [dashboardBool, setDashboardBool] = useState(false)
  const [othersBool, setOthersBool] = useState(false)
  function closeSideBar() {
    document.getElementById('pageWrapper').classList.remove('toggled')
  }
  function showSideBar() {
    document.getElementById('pageWrapper').classList.add('toggled')
  }

  const searchMenu = () => {
    let inputVal = document.getElementById('searchInput').value.toUpperCase()
    let div = document.getElementById('searchMenu')
    let list = div.getElementsByClassName('sideElement')
    for (let i = 0; i < list.length; i++) {
      let txtValue = list[i].textContent || list[i].innerText;
      if (txtValue.toUpperCase().indexOf(inputVal) > -1) {
        list[i].style.display = "";
        if ((txtValue == 'User Dashboard') || (txtValue == 'Course Dashboard')) {
          list[i].style.marginLeft = "0em"
        } else {
          list[i].setAttribute('style', 'marginLeft:2em !important')
        }
      } else {
        list[i].setAttribute('style', 'display:none !important')
      }
    }
  }

  const logout = () => {
    Swal.fire({
      icon: "question",
      title: "Are You Sure to Logout?",
      showConfirmButton: true,
      confirmButtonText: "Proceed to Logout",
      confirmButtonColor: "red",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        let adminInfo = {
          adminId: '',
          adminName: '',
          adminEmail: '',
          adminJwt: '',
          adminLogin: false
        }
        dispatch(adminAction(adminInfo))
        history.push('/admin')
      }
    })
  }
  return (
    <>
      {/* Make Sure To Put Link Instead of A Tag for Routing */}
      <div className="page-wrapper chiller-theme toggled" id="pageWrapper">
        <a style={{ position: "absolute", left: "0px" }} id="show-sidebar" className="btn btn-sm btn-dark" onClick={showSideBar} id="showSideBar">
          <i className="fas fa-bars" />
        </a>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <a href="#">SKILL2FLY.COM</a>
              <div id="close-sidebar" onClick={closeSideBar}>
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img className="profile_img" src={process.env.REACT_APP_S3_USER_BUCKET + adminDetails.adminId + '.jpg'} onError={(e) => { e.target.onerror = null; e.target.src = "assets/images/home2/teacher/1.png" }} alt="" />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>{adminDetails.adminName.length > 0 ? adminDetails.adminName : 'Admin'}</strong>
                </span>
                {/* <span className="user-role">Administrator</span> */}
                <span className="user-status text-left">
                  <i className="fa fa-circle" />
                  <span>Online</span>
                </span>
              </div>
            </div>
            {/* sidebar-header  */}
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control search-menu" id="searchInput" onKeyUp={searchMenu} placeholder="Search..." />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* sidebar-search  */}
            <div className="sidebar-menu">
              <ul id="searchMenu">
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <a onClick={() => { setDashboardBool(!dashboardBool); setOthersBool(false) }} aria-controls="dashboardCollapse"
                    aria-expanded={dashboardBool} style={{ marginLeft: "0em" }} className="sideElement" >
                    <i className="fas fa-tachometer-alt" />
                    <span >User Dashboard</span>
                    {/* <span className="badge badge-pill badge-warning">New</span> */}
                  </a>
                  <Collapse in={dashboardBool}>
                    <div id="dashboardCollapse">

                      <Link to="/admin/usermanagement" className="sideElement">
                        <i className="fas fa-user" />
                        <span>User Management</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </Link>
                      <Link to="/admin/manageAdmin" className="sideElement">
                        <i className="fas fa-user-shield" />
                        <span>Manage Admins</span>
                      </Link>

                    </div>
                  </Collapse>
                </li>

                <li className="sidebar-dropdown">
                  <a onClick={() => { setOthersBool(!othersBool); setDashboardBool(false) }} aria-controls="othersCollapse"
                    aria-expanded={othersBool} style={{ marginLeft: "0em" }} className="sideElement" >
                    <i className="fas fa-university" />
                    <span >Course Dashboard</span>
                    {/* <span className="badge badge-pill badge-primary">Beta</span> */}
                  </a>
                  <Collapse in={othersBool}>
                    <div id="othersCollapse">
                      <Link to="/admin/courses" className="sideElement">
                        <i className="far fa-gem" />
                        <span>Course Management</span>
                      </Link>

                      <Link to="/admin/subCourse" className="sideElement">
                        <i className="far fa-gem" />
                        <span>Sub-Course Manage</span>
                      </Link>


                      <Link to="/admin/category" className="sideElement">
                        <i className="fas fa-sitemap" />
                        <span>Category Management</span>
                      </Link>
                      {/* <a href="#" className="sideElement">
                        <i className="fa fa-calendar" />
                        <span>Calendar</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-folder" />
                        <span>Examples</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-globe" />
                        <span>Maps</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-chart-line" />
                        <span>Charts</span>
                      </a> */}
                    </div>
                  </Collapse>
                </li>
              </ul>
            </div>
            {/* sidebar-menu  */}
          </div>
          {/* sidebar-content  */}
          <div className="sidebar-footer">
            <a href="#">
              <i className="fa fa-bell" />
              <span className="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#" style={{ display: "none" }}>
              <i className="fa fa-envelope" />
              <span className="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#" style={{ marginRight: "-2em" }}>
              <i className="fa fa-cog" />
              <span className="badge-sonar" />
            </a>
            <a className="logoutIcon" onClick={logout}>
              <i className="fa fa-power-off"  ><span className="logoutIcon pl-2">Logout</span></i>
            </a>
          </div>
        </nav>


        {/* sidebar-wrapper  */}


        <main className="page-content">
          <div >
            <Switch>
              <Route>
                <Route path="/admin/usermanagement"> <UserManagement /></Route>
                <Route path="/admin/manageAdmin"> <AdminManagement /></Route>
                <Route path="/admin/courses"><CourseManagement /></Route>
                <Route path="/admin/category"><CourseCategoryManagement /></Route>
                <Route path="/admin/subCourse"><SubCourse /></Route>
              </Route>
            </Switch>

          </div>
        </main>
        {/* page-content" */}



      </div>

      {/* page-wrapper */}
    </>
  )
}
