import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import "./Signup.css";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../redux/rootActions";

export default function Signup(props) {
  const dispatch = useDispatch()
  const userDetails = useSelector(state=>state.userData)
  // const [country, setCountry] = useState([]);
  // const [state, setState] = useState([]);
  // const [city, setCity] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(props.login);
  }, [props]);

  useEffect(() => {
    document.getElementById("navbarSch").style.background =
      "-webkit-linear-gradient(left, #8436f6, #5f38fb)";
    document.getElementById("navbarSch").style.position = "relative";
    //getCountries();
  }, []);

  const signupSubmit = ()=>
  {
    let userInfo = {
      userId:'9446868549',
      userName:'Harikrishnan.U.A',
      userJwt:'India Is My Country',
      userMail:'hariua111@gmail.com',
      userPhone:'8848722067',
      userLogin:true
    }
    dispatch(userData(userInfo))
  }



  // const getCountries = () => {
  //   var headers = new Headers();
  //   headers.append(
  //     "X-CSCAPI-KEY",
  //     "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };
  //   fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCountry(result);
  //     });
  // };
  // const getCity = () => {
  //   let country = document.getElementById("country").value;
  //   let state = document.getElementById("state").value;
  //   var headers = new Headers();
  //   headers.append(
  //     "X-CSCAPI-KEY",
  //     "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };
  //   fetch(
  //     "https://api.countrystatecity.in/v1/countries/" +
  //       country +
  //       "/states/" +
  //       state +
  //       "/cities",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCity(result);
  //     });
  // };
  // const getState = () => {
  //   let country = document.getElementById("country").value;

  //   country = country;
  //   var headers = new Headers();
  //   headers.append(
  //     "X-CSCAPI-KEY",
  //     "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };
  //   fetch(
  //     "https://api.countrystatecity.in/v1/countries/" + country + "/states",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setState(result);
  //     });
  // };

  return (
    <div>
      <Navbar />

      {!isLogin ? (
        <>
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3 className="text-white">Welcome</h3>
                <p>
                  We are so happy to welcome you to School of Hawking Family
                </p>
                <p style={{ padding: "0%" }} className="text-white">
                  Already Have an Account?
                </p>
                <input
                  type="submit"
                  value="Login"
                  onClick={() => {
                    setIsLogin(true);
                  }}
                />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Signup</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-left">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="First Name *"
                        />
                      </div>
                      {/* <div className="form-group">
                                        <label className="text-left">Last Name</label>
                                        <input type="text" className="form-control" name="lname" placeholder="Last Name *" />
                                    </div> */}

                      {/* <div className="form-group">
                                        <label className="text-left">Confirm Password</label>
                                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password *" />
                                    </div> */}
                      <div className="form-group">
                        <label className="text-left">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-left">Mobile Number</label>
                        <input
                          type="number"
                          minLength={10}
                          maxLength={10}
                          name="phone"
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>

                      <div className="form-group">
                        <label className="text-left">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password *"
                        />
                      </div>
                      {/* <div className="form-group">
                                        <label className="text-left">Country</label>
                                        <select name="country" className="form-control" id="country"  placeholder="Country*" onChange={getState}>
                                            <option value="country" selected disabled>Select Your Country</option>
                                            {country.length>0?country.map((data,index)=>
                                            {
                                                return(
                                                    <option value={data.iso2}>{data.name}</option>
                                                )
                                            }):''}
                                        </select>
                                    </div> */}
                      {/* <div className="form-group">
                                        <label className="text-left">State</label>
                                        <select name="state" className="form-control" id="state" placeholder="State*" onChange={getCity}>
                                        <option value="state" selected disabled>Select Your State</option>
                                            {state.length>0?state.map((data,index)=>
                                            {
                                                return(
                                                    <option value={data.iso2}>{data.name}</option>
                                                )
                                            }):''}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-left">City</label>
                                        <select name="city" className="form-control" id="city" placeholder="City*" >
                                            <option value="-1" selected disabled>City</option>
                                            {city.length>0?city.map((data,index)=>
                                            {
                                                return(
                                                    <option value={data.iso2}>{data.name}</option>
                                                )
                                            }):''}
                                        </select>
                                    </div> */}
                      {/* <div className="form-group">
                                        <label>Qualification</label>
                                        <select name="qualification" id="qualification" placeholder="Qualification*" className="form-control">
                                            <option className="hidden" selected disabled>Please select your Qualification</option>
                                            <option value="phd">PhD</option>
                                            <option value="mphil">MPhil</option>
                                            <option value="pg">Post Graduation</option>
                                            <option value="ug">Under Graduation</option>
                                            <option value="higher secondary">Higher Secondary</option>
                                            <option value="sslc">S S L C</option>
                                        </select>
                                    </div> */}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <button type="submit" onClick={()=>signupSubmit()} className="btnLogin">
                          Signup{" "}
                        </button>
                      </div>
                      <div class="or-container">
                        <div class="line-separator"></div>
                        <div class="or-label">or</div>
                        <div class="line-separator"></div>
                      </div>
                      <div class="row">
                        <div class="col-md-12" style={{ paddingRight: "8px;" }}>
                          {" "}
                          <a class="btn  btn-google " href="#">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                            Signup Using Google
                          </a>{" "}
                        </div>
                      </div>{" "}
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Login form when is login state is true
        <>
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3 className="text-white">Welcome</h3>
                <p>Login to unlock a successfull career</p>
                <p style={{ padding: "0%" }} className="text-wshite">
                  Dont have registered yet?
                </p>
                <input
                  type="submit"
                  value="Signup"
                  onClick={() => {
                    setIsLogin(false);
                  }}
                />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Login Now</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-left">User Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="Johndoe@gmail.com "
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-left">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="lname"
                          placeholder="password"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btnLogin">
                          Login{" "}
                        </button>
                      </div>
                      <div class="or-container">
                        <div class="line-separator"></div>
                        <div class="or-label">or</div>
                        <div class="line-separator"></div>
                      </div>
                      <div class="row">
                        <div class="col-md-12" style={{ paddingRight: "8px;" }}>
                          {" "}
                          <a class="btn  btn-google " href="#">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                            Sign-in Using Google
                          </a>{" "}
                        </div>
                      </div>{" "}
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
