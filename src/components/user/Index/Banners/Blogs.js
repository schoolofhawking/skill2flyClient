import React from "react";

export default function Blogs() {
    return (
        <section class="blog-section" style={{backgroundImage: "url(assets/images/home/blog-bg.png)"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="sec-title"><span>Secrets of</span> learning Revealed in Blogs</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="post-item-1">
                        <img src="assets/images/home/blog/1.jpg" alt=""/>
                        <div class="b-post-details">
                            <div class="bp-meta">
                                <a href="#"><i class="icon_clock_alt"></i>April 22, 2020</a>
                                <a href="#"><i class="icon_chat_alt"></i>6 Comments</a>
                            </div>
                            <h3><a href="single-post.html">Build A Full Web Chat App From Scratch.</a></h3>
                            <a class="read-more" href="single-post.html">Read More<i class="arrow_right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="post-item-1">
                        <img src="assets/images/home/blog/2.jpg" alt=""/>
                        <div class="b-post-details">
                            <div class="bp-meta">
                                <a href="#"><i class="icon_clock_alt"></i>January 24, 2020</a>
                                <a href="#"><i class="icon_chat_alt"></i>4 Comments</a>
                            </div>
                            <h3><a href="single-post.html">Insights on How to Improve Your Teaching.</a></h3>
                            <a class="read-more" href="single-post.html">Read More<i class="arrow_right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="post-item-1">
                        <img src="assets/images/home/blog/3.jpg" alt=""/>
                        <div class="b-post-details">
                            <div class="bp-meta">
                                <a href="#"><i class="icon_clock_alt"></i>March 12, 2020</a>
                                <a href="#"><i class="icon_chat_alt"></i>2 Comments</a>
                            </div>
                            <h3><a href="single-post.html">Learning Python for Data Analysis.</a></h3>
                            <a class="read-more" href="single-post.html">Read More<i class="arrow_right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}