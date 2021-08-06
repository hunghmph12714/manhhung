import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import { useLocation } from "react-router-dom";
import { signout } from "../../auth";
import logo from "./img/logo.png"
import search from "./img/icons/search.png"
import bag from "./img/icons/bag.png"
import man from "./img/icons/man.png"
import { useForm } from "react-hook-form";
// import "webpack"

const Header = (props) => {
    // console.log(props)
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    // const { user: { email, id } } = isAuthenticated();
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
    }, [pathname, isLogged]);

    // check login để render lại menu
    const checkLogin = () => {
        if (pathname !== "/signin" && isLogged) {
            return (
                <>
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                    <a
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                                setIsLogged(false);
                            })
                        }
                    >
                        Sign Out
                    </a>
                </>
            );
        } else if (pathname === "/signin" && isLogged) {
            return <Redirect to="/" />;
        } else {
            return (
                <>
                    <NavLink to="/signin">Sign In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </>
            );
        }
    };


    //search 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {

        props.onSearch(data);
        reset(data)
        history.push("/shop");
        console.log(data)
    };

    return (




        <header className="header-section">
            <div className="container-fluid">
                <div className="inner-header">
                    <div className="logo">
                        <a href="./index.html"><img src={logo} alt /></a>
                    </div>
                    <div className="header-right">
                        <img src={search} alt className="search-trigger" />
                        <img src={man} alt />
                        <a href="#">
                            <img src={bag} alt />
                            <span>2</span>
                        </a>
                    </div>
                    <div className="user-access">
                        {/* <a href="#">Register</a>
                        <a href="#" className="in">Sign in</a> */}
                        {checkLogin()}

                    </div>

                    <nav className="main-menu mobile-menu">
                        <ul>
                            <li><Link to="./about">Home</Link></li>
                            <li><Link to="/shop">Shop</Link>
                                <ul className="sub-menu">
                                    {props.dataCate.map((item) =>
                                        <li><Link to={"/shopCate/" + item.id}>{item.name}</Link></li>)}

                                    <li><a href="shopping-cart.html">Shopping Card</a></li>
                                    <li><a href="check-out.html">Check out</a></li>
                                </ul>
                            </li>
                            <li><a href="./product-page.html">About</a></li>
                            <li><a href="./check-out.html">Blog</a></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li>
                                <form onSubmit={handleSubmit(onSubmit)} > <div class="input-group">
                                    <input {...register("search")} type="search" required class="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <button type="submit" class="btn btn-outline-primary">search</button>
                                </div></form>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>

        </header >


    );
};

export default Header;
