import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import UserManagement from "../UserManagement/UserManagement";
import './Sidebar.css'

export default function Sidebar() {
  const [dashboardBool, setDashboardBool] = useState(false)
  const [othersBool, setOthersBool] = useState(false)
  function closeSideBar() {
    document.getElementById('pageWrapper').classList.remove('toggled')
  }
  function showSideBar() {
    document.getElementById('pageWrapper').classList.add('toggled')
  }

  return (
    <>
      <div className="page-wrapper chiller-theme toggled" id="pageWrapper">
        <a style={{position:"absolute",left:"0px"}} id="show-sidebar" className="btn btn-sm btn-dark" onClick={showSideBar} id="showSideBar">
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
                <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture" />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>Admin</strong>
                </span>
                {/* <span className="user-role">Administrator</span> */}
                <span className="user-status">
                  <i className="fa fa-circle" />
                  <span>Online</span>
                </span>
              </div>
            </div>
            {/* sidebar-header  */}
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control search-menu" placeholder="Search..." />
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
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <a onClick={() => {setDashboardBool(!dashboardBool);setOthersBool(false)}} aria-controls="dashboardCollapse"
                      aria-expanded={dashboardBool} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start",cursor:"pointer" }} >
                    <i className="fa fa-tachometer-alt" />
                    <span >Dashboard</span>
                    <span className="badge badge-pill badge-warning">New</span>
                  </a>
                  <Collapse in={dashboardBool}>
                    <div id="dashboardCollapse">
                      <a href="/admin/usermanagement" className="sideElement">
                        <i className="fa fa-shopping-cart" />
                        <span>User Management</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="far fa-gem" />
                        <span>Components</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-globe" />
                        <span>Maps</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-chart-line" />
                        <span>Charts</span>
                      </a>
                    </div>
                  </Collapse>
                </li>

                <li className="sidebar-dropdown">
                  <a onClick={() => {setOthersBool(!othersBool);setDashboardBool(false)}} aria-controls="othersCollapse"
                      aria-expanded={othersBool} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start",cursor:"pointer" }} >
                    <i className="fa fa-tachometer-alt" />
                    <span >Others</span>
                    <span className="badge badge-pill badge-primary">Beta</span>
                  </a>
                  <Collapse in={othersBool}>
                    <div id="othersCollapse">
                      <a href="#" className="sideElement">
                        <i className="fa fa-calendar" />
                        <span>Calendar</span>
                      </a>
                      <a href="#" className="sideElement">
                        <i className="fa fa-folder" />
                        <span>Examples</span>
                      </a>
                      {/* <a href="#" className="sideElement">
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
            <a href="#">
              <i className="fa fa-envelope" />
              <span className="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#">
              <i className="fa fa-cog" />
              <span className="badge-sonar" />
            </a>
            <a href="#">
              <i className="fa fa-power-off" />
            </a>
          </div>
        </nav>

      
        {/* sidebar-wrapper  */}

        
        <main className="page-content">
          <div >

            <Route>
            <Route path="/admin/usermanagement"> <UserManagement/></Route>      

</Route>

          </div>
        </main>
        {/* page-content" */}



      </div>
      
      {/* page-wrapper */}
    </>
  )
}
