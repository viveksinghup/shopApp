import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Counter from "./component/Counter";
import Enquery from "./component/Enquery";
import Users from "./component/Users";
import UserFunComp from "./component/UserFunComp";
import KhataBook from "./component/KhataBook";
import ShopApp from "./ShopApp/Index";
import Product from "./ShopApp/Product";
import ProductView from "./ShopApp/ProductView"
import PageNotFound from "./component/PageNotFound";
import CartList from "./ShopApp/CartList";


function App() {
    const footerLinks = {
        text1: "Home",
        text2: "Counter",
        text3: "Enquery",
        text4: "Users",
    };
    return (
        <div className="App d-flex flex-column h-100">
            <div className="flex-shrink-0">
                <Header />
                <div className="container flex-shrink-0 py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/counter" element={<Counter />}></Route>
                                <Route path="/enquery" element={<Enquery />}></Route>
                                <Route path="/UserFunComp" element={<UserFunComp />}></Route>
                                <Route path="/KhataBook" element={<KhataBook />}></Route>
                                <Route path="/shopApp" element={<ShopApp />}></Route>
                                <Route path="/Products/:category" element={<Product />}></Route>
                                <Route path="/product/:id" element={<ProductView />}></Route>
                                <Route path="*" element={<PageNotFound />}></Route>
                                <Route path="/cart" element={<CartList />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            <Footer link={footerLinks} />
        </div>
    );
}

export default App;
