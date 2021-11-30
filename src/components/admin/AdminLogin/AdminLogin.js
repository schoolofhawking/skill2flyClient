import React from 'react'
import './AdminLogin.css'

export default function AdminLogin() {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img src="/assets/images/home/layer.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents mt-2">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3><span style={{color:"#1453a3"}}>SKILL2FLY </span>Admin Panel</h3>
                                        <p className="mb-4">This is the Official Admin Panel of skill2fly.com<br></br>Admins Please Login with your Credentials</p>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first">
                                            <label for="username" style={{marginTop:"-2em"}}>Username</label>
                                            <input type="text" className="form-control" id="username" />
                                        </div>
                                        <div className="form-group last mb-4 mt-4">
                                            <label for="password" style={{marginTop:"-2em"}}>Password</label>
                                            <input type="password" className="form-control" id="password" />
                                        </div>
                                        {/* <div className="d-flex mb-5 align-items-center">
                                            <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                                                <input type="checkbox" defaultChecked="checked" />
                                                <div className="control__indicator" />
                                            </label>
                                            <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                        </div> */}
                                        <input type="submit" defaultValue="Log In" className="btn text-white btn-block" style={{backgroundColor:"#1453a3"}} />
                                        {/* <span className="d-block text-left my-4 text-muted"> or sign in with</span>
                                        <div className="social-login">
                                            <a href="#" className="facebook">
                                                <span className="icon-facebook mr-3" />
                                            </a>
                                            <a href="#" className="twitter">
                                                <span className="icon-twitter mr-3" />
                                            </a>
                                            <a href="#" className="google">
                                                <span className="icon-google mr-3" />
                                            </a>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
