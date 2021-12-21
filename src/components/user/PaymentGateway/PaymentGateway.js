import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useHistory } from 'react-router'

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
  const history = useHistory()

  useEffect(() => {
    if(courseData.actualPrice!='')
    {      

    loadScript("https://checkout.razorpay.com/v1/checkout.js");
    }
    else
    {
      console.log("IIII",courseData)
      history.push('/course')
    }

  }, [courseData]);


  async function displayRazorpay() {
    let { data } = await axios.post(
      process.env.REACT_APP_SERVER + "/createOrder",
      { id: userData.userId },
      {
        headers: {
          authorization: "Bearer " + userData.userJwt,
        },
      }
    );
    if (data.error) {
      toast.error("something went wrong");
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
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
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
              <h2 className="banner-title" onClick={displayRazorpay}>
                Payment gateway
              </h2>
              <div className="bread-crumbs">
                <a href="index.html">Home</a> <span /> Profile
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PaymentGateway;
