import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import BannerOne from "./Banners/BannerOne";
import BannerTwo from "./Banners/BannerTwo";
import CourseCard from "./Banners/CourseCard";
import HomeVideo from "./Banners/HomeVideo";
import UpcomingEvents from "./Banners/UpcomingEvents";
import Memberships from "./Banners/Memberships";
import Blogs from "./Banners/Blogs";

function Index() {
  return (
    <>
      <Navbar />

      <BannerOne/>
      <BannerTwo/>
      
      <CourseCard/>
      <HomeVideo/>
      <UpcomingEvents/>
      <Memberships/>
      <Blogs/>

      <Footer/>
    </>
  );
}

export default Index;
