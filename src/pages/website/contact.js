import React from 'react'
import delivery from "./img/icons/delivery.png"
import voucher from "./img/icons/voucher.png"
import sales from "./img/icons/sales.png"
import add from "./img/add.jpg"
import emailjs from 'emailjs-com';
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_907nh0m', 'template_z3aw5ae', e.target, 'user_menvypeu0v5NaV03E4Ybl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <div className="header-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                {/* <img src={delivery} alt /> */}
                                <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-lg-center">
                            <div className="header-item">
                                <img src={voucher} alt />
                                <p>20% Student Discount</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-xl-right">
                            <div className="header-item">
                                <img src={sales} alt />
                                <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Info End */}
            {/* Header End */}
            {/* Page Add Section Begin */}
            <section className="page-add">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="page-breadcrumb">
                                <h2>Dresses<span>.</span></h2>
                                <a href="#">Home</a>
                                <a href="#">Dresses</a>
                                <a className="active" href="#">Night Dresses</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src={add} alt />
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Add Section End */}
            {/* Contact Section Begin */}
            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <form action="#" className="contact-form" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="First Name" name="first_name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Last Name" name="last_name" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="email" placeholder="E-mail" name="email" />
                                        <input type="text" placeholder="Subject" name="subject" />
                                        <textarea placeholder="Message" defaultValue={""} name="message" />
                                    </div>
                                    <div className="col-lg-12 text-right">
                                        <button type="submit">Send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="contact-widget">
                                <div className="cw-item">
                                    <h5>Location</h5>
                                    <ul>
                                        <li>1525 Awesome Lane, </li>
                                        <li>Los Angeles, CA</li>
                                    </ul>
                                </div>
                                <div className="cw-item">
                                    <h5>Phone</h5>
                                    <ul>
                                        <li>+1 (603)535-4592</li>
                                        <li>+1 (603)535-4556</li>
                                    </ul>
                                </div>
                                <div className="cw-item">
                                    <h5>E-mail</h5>
                                    <ul>
                                        <li>contact@violetstore.com</li>
                                        <li>www.violetstore.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <div className="row">
                            <div className="col-lg-12">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.9279022185303!2d105.74623325658091!3d21.038454869115046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1628089119155!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Section End */}
            {/* Footer Section Begin */}
            <footer className="footer-section spad">
                <div className="container">
                    <div className="newslatter-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#">
                                    <input type="text" placeholder="Your email address" />
                                    <button type="submit">Subscribe to our newsletter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h4>About us</h4>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Community</li>
                                        <li>Jobs</li>
                                        <li>Shipping</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h4>Customer Care</h4>
                                    <ul>
                                        <li>Search</li>
                                        <li>Privacy Policy</li>
                                        <li>2019 Lookbook</li>
                                        <li>Shipping &amp; Delivery</li>
                                        <li>Gallery</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li>Free Shipping</li>
                                        <li>Free Returnes</li>
                                        <li>Our Franchising</li>
                                        <li>Terms and conditions</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h4>Information</h4>
                                    <ul>
                                        <li>Payment methods</li>
                                        <li>Times and shipping costs</li>
                                        <li>Product Returns</li>
                                        <li>Shipping methods</li>
                                        <li>Conformity of the products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-links-warp">
                    <div className="container">
                        <div className="social-links">
                            <a href className="instagram"><i className="fa fa-instagram" /><span>instagram</span></a>
                            <a href className="pinterest"><i className="fa fa-pinterest" /><span>pinterest</span></a>
                            <a href className="facebook"><i className="fa fa-facebook" /><span>facebook</span></a>
                            <a href className="twitter"><i className="fa fa-twitter" /><span>twitter</span></a>
                            <a href className="youtube"><i className="fa fa-youtube" /><span>youtube</span></a>
                            <a href className="tumblr"><i className="fa fa-tumblr-square" /><span>tumblr</span></a>
                        </div>
                    </div>
                    <div className="container text-center pt-5">
                        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                </div>
            </footer></div>

    )
}
