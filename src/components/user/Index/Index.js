import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import BannerOne from "./Banners/BannerOne";
import BannerTwo from "./Banners/BannerTwo";
import CourseCard from "./Banners/CourseCard";
import HomeVideo from "./Banners/HomeVideo";

function Index() {
  return (
    <>
      <Navbar />

      <BannerOne/>
      <BannerTwo/>
      
      <CourseCard/>
      <HomeVideo/>

      <Footer/>
    </>
  );
}

export default Index;
