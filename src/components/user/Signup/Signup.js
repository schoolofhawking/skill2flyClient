import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import "./Signup.css";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../redux/rootActions";
import { API } from '../../../config/config'
import toast, { Toaster } from 'react-hot-toast';
import GoogleLogin from 'react-google-login';

export default function Signup(props) {

  const customStyle=()=>{



  }
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userData)
  // const [country, setCountry] = useState([]);
  // const [state, setState] = useState([]);
  // const [city, setCity] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [fieldValues, setFieldValues] = useState({

    fullName: '',
    phoneNumber: '',
    email: '',
    password: ''

  })


  const {
    fullName,
    phoneNumber,
    email,
    password

  } = fieldValues

  useEffect(() => {
    setIsLogin(props.login);
  }, [props]);

  useEffect(() => {
    document.getElementById("navbarSch").style.background =
      "-webkit-linear-gradient(left, #8436f6, #5f38fb)";
    document.getElementById("navbarSch").style.position = "relative";
    //getCountries();
  }, []);


  const handleChange = (name) => async (event) => {
    setFieldValues({ ...fieldValues, [name]: event.target.value })
  }




  const userLogin=async(e)=>{
e.preventDefault();

try{

  let {data}=await axios.post(process.env.REACT_APP_SERVER + '/login', {email,password }, { withCredentials: true })

  console.log("this is data",data);
  if(data.error){
toast.error(data.message)
  }

  else

  {
    // login successfull

    let userInfo = {
      userId: data.data._id,
      userName:data.data.fullName,
      userMail:data.data.email,
      userJwt:data.data.jwtToken,
      userPhone:data.data.mobileNumber,
      userLogin: true
    }
console.log(userInfo,"dd")
dispatch(userData(userInfo))
toast.success("Login sucess!!",
  {
    style: {
      minWidth: '250px'
    },
    success: {
      duration: 5000,
      icon: '🔥',
    },
  })
  }
}
catch(err)
{
  toast.error("something went wrong")
  console.log("this is err",err);
 

}

  }


  const signupSubmit = async () => {

    const headers = {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }
    try {
      axios.post(process.env.REACT_APP_SERVER + '/signup', { fullName, email, phoneNumber, password }, { withCredentials: true }).then((response) => {
        if (response.data.error === false) {
          let userInfo = {
            userId: response.data.data._id,
            userName: response.data.data.fullName,
            userMail: response.data.data.email,
            userJwt:response.data.data.jwtToken,
            userPhone: response.data.data.mobileNumber,
            userLogin: true
          }
          console.log(userInfo,"userInfo");
          dispatch(userData(userInfo))
          toast.success("Signup successfull enjoy !!",
            {
              style: {
                minWidth: '250px'
              },
              success: {
                duration: 5000,
                icon: '🔥',
              },
            })
        } else if (response.data.error === true) {
          toast.error(response.data.message)
        }
      }).catch((err) => {
        toast.error("Something Went Wrong!")
      })
    }
    catch (err) {
      console.log(err)
      toast.error("This didn't work.")
    }
  }



const responseSuccessGoogleSignup = async(response) => {
  console.log("signupsucess",response);
let userName=response.profileObj.name;
let email=response.profileObj.email;

  try {
    axios.post(process.env.REACT_APP_SERVER + '/googleSignup', { userName, email}, { withCredentials: true }).then((response) => {
      if (response.data.error === false) {
        let userInfo = {
          userId: response.data.data._id,
          userName: response.data.data.fullName,
          userMail: response.data.data.email,
          userJwt:response.data.data.jwtToken,
          userPhone: response.data.data.mobileNumber,
          userLogin: true
        }
        console.log(userInfo,"userInfo");
        dispatch(userData(userInfo))
        toast.success("Signup successfull enjoy !!",
          {
            style: {
              minWidth: '250px'
            },
            success: {
              duration: 5000,
              icon: '🔥',
            },
          })
      } else if (response.data.error === true) {
        toast.error(response.data.message)
      }
    }).catch((err) => {
      toast.error("Something Went Wrong!")
    })
  }
  catch (err) {
    console.log(err)
    toast.error("This didn't work.")
  }
}
const responseErrorGoogleSignup = (response) => {
  console.log("signuperr",response);
}
const responseErrorGoogleLogin = (response) => {
  console.log("login err",response);
}

// google login
const responseSuccessGoogleLogin = (response) => {
  console.log("Login success",response);

  let userName=response.profileObj.name;
let email=response.profileObj.email;

  try {
    axios.post(process.env.REACT_APP_SERVER + '/googleLogin', { userName, email}, { withCredentials: true }).then((response) => {
      if (response.data.error === false) {
        let userInfo = {
          userId: response.data.data._id,
          userName: response.data.data.fullName,
          userMail: response.data.data.email,
          userJwt:response.data.data.jwtToken,
          userPhone: response.data.data.mobileNumber,
          userLogin: true
        }
        console.log(userInfo,"userInfo");
        dispatch(userData(userInfo))
        toast.success("successfully Logged In !!",
          {
            style: {
              minWidth: '250px'
            },
            success: {
              duration: 5000,
              icon: '🔥',
            },
          })
      } else if (response.data.error === true) {
        toast.error(response.data.message)
      }
    }).catch((err) => {
      toast.error("Something Went Wrong!")
    })
  }
  catch (err) {
    console.log(err)
    toast.error("This didn't work.")
  }




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
                          onChange={handleChange('fullName')}
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
                          onChange={handleChange('email')}
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
                          onChange={handleChange('phoneNumber')}
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>

                      <div className="form-group">
                        <label className="text-left">Password</label>
                        <input
                          type="password"
                          onChange={handleChange('password')}
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
                        <button type="submit" onClick={() => signupSubmit()} className="btnLogin">
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
                          {/* {" "}
                          <a class="btn  btn-google " href="#">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                            Signup Using Google
                          </a>{" "} */}
                          <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Sign up with Google"
    onSuccess={responseSuccessGoogleSignup}
    onFailure={responseErrorGoogleSignup}
    cookiePolicy={'single_host_origin'}
  />

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

                      <form onSubmit={userLogin}>


                      <div className="form-group">
                        <label className="text-left">User Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="Johndoe@gmail.com "
                          onChange={handleChange('email')}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-left">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="lname"
                          placeholder="password"
                          onChange={handleChange('password')}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btnLogin">
                          Login{" "}
                        </button>
                      </div>
                      </form>
                      <div class="or-container">
                        <div class="line-separator"></div>
                        <div class="or-label">or</div>
                        <div class="line-separator"></div>
                      </div>
                      <div class="row">
                        <div class="col-md-12" style={{ paddingRight: "8px;" }}>
                          {" "}
                          {/* <a class="btn  btn-google " href="#" onClick={(e)=>signInwithGoogle()}>
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}


                            Sign-in Using Google
                          </a>{" "} */}
      
<GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogleLogin}
    onFailure={responseErrorGoogleLogin}
    cookiePolicy={'single_host_origin'}
  />


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
