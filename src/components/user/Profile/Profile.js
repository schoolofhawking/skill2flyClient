import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { profileData as profileAction } from "../../../redux/rootActions";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import "./Profile.css";
import toast from "react-hot-toast";
import ProfilePicture from "./ProfilePicture";

export default function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const profileData = useSelector((state) => state.profileData);

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  let history = useHistory();
  const [fieldValues, setFieldValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    city: "",
    qualification: "",
    designation: "",
  });
  useEffect(() => {
    if (userData.userLogin === false) {
      swalFire();
    }
    getCountries();
  }, []);

  function swalFire() {
    Swal.fire({
      icon: "warning",
      title: "You Haven't Logged In!",
      showCancelButton: true,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Go To Login",
      denyButtonText: "Register Now",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/login");
      } else if (result.isDenied) {
        history.push("/signup");
      } else {
        swalFire();
      }
    });
  }

  const editProfile = () => {
    if (profileData.profileEnable == false) {
      axios
        .get(process.env.REACT_APP_SERVER + "/getProfileData",  {
          headers: {
            authorization: "Bearer " + userData.userJwt,
          },
        })
        .then((response) => {
          if (response.data.error === false) {
            dispatch(profileAction(response.data.profileData));
            let data = response.data.profileData;
            setFieldValues({
              fullName: data.profileName,
              phoneNumber: data.profilePhone,
              email: data.profileEmail,
              country: data.profileCountry,
              state: data.profileState,
              city: data.profileCity,
              designation: data.profileDesignation,
              qualification: data.profileQualification,
            });
          }else{
            toast.error(response.data.message);
          }
        });
    }
  };

  const submitEditProfile = (e) => {
    e.preventDefault();
    console.log(fieldValues);

    axios
      .post(process.env.REACT_APP_SERVER + "/updateProfile", fieldValues, {
        headers: {
          authorization: "Bearer " + userData.userJwt,
        },
      })
      .then((response) => {
        if (response.data.error == true) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          dispatch(profileAction(response.data.profileData));
        }
      });
  };

  const handleChange = (name) => async (event) => {
    if (
      name == "country" ||
      name == "state" ||
      name == "city" ||
      name == "qualification"
    ) {
      let dropdown = document.getElementById(name);
      let dropdownVal = dropdown.options[dropdown.selectedIndex].text;
      setFieldValues({ ...fieldValues, [name]: dropdownVal });
    } else {
      setFieldValues({ ...fieldValues, [name]: event.target.value });
    }

    if (name == "country") {
      getState();
    } else if (name == "state") {
      getCity();
    }
  };

  const getCountries = () => {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCountry(result);
      });
  };
  const getCity = () => {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    fetch(
      "https://api.countrystatecity.in/v1/countries/" +
        country +
        "/states/" +
        state +
        "/cities",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCity(result);
      });
  };
  const getState = () => {
    let country = document.getElementById("country").value;

    country = country;
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "NW8yR0prNjNXT1NrU0JmbnVDc2tUZDZldjdibHZMRXF6QnhVVVZSeg=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    fetch(
      "https://api.countrystatecity.in/v1/countries/" + country + "/states",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setState(result);
      });
  };
  return (
    <div>
      <Navbar />
      <section
        className="page-banner"
        style={{ backgroundImage: "url(assets/images/banner.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="banner-title">Profile</h2>
              <div className="bread-crumbs">
                <a href="index.html">Home</a> <span /> Profile
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner End */}
      {/* Teachers Section Start */}
      <section className="profile-section">
        <div className="container">
          <div className="row">
            <ProfilePicture />
            {/* course tab wrapper add extra for tab change */}
            <div className="col-lg-9 course-tab-wrapper">
              {/* Tab Title  */}
              {/* tab-title nav nav-tabs (was the previous cls instead of course tab) */}
              <ul className="tab-title nav nav-tabs">
                <li>
                  <a className="active" href="#owned" data-toggle="tab">
                    Owned
                  </a>
                </li>
                <li>
                  <a href="#purchased" data-toggle="tab" className>
                    Purchased
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => editProfile()}
                    href="#myprofile"
                    data-toggle="tab"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => editProfile()}
                    href="#editprofile"
                    data-toggle="tab"
                  >
                    Edit Profile
                  </a>
                </li>
              </ul>
              {/* Tab Title */}
              {/* Tab Content */}
              <div className="tab-content">
                {/* Profile Tab */}
                <div className="tab-pane fade" id="myprofile" role="tabpanel">
                  <h3 className="course-title">My Profile</h3>
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-5 profileList">
                      <label>Name : </label>
                      <p className="profileName">{profileData.profileName}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Country : </label>
                      <p className="profileName">
                        {profileData.profileCountry}
                      </p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Email : </label>
                      <p className="profileName">{profileData.profileEmail}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>State : </label>
                      <p className="profileName">{profileData.profileState}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Mobile : </label>
                      <p className="profileName">{profileData.profilePhone}</p>
                    </div>

                    <div className="col-md-5 profileList">
                      <label>City : </label>
                      <p className="profileName">{profileData.profileCity}</p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Qualification : </label>
                      <p className="profileName">
                        {profileData.profileQualification}
                      </p>
                    </div>
                    <div className="col-md-5 profileList">
                      <label>Designation : </label>
                      <p className="profileName">
                        {profileData.profileDesignation}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Profile Tab Ends */}
                <div
                  className="tab-pane fade in  active show"
                  id="owned"
                  role="tabpanel"
                >
                  <h3 className="course-title">My Courses</h3>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-course-item-4">
                        <div className="fcf-thumb">
                          <img src="assets/images/profile/1.jpg" alt="" />
                          <a className="enroll" href="#">
                            Enroll Now
                          </a>
                        </div>
                        <div className="fci-details">
                          <a href="#" className="c-cate">
                            <i className="icon_tag_alt" />
                            Computer Science
                          </a>
                          <h4>
                            <a href="#">Using Creative Problem Solving</a>
                          </h4>
                          <div className="author">
                            <img
                              src="assets/images/home3/course/a1.png"
                              alt=""
                            />
                            <a href="#">Anthony</a>
                          </div>
                          <div className="price-rate">
                            <div className="course-price">
                              Free
                              <span>$42.85</span>
                            </div>
                            <div className="ratings">
                              <i className="icon_star" />
                              <span>4.5 (2,420)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-course-item-4">
                        <div className="fcf-thumb">
                          <img src="assets/images/profile/2.jpg" alt="" />
                          <a className="enroll" href="#">
                            Enroll Now
                          </a>
                        </div>
                        <div className="fci-details">
                          <a href="#" className="c-cate">
                            <i className="icon_tag_alt" />
                            Art &amp; Design
                          </a>
                          <h4>
                            <a href="#">
                              The Art of Black and White Photography
                            </a>
                          </h4>
                          <div className="author">
                            <img
                              src="assets/images/home3/course/a2.png"
                              alt=""
                            />
                            <a href="#">Giles Posture</a>
                          </div>
                          <div className="price-rate">
                            <div className="course-price">
                              $75.00
                              <span>$92.00</span>
                            </div>
                            <div className="ratings">
                              <i className="icon_star" />
                              <span>4.2 (1,203)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-course-item-4">
                        <div className="fcf-thumb">
                          <img src="assets/images/profile/3.jpg" alt="" />
                          <a className="enroll" href="#">
                            Enroll Now
                          </a>
                        </div>
                        <div className="fci-details">
                          <a href="#" className="c-cate">
                            <i className="icon_tag_alt" />
                            Business Study
                          </a>
                          <h4>
                            <a href="#">Learning jQuery mobile for Beginners</a>
                          </h4>
                          <div className="author">
                            <img
                              src="assets/images/home3/course/a3.png"
                              alt=""
                            />
                            <a href="#">Hans Down</a>
                          </div>
                          <div className="price-rate">
                            <div className="course-price">
                              $53.00
                              <span>$74.00</span>
                            </div>
                            <div className="ratings">
                              <i className="icon_star" />
                              <span>4.5 (2,420)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-course-item-4">
                        <div className="fcf-thumb">
                          <img src="assets/images/profile/4.jpg" alt="" />
                          <a className="enroll" href="#">
                            Enroll Now
                          </a>
                        </div>
                        <div className="fci-details">
                          <a href="#" className="c-cate">
                            <i className="icon_tag_alt" />
                            Data Science
                          </a>
                          <h4>
                            <a href="#">Buddhism and modern Psychology</a>
                          </h4>
                          <div className="author">
                            <img
                              src="assets/images/home3/course/a4.png"
                              alt=""
                            />
                            <a href="#">Richard Tea</a>
                          </div>
                          <div className="price-rate">
                            <div className="course-price">
                              $62.00
                              <span>$97.00</span>
                            </div>
                            <div className="ratings">
                              <i className="icon_star" />
                              <span>4.5 (2,420)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="feature-course-item-4">
                        <div className="fcf-thumb">
                          <img src="assets/images/profile/5.jpg" alt="" />
                          <a className="enroll" href="#">
                            Enroll Now
                          </a>
                        </div>
                        <div className="fci-details">
                          <a href="#" className="c-cate">
                            <i className="icon_tag_alt" />
                            Web Development
                          </a>
                          <h4>
                            <a href="#">Making music with Other people</a>
                          </h4>
                          <div className="author">
                            <img
                              src="assets/images/home3/course/a6.png"
                              alt=""
                            />
                            <a href="#">Hilary Ouse</a>
                          </div>
                          <div className="price-rate">
                            <div className="course-price">
                              #34.00
                              <span>$55.00</span>
                            </div>
                            <div className="ratings">
                              <i className="icon_star" />
                              <span>4.5 (2,420)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Owned Tab */}
                {/* Purchase Tab */}
                <div
                  className="tab-pane fade in"
                  id="purchased"
                  role="tabpanel"
                >
                  <ul className="restult-tab-title nav nav-tabs">
                    <li>
                      <a className="active" href="#all" data-toggle="tab">
                        All
                      </a>
                    </li>
                    <li>
                      <a href="#finished" data-toggle="tab" className>
                        Finished
                      </a>
                    </li>
                    <li>
                      <a href="#passed" data-toggle="tab" className>
                        Passed
                      </a>
                    </li>
                    <li>
                      <a href="#failed" data-toggle="tab" className>
                        Failed
                      </a>
                    </li>
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show in active"
                      id="all"
                      role="tabpanel"
                    >
                      <table className="result-table">
                        <thead>
                          <tr>
                            <th className="course">Course</th>
                            <th className="date">Date</th>
                            <th className="grade">Passing Grade</th>
                            <th className="progres">Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="course">
                              <a href="#">Getting Started with LESS</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">50%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">LMS Interactive Content</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">40%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">From Zero to Hero with Nodejs</a>
                            </td>
                            <td className="date">14/04/2019</td>
                            <td className="grade">70%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">Helping to change the world</a>
                            </td>
                            <td className="date">04/07/2018</td>
                            <td className="grade">50%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="show-item">
                              Displaying 1 to 4 of 4 courses.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane show in"
                      id="finished"
                      role="tabpanel"
                    >
                      <table className="result-table">
                        <thead>
                          <tr>
                            <th className="course">Course</th>
                            <th className="date">Date</th>
                            <th className="grade">Passing Grade</th>
                            <th className="progres">Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="course">
                              <a href="#">Getting Started with LESS</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">50%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">LMS Interactive Content</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">40%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane show in"
                      id="passed"
                      role="tabpanel"
                    >
                      <table className="result-table">
                        <thead>
                          <tr>
                            <th className="course">Course</th>
                            <th className="date">Date</th>
                            <th className="grade">Passing Grade</th>
                            <th className="progres">Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="course">
                              <a href="#">From Zero to Hero with Nodejs</a>
                            </td>
                            <td className="date">14/04/2019</td>
                            <td className="grade">70%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">Helping to change the world</a>
                            </td>
                            <td className="date">04/07/2018</td>
                            <td className="grade">50%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane show in"
                      id="failed"
                      role="tabpanel"
                    >
                      <table className="result-table">
                        <thead>
                          <tr>
                            <th className="course">Course</th>
                            <th className="date">Date</th>
                            <th className="grade">Passing Grade</th>
                            <th className="progres">Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="course">
                              <a href="#">Getting Started with LESS</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">50%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                          <tr>
                            <td className="course">
                              <a href="#">LMS Interactive Content</a>
                            </td>
                            <td className="date">24/03/2020</td>
                            <td className="grade">40%</td>
                            <td className="progres">0% In Progress</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Tab Content */}
                </div>
                <div className="tab-pane fade" id="editprofile" role="tabpanel">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-left">fullName</label>
                        <input
                          type="text"
                          onChange={handleChange("fullName")}
                          className="form-control"
                          name="fname"
                          defaultValue={profileData.profileName}
                        />
                      </div>

                      <div className="form-group">
                        <label className="text-left">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          readOnly
                          defaultValue={profileData.profileEmail}
                          onChange={handleChange("email")}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-left">Mobile Number</label>
                        <input
                          type="number"
                          minLength={10}
                          maxLength={10}
                          name="phone"
                          onChange={handleChange("phoneNumber")}
                          className="form-control"
                          defaultValue={profileData.profilePhone}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-left">Designation</label>
                        <input
                          type="text"
                          className="form-control"
                          name="designation"
                          defaultValue={profileData.profileDesignation}
                          onChange={handleChange("designation")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-left">Country</label>
                        <select
                          name="country"
                          className="form-control"
                          id="country"
                          placeholder="Country*"
                          onChange={handleChange("country")}
                        >
                          <option value="country" selected disabled>
                            {profileData.profileCountry}
                          </option>
                          {country.length > 0
                            ? country.map((data, index) => {
                                return (
                                  <option value={data.iso2}>{data.name}</option>
                                );
                              })
                            : ""}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="text-left">State</label>
                        <select
                          name="state"
                          className="form-control"
                          id="state"
                          placeholder="State*"
                          onChange={handleChange("state")}
                        >
                          <option value="state" selected disabled>
                            {profileData.profileState}
                          </option>
                          {state.length > 0
                            ? state.map((data, index) => {
                                return (
                                  <option value={data.iso2}>{data.name}</option>
                                );
                              })
                            : ""}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="text-left">City</label>
                        <select
                          name="city"
                          className="form-control"
                          id="city"
                          placeholder="City*"
                          onChange={handleChange("city")}
                        >
                          <option value="-1" selected disabled>
                            {profileData.profileCity}
                          </option>
                          {city.length > 0
                            ? city.map((data, index) => {
                                return (
                                  <option value={data.iso2}>{data.name}</option>
                                );
                              })
                            : ""}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Qualification</label>
                        <select
                          name="qualification"
                          id="qualification"
                          placeholder="Qualification*"
                          onChange={handleChange("qualification")}
                          className="form-control"
                        >
                          <option className="hidden" selected disabled>
                            {profileData.profileQualification}
                          </option>
                          <option value="phd">PhD</option>
                          <option value="mphil">MPhil</option>
                          <option value="pg">Post Graduation</option>
                          <option value="ug">Under Graduation</option>
                          <option value="higher secondary">
                            Higher Secondary
                          </option>
                          <option value="sslc">S S L C</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#5838fc",
                        color: "white",
                        fontWeight: "500",
                      }}
                      className="btn w-25 mt-3"
                      onClick={(e) => submitEditProfile(e)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {/* Purchase Tab */}
              </div>
              {/* Tab Content */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
