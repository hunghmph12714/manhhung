import slider1 from './img/slider1.jpg';
import slider2 from './img/slider-2.jpg';
import slider3 from './img/slider-3.jpg';

// import "react-scripts/lib/react-app.d.ts"
import img1 from "./img/products/img-1.jpg";
import looknok from "./img/lookbok.jpg"
import f_box_1 from "./img/f-box-1.jpg"
import delivery from "./img/icons/delivery.png"
import voucher from "./img/icons/voucher.png"
import sales from "./img/icons/sales.png"
import add from "./img/add.jpg"
import f_delivery from "./img/icons/f-delivery.png"
import coin from "./img/icons/coin.png"
import chat from "./img/icons/chat.png"
import f_box_2 from "./img/f-box-2.jpg"
import f_box_3 from "./img/f-box-3.jpg"

// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNewProduct } from 'api/productAPI';
const AboutPage = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const onNewProduct = async () => {
            const { data } = await getNewProduct()
            setProduct(data)
            // console.log(data)
        }
        onNewProduct()

    }, [])
    console.log(product)
    return (

        <div>
            <div className="header-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                <img src={delivery} alt />
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
            {/* Hero Slider Begin */}
            <section className="hero-slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slider1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            {/* Hero Slider End */}
            {/* Features Section Begin */}
            <section className="features-section spad">
                <div className="features-ads">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-features-ads first">
                                    <img src={f_delivery} alt />
                                    <h4>Free shipping</h4>
                                    <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal
                                        esuada aliquet libero viverra cursus. </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-features-ads second">
                                    <img src={coin} alt />
                                    <h4>100% Money back </h4>
                                    <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                        aliquet libero viverra cursus. </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-features-ads">
                                    <img src={chat} alt />
                                    <h4>Online support 24/7</h4>
                                    <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                        aliquet libero viverra cursus. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Box */}
                <div className="features-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="single-box-item first-box">
                                            <img src={f_box_1} alt />
                                            <div className="box-text">
                                                <span className="trend-year">2019 Party</span>
                                                <h2>Jewelry</h2>
                                                <span className="trend-alert">Trend Allert</span>
                                                <a href="#" className="primary-btn">See More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-box-item second-box">
                                            <img src={f_box_2} alt />
                                            <div className="box-text">
                                                <span className="trend-year">2019 Trend</span>
                                                <h2>Footwear</h2>
                                                <span className="trend-alert">Bold &amp; Black</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-box-item large-box">
                                    <img src={f_box_3} alt />
                                    <div className="box-text">
                                        <span className="trend-year">2019 Party</span>
                                        <h2>Collection</h2>
                                        <div className="trend-alert">Trend Allert</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Section End */}
            {/* Latest Product Begin */}
            <section className="latest-products spad">
                <div className="container">
                    <div className="product-filter">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-title">
                                    <h2>Sản phẩm mới nhất</h2>
                                </div>
                                <ul className="product-controls">
                                    <li data-filter="*">All</li>
                                    <li data-filter=".dresses">Dresses</li>
                                    <li data-filter=".bags">Bags</li>
                                    <li data-filter=".shoes">Shoes</li>
                                    <li data-filter=".accesories">Accesories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="product-list">
                        {product.map((item) => (

                            <div className="col-lg-3 col-sm-6 mix all dresses bags">
                                <div className="single-product-item">
                                    <figure>
                                        <Link to={`shop/${item.id}/detail/${item.categoryId}`}><img height={'400px'} src={item.image} alt /></Link>
                                        <div className="p-status">new</div>
                                    </figure>
                                    <div className="product-text">
                                        <h6>{item.name}</h6>
                                        <p>{item.price} vnd</p>
                                    </div>
                                </div>
                            </div>



                        ))}







                    </div>
                </div>
            </section>
            {/* Latest Product End */}
            {/* Lookbok Section Begin */}
            <section className="lookbok-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-1">
                            <div className="lookbok-left">
                                <div className="section-title">
                                    <h2>2019 <br />#lookbook</h2>
                                </div>
                                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada
                                    aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo
                                    lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo
                                    viverra scelerisque. Phasellus facilisis lobortis metus, sit amet viverra lectus finibus ac.
                                    Aenean non felis dapibus, placerat libero auctor, ornare ante. Morbi quis ex eleifend,
                                    sodales nulla vitae, scelerisque ante. Nunc id vulputate dui. Suspendisse consectetur rutrum
                                    metus nec scelerisque. s</p>
                                <a href="#" className="primary-btn look-btn">See More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="lookbok-pic">
                                <img src={looknok} alt />
                                <div className="pic-text">fashion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Lookbok Section End */}
            {/* Logo Section Begin */}
            <div className="logo-section spad">
                <div className="logo-items owl-carousel">
                    <div className="logo-item">
                        <img src="img/logos/logo-1.png" alt />
                    </div>
                    <div className="logo-item">
                        <img src="img/logos/logo-2.png" alt />
                    </div>
                    <div className="logo-item">
                        <img src="img/logos/logo-3.png" alt />
                    </div>
                    <div className="logo-item">
                        <img src="img/logos/logo-4.png" alt />
                    </div>
                    <div className="logo-item">
                        <img src="img/logos/logo-5.png" alt />
                    </div>
                </div>
            </div>
        </div>



    )
};
export default AboutPage;
