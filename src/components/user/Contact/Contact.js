import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="page-banner" style={{ backgroundImage: 'url(assets/images/banner.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="banner-title">Contact Us</h2>
                            <div className="bread-crumbs">
                                <a href="index.html">Home</a> <span /> Contact Us
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner End */}
            {/* Contact Start */}
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>
                                    Looking for help? Fill the form and start a new adventure.
                                </p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="icon_house_alt" />
                                        Hilite Business Park, 5th floor (codelattice) Craft Square<br /> Kozhikode, Kerala 673014
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
                                        <a href="mailto:schoolofhawking@gmail.com">schoolofhawking@gmail.com</a> <br />
                                       
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#"><i className="social_facebook" /></a>
                                    <a className="twi" href="#"><i className="social_twitter" /></a>
                                    <a className="you" href="#"><i className="social_youtube" /></a>
                                    <a className="lin" href="#"><i className="social_linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h4>Let’s Connect</h4>
                                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                                <form action="#" method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="f-name" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="l-name" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="suject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="How can we help?" defaultValue={""} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                I agree to the <a href="#">Terms &amp; Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" defaultValue="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact End */}
            {/* Gamps Start */}
            <div className="bisylms-map">
                <iframe src="https://maps.google.com/maps?q=School%20of%20Hawking%20Kozhikode&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </div>
            <Footer />
        </div>
    )
}
