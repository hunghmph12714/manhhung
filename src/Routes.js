import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import ListCategory from "./pages/admin/category/list";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import AboutPage from "./pages/website/about";
import AdminRoute from "./auth/adminRoute";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";
import ListUser from "./pages/admin/user/list";
import AddUserForm from "./pages/admin/user/add";
import Shop from "pages/website/shop";
import ShopCate from "pages/website/shopCate.";
import ShopDetail from "pages/website/shopDetail";
import Contact from "pages/website/contact";
// import Search from "pages/website/search";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <AdminRoute path="/admin">
                    <AdminLayout >
                        <Switch>
                            <Route exact path="/admin/product/">
                                <ListProduct {...props} />
                            </Route>

                            <Route exact path="/admin/product/add">
                                <AddProductForm {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id/edit">
                                <EditProductForm {...props} />
                            </Route>
                            <Route exact path="/admin/category">
                                <ListCategory {...props} />
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AddCategoryForm />
                            </Route>
                            <Route exact path="/admin/category/:id/edit">
                                <EditCategoryForm />
                            </Route>
                            <Route exact path="/admin/user">
                                <ListUser />
                            </Route>
                            <Route exact path="/admin/user/add">
                                <AddUserForm {...props} />
                            </Route>
                        </Switch>
                    </AdminLayout>
                </AdminRoute>
                <Route>
                    <WebsiteLayout {...props}>
                        <Switch>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                            <Route exact path="/about">
                                <AboutPage {...props} />
                            </Route>
                            <Route exact path="/">
                                <AboutPage {...props} />
                            </Route>
                            <Route exact path="/shop">
                                <Shop {...props} />
                            </Route>

                            <Route exact path="/contact">
                                <Contact {...props} />
                            </Route>
                            <Route exact path="/shop/:id/detail/:categoryId">
                                <ShopDetail {...props} />
                            </Route>
                            <Route exact path="/shop/:id/detail/:categoryId">
                                <ShopDetail {...props} />
                            </Route>
                            <Route exact path="/shopCate/:id">
                                <ShopCate {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <Signin />
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
