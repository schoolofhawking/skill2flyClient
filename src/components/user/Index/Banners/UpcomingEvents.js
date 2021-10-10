import React from "react"; 

export default function UpcomingEvents() {
    return(
    <section class="event-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="sec-title"><span>Contact Now</span> Upcoming Events</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="event-item-1">
                        <div class="e-date">24 <span>Jun</span></div>
                        <p><i class="icon_pin_alt"></i>New York, US</p>
                        <h4><a href="single-event.html">Consumer Food Safety Education Conference</a></h4>
                        <a class="bisylms-btn" href="#">Get Ticket</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="event-item-1">
                        <div class="e-date">27 <span>July</span></div>
                        <p><i class="icon_pin_alt"></i>Vancouver, Canada</p>
                        <h4><a href="single-event.html">Build Education Website Using WordPress</a></h4>
                        <a class="bisylms-btn" href="#">Get Ticket</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="event-item-1">
                        <div class="e-date">16 <span>Nov</span></div>
                        <p><i class="icon_pin_alt"></i>Chicago, US</p>
                        <h4><a href="single-event.html">How Meditation Improve your Mental Health?</a></h4>
                        <a class="bisylms-btn" href="#">Get Ticket</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="event-item-1">
                        <div class="e-date">13 <span>Nov</span></div>
                        <p><i class="icon_pin_alt"></i>Texas, US</p>
                        <h4><a href="single-event.html">Understanding Luxury Fashion in a Changing</a></h4>
                        <a class="bisylms-btn" href="#">Get Ticket</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <a class="read-more" href="#">View all Events<i class="arrow_right"></i></a>
                </div>
            </div>
        </div>
    </section>
    )    
}