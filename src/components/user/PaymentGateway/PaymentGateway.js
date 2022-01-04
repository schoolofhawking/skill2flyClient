import axios from "axios";
import React from "react";
import { useEffect ,useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import "./PaymentGateway.css";
import Loader from "react-loader-spinner";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function PaymentGateway() {
  const userData = useSelector((state) => state.userData);
  const courseData = useSelector((state) => state.purchaseCourseData);
  const history = useHistory();
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    if (courseData.actualPrice != "") {
      loadScript("https://checkout.razorpay.com/v1/checkout.js");
    } else {
      console.log("IIII", courseData);
      history.push("/course");
    }
  }, [courseData]);

  async function displayRazorpay() {
    setLoading(true)

    let { data } = await axios.post(
      process.env.REACT_APP_SERVER + "/createOrder",
      { id: userData.userId, courseData },
      {
        headers: {
          authorization: "Bearer " + userData.userJwt,
        },
      }
    );
    if (data.error) {
      toast.error("something went wrong");
      setLoading(false)
    } else {
      console.log("__", data);
      var options = {
        key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        amount: data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "SKILL2FLY",
        description: "school-of-hawking LLP",
        image: "https://example.com/your_logo",
        order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          console.log("resppp", response);
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          //to backend update the course purchase
          PaymentSuccess(response);
        },
        prefill: {
          name: userData.userName,
          email: userData.userMail,
          contact: userData.userPhone,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }

  const PaymentSuccess = async (razorpayResponse) => {
    try {
      let { data } = await axios.post(
        process.env.REACT_APP_SERVER + "/purchaseSuccess",
        { razorpayResponse, courseData, userData },
        {
          headers: {
            authorization: "Bearer " + userData.userJwt,
          },
        }
      );
      console.log("data", data);
      if (data.error) {
        setLoading(false)
        toast.error(
          "something went wrong in payment please contact our team..."
        );
      } else {
        setLoading(false)
        toast.success("Payment successfully completed!!!!! ");
        history.push("/profile");
        

      }
    } catch (err) {
      setLoading(false)
      toast.error("something went wrong in payment please contact our team...");
    }
  };

  const contactAdmin=async()=>{


    let phoneNumber=document.getElementById("myPhoneNumber").value

    try{

     let {data}= await axios.post( process.env.REACT_APP_SERVER + "/sendSms",
      { phoneNumber },
      {
        headers: {
          authorization: "Bearer " + userData.userJwt,
        },
      })

      console.log("!!!!!!!",data)
      if(data.error==false)
      {
      toast.success("success you will get a call soon")
      document.getElementById('contactbtn').innerHTML="You will get guidence soon !"
      }
      else
      {
        toast.error("something went wrong")

      }
    }
    catch(err)
    {
toast.error("something went wrong")
    }

    
  }

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
              <h2 className="banner-title">Payment gateway</h2>
              <div className="bread-crumbs">
                <a href="index.html">Home</a> <span /> Profile
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading?<><Loader
      type="ThreeDots"
      color="#5838fc"
      height={100}
      width={100}
      />
      <p style={{color:"black"}}>Don't go back or close the window</p>
      </>:<>
         <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Enroll the course For ₹{courseData.discountPrice}</h3>
                <p>
                  Any issues with purchase..? feel free to contact us for
                  purchase related queries.
                </p>
                <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="icon_house_alt" />
                    Hilite Business Park, 5th floor (codelattice) Craft Square
                    <br /> Kozhikode, Kerala 673014
                  </p>
                </div>
                {/* <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="icon_phone" />
                                        <a href="tel:12345678">schoolofhawking@gmail.com</a>(+642) 245 356 432<br />
                                        (+420) 336 476 328
                                    </p>
                                </div> */}
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="icon_mail_alt" />
                    <a href="mailto:schoolofhawking@gmail.com">
                      schoolofhawking@gmail.com
                    </a>{" "}
                    <br />
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a className="fac" href="#">
                    <i className="social_facebook" />
                  </a>
                  <a className="twi" href="#">
                    <i className="social_twitter" />
                  </a>
                  <a className="you" href="#">
                    <i className="social_youtube" />
                  </a>
                  <a className="lin" href="#">
                    <i className="social_linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Pay with Razor pay</h4>
                <p>You can use any payment modes through Razorpay!</p>

                <div className="col-md-6" style={{ alignItems: "center" }}>
                  <button
                    className="btn btn-primary btn-lg  payButton"
                    onClick={displayRazorpay}
                  >
                    Pay ₹{courseData.discountPrice}
                  </button>
                </div>
              </div>
              <h4 className="orline"><span>(OR)</span></h4>
              <div className="contact-form">
                <h4 >Contact our team to Buy course</h4>
                <p>Provide your phone Number we will guide you to buy the course<br/>
                </p>
                <div className="col-md-6" style={{ alignItems: "center" }}>
                                        <input type="text" name="phone" placeholder="Phone Number" id="myPhoneNumber"/>
                                    </div>
                <div className="col-md-6" style={{ alignItems: "center" }}>
                  
                  <button
                    className="btn btn-primary btn-lg  payButton"
                    onClick={contactAdmin}
                    id="contactbtn"
                  >
                  Contact me to buy course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>}
   

      <Footer />
    </div>
  );
}

export default PaymentGateway;
