import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={"/admin/product"} className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home" />
                            Sản Phẩm
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to={"/admin/category"} className="nav-link" href="#">
                            <span data-feather="bar-chart-2" />
                            Category
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/admin/user"} className="nav-link" href="#">
                            <span data-feather="bar-chart-2" />
                            Users
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="layers" />
                            Integrations
                        </a>
                    </li>
                </ul>

            </div>
        </nav >
    )
}