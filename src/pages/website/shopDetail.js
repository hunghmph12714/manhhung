// import { get } from 'jquery';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import delivery from "./img/icons/delivery.png"
import voucher from "./img/icons/voucher.png"
import sales from "./img/icons/sales.png"
import add from "./img/add.jpg"
import img4 from "./img/products/img-4.jpg"
import zoom_flus from "./img/icons/zoom-plus.png"
import { get, getAllCateId, getAllCateId_Ne } from "../../api/productAPI";

export default function ShopDetail(props) {

    const { id } = useParams();
    const history = useHistory();


    console.log(useParams());

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await get(id);
                setProduct(data);
            } catch (error) {

            }
        };
        getProduct();
    }, [id]);
    console.log(product.categoryId)



    const { categoryId } = useParams();
    console.log(categoryId);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        const getProducts = async () => {
            try {

                const { data } = await getAllCateId_Ne(categoryId, id);
                setProducts(data);
                console.log("hhhhhhh", data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [id]);
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
            {/* Product Page Section Beign */}
            <section className="product-page">
                <div className="container">
                    <div className="product-control">
                        <a href="#">Previous</a>
                        <a href="#">Next</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-slider">
                                <div className="product-img">
                                    <figure>
                                        <img src={product.image} alt />
                                        <div className="p-status">new</div>
                                    </figure>
                                </div>
                                {/* <div className="product-img">
                                    <figure>
                                        <img src={product.image} alt />
                                        <div className="p-status">new</div>
                                    </figure>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-content">
                                <h2>{product.name}</h2>
                                <div className="pc-meta">
                                    <h3>Giá: {product.price} VND</h3>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis.</p>
                                <ul className="tags">
                                    <li><span>Category :</span> Men’s Wear</li>
                                    <li><span>Tags :</span> man, shirt, dotted, elegant, cool</li>
                                </ul>
                                <div className="product-quantity">
                                    <div className="pro-qty">
                                        <input type="text" defaultValue={1} />
                                    </div>
                                </div>
                                <a href="#" className="primary-btn pc-btn">Add to cart</a>
                                <ul className="p-info">
                                    <li>Product Information</li>
                                    <li>Reviews</li>
                                    <li>Product Care</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Page Section End */}
            {/* Related Product Section Begin */}
            <section className="related-product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item) => (<div className="col-lg-3 col-sm-6">
                            <div className="single-product-item">
                                <figure>
                                    <Link to={`/shop/${item.id}/detail/${item.categoryId}`}><img height={'400px'} src={item.image} alt /></Link>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <Link to={`/shop/${item.id}/detail/${item.categoryId}`}>     <h6>{item.name}</h6></Link>
                                    <p>{item.price} vnd</p>
                                </div>
                            </div>
                        </div>))}

                    </div>
                </div>
            </section>
        </div>

    )
}
