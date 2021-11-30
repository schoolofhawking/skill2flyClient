import React from 'react'

export default function Error() {
    return (
        <div>
            <section className="section-404" style={{ backgroundImage: 'url(assets/images/404-bg.jpg)' }}>
                <div className="middle-404">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12">
                                <div className="content-404">
                                    <img src="assets/images/404.png" alt="" />
                                    <h2>Oooops!</h2>
                                    <p>We have something broken.</p>
                                    <ul>
                                        <li><a href="/">Go Back Home</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
