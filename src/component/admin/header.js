import { signout } from "auth";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import search from "../website/img/logo.png"
export default function Header() {
    const [isLogged, setIsLogged] = useState(false);

    const history = useHistory()
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/about">
                <img src={search} alt className="search-trigger" />
            </Link>
            <button
                className="navbar-toggler position-absolute d-md-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <input
                className="form-control form-control-dark w-100"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#" onClick={() =>
                        signout(() => {
                            history.push("/");
                            setIsLogged(false);
                        })
                    }>
                        Sign out
                    </a>
                </div>
            </div>
        </header>
    );
}
