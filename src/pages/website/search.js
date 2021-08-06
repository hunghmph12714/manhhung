import React from 'react'
import delivery from "./img/icons/delivery.png"
import voucher from "./img/icons/voucher.png"
import sales from "./img/icons/sales.png"
import add from "./img/add.jpg"
import img4 from "./img/products/img-4.jpg"
import zoom_flus from "./img/icons/zoom-plus.png"
import { Link, useParams } from 'react-router-dom'

export default function Search(props) {
    console.log(props)
    console.log(useParams("categoryId"));
    // const categoryId = useParams("categoryId";
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
            {/* Categories Page Section Begin */}
            <section className="categories-page spad">
                <div className="container">
                    <div className="categories-controls">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="categories-filter">
                                    <div className="cf-left">
                                        <form action="#">
                                            <select className="sort">
                                                <option value>Sort by</option>
                                                <option value>Orders</option>
                                                <option value>Newest</option>
                                                <option value>Price</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="cf-right">
                                        <span>20 Products</span>
                                        <a href="#" >2</a>
                                        <a href="#" className="active">4</a>
                                        <a href="#">6</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {props.data.map((item) => (
                            // item.categoryId==categoryId?
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product-item">
                                    <figure>
                                        <img src={item.image} alt />
                                        <div className="p-status popular">popular</div>
                                        <div className="hover-icon">
                                            <a href={item.image} className="pop-up"><img src={zoom_flus} alt /></a>
                                        </div>
                                    </figure>
                                    <div className="product-text">
                                        <Link to={`shop/${item.id}/detail/${item.categoryId}`}>
                                            <h6>{item.name}</h6>
                                        </Link>
                                        <p>{item.price} vnd</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>    <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>    <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>    <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>    <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>    <div className="col-lg-3 col-md-6">
                            <div className="single-product-item">
                                <figure>
                                    <img src={img4} alt />
                                    <div className="p-status popular">popular</div>
                                    <div className="hover-icon">
                                        <a href={img4} className="pop-up"><img src={zoom_flus} alt /></a>
                                    </div>
                                </figure>
                                <div className="product-text">
                                    <a href="#">
                                        <h6>Blue Dress with details</h6>
                                    </a>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>






                    </div>
                    <div className="more-product">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <a href="#" className="primary-btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
