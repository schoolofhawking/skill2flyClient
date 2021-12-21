import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import "./Questions.css";
function Questions() {
  const userData = useSelector((state) => state.userData);
  const [questions, setquestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions, setTotalQns] = useState(0);
  const [answers,setAnswers]=useState([])
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER + "/getQuestionsUser", {
        headers: {
          authorization: "Bearer " + userData.userJwt,
        },
      })
      .then((data) => {
        console.log(data);
        if (data.data.error) {
          toast.error("something went wrong please try again later");
        } else {
          console.log(data.data.data);
          setquestions(data.data.data);
          setTotalQns(data.data.data.length);
        }
      });
  }, []);

  const handleAnswerButtonClick = (answerOption) => {
    if (currentQuestion < totalQuestions - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
    } else {
      alert("end of qns");
    }
  };
  const handleChange=async(id)=>{


    // setAnswers({...answers,})
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
              <h2 className="banner-title">Profile</h2>
              <div className="bread-crumbs">
                <a href="index.html">Home</a> <span /> Profile
              </div>
            </div>
          </div>
        </div>
      </section>

      {questions.length ? (
        <>
          <div className="container mt-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-10 col-lg-10">
                <div className="border">
                  <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                      <h4>MCQ Quiz</h4>
                      <span>({currentQuestion+1} of {totalQuestions})</span>
                    </div>
                  </div>
                  <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row align-items-center question-title">
                      <h3 className="text-danger">Q.</h3>
                      <h5 className="mt-1 ml-2">
                        {questions[currentQuestion].question}
                      </h5>
                    </div>
                    <div className="ans ml-2" >
                      <label className="radio"  id="A" >
                        {" "}
                        <input
                          type="radio"
                        
                          name="brazil"
                          defaultValue="brazil"
                          onClick={(e)=>{handleChange('A')}}
                        />{" "}
                        <span>{questions[currentQuestion].optionA}</span>
                      </label>
                    </div>
                    <div className="ans ml-2">
                      <label className="radio" id="B">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          defaultValue="Germany"
                          onClick={(e)=>{handleChange('B')}}
                        />{" "}
                        <span>{questions[currentQuestion].optionB}</span>
                      </label>
                    </div>
                    <div className="ans ml-2">
                      <label className="radio"id="C">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          defaultValue="Indonesia"
                          onClick={(e)=>{handleChange('C')}}
                        />{" "}
                        <span>{questions[currentQuestion].optionC}</span>
                      </label>
                    </div>
                    <div className="ans ml-2">
                      <label className="radio"id="D">
                        {" "}
                        <input
                          type="radio"
                          name="Russia"
                          defaultValue="Russia"
                          onClick={(e)=>{handleChange('D')}}
                        />{" "}
                        <span>{questions[currentQuestion].optionD}</span>
                      </label>
                    </div>
                  </div>
                  {/* <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                    <button
                      className="btn btn-primary d-flex align-items-center btn-danger"
                      type="button"
                      style={{ display: "none" }}
                    >
                      <i className="fa fa-angle-left mt-1 mr-1" />
                      &nbsp;previous
                    </button>
                    <button
                      className="btn btn-primary border-success align-items-center btn-success"
                      type="button"
                      onClick={() => handleAnswerButtonClick()}
                    >
                      Next
                      <i className="fa fa-angle-right ml-2" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}

export default Questions;
