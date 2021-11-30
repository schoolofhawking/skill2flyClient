import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
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
                      <a href="#" className="sideElement">
                        <i className="fa fa-shopping-cart" />
                        <span>E-commerce</span>
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
        {/* <main className="page-content">
          <div className="container">
            <h2>Pro Sidebar</h2>
            <hr />
            <div className="row">
              <div className="form-group col-md-12">
                <p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>
                <p> You can find the complete code on <a href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank">
                  Github</a>, it contains more themes and background image option</p>
              </div>
              <div className="form-group col-md-12">
                <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small" frameBorder={0} scrolling={0} width="90px" height="30px" />
                <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small" frameBorder={0} scrolling={0} width="90px" height="30px" />
              </div>
              <div className="form-group col-md-12">
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">New !</h4>
                  <p>New react pro sidebar library is now available on <a href="https://www.npmjs.com/package/react-pro-sidebar" target="_blank">npm</a> <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                    <img alt="GitHub stars" src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social" />
                  </a></p>
                  <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" className="btn btn-sm btn-primary mr-2">
                    Github</a>
                  <a href="https://azouaoui-med.github.io/react-pro-sidebar" target="_blank" className="btn btn-sm btn-success">
                    Demo</a>
                </div>
              </div>
            </div>
            <h5>More templates</h5>
            <hr />
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="card rounded-0 p-0 shadow-sm">
                  <img src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                  <div className="card-body text-center">
                    <h6 className="card-title">Angular Pro Sidebar</h6>
                    <a href="https://github.com/azouaoui-med/angular-pro-sidebar" target="_blank" className="btn btn-primary btn-sm">Github</a>
                    <a href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/" target="_blank" className="btn btn-success btn-sm">Demo</a>
                    <hr />
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                      <img alt="GitHub stars" src="https://img.shields.io/github/stars/azouaoui-med/angular-pro-sidebar?style=social" />
                    </a>
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                      <img alt="GitHub stars" src="https://img.shields.io/github/forks/azouaoui-med/angular-pro-sidebar?style=social" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="card rounded-0 p-0 shadow-sm">
                  <img src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                  <div className="card-body text-center">
                    <h6 className="card-title">Angular Dashboard</h6>
                    <a href="https://github.com/azouaoui-med/lightning-admin-angular" target="_blank" className="btn btn-primary btn-sm">Github</a>
                    <a href="https://azouaoui-med.github.io/lightning-admin-angular/demo/" target="_blank" className="btn btn-success btn-sm">Demo</a>
                    <hr />
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                      <img alt="GitHub stars" src="https://img.shields.io/github/stars/azouaoui-med/lightning-admin-angular?style=social" />
                    </a>
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                      <img alt="GitHub stars" src="https://img.shields.io/github/forks/azouaoui-med/lightning-admin-angular?style=social" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <footer className="text-center">
              <div className="mb-2">
                <small>
                  © 2020 made with <i className="fa fa-heart" style={{ color: 'red' }} /> by - <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
                    Mohamed Azouaoui
                  </a>
                </small>
              </div>
              <div>
                <a href="https://github.com/azouaoui-med" target="_blank">
                  <img alt="GitHub followers" src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social" />
                </a>
                <a href="https://twitter.com/azouaoui_med" target="_blank">
                  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social" />
                </a>
              </div>
            </footer>
          </div>
        </main> */}
        {/* page-content" */}
      </div>
      {/* page-wrapper */}
    </>
  )
}
