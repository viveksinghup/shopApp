import React from "react"
import heartImg from '../assets/heart.svg';
import filledHeartImg from '../assets/heartFilled.svg';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/ProductActions";

const CartList = () => {
    const cartPageData = useSelector((state) => state.ProductData.cartData)
    const dispatch = useDispatch();
    const totalPrice = cartPageData.reduce((prevsVal, currentVal) => {
        return prevsVal + currentVal.price
    }, 0)
    console.log(cartPageData)
    return (
        <>
            <div className="appearContent">
                <div className="d-flex flex-wrap align-items-center mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="card border shadow-0">
                                    <div className="m-4">
                                        <h4 className="card-title mb-4">Your shopping cart</h4>
                                        {cartPageData.map((cartItem, index) => {
                                            return (
                                                <div key={index} className="row gy-2 mb-2 py-3 border-bottom">
                                                    <div className="col-lg-5">
                                                        <div className="me-lg-5">
                                                            <div className="d-flex">
                                                                <img src={cartItem.thumbnail} style={{ width: '100px', marginRight: '15px' }} alt="" />
                                                                <div className="d-flex flex-column text-start">
                                                                    <span className="nav-link">{cartItem.title}</span>
                                                                    <div className="text-muted">{`Brand:  ${cartItem.brand}`}</div>
                                                                    <span className="text-muted">{`Category:  ${cartItem.category}`}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                                        <div className=" me-4">
                                                            <select className="form-select me-4">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </select>
                                                        </div>
                                                        <div className="text-start">
                                                            {/* <span className="h6">$1156.00</span> <br /> */}
                                                            <small className="text-muted text-nowrap"> ₹ {cartItem.price} / per item </small>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                                        <div className="float-md-end">
                                                            <button className="btn btn-outline shadow-0 me-3" style={{ border: '1px solid #495057' }}>
                                                                {/* <img src={heartImg} alt=""/> */}
                                                                <img src={filledHeartImg} alt="" />
                                                            </button>
                                                            <button className="btn btn-danger shadow-0 me-3" onClick={() => {dispatch(removeFromCart(cartItem.id))}}> Remove </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="mx-4 mb-4">
                                        <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card mb-3 border shadow-0">
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="form-label">Have coupon?</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control border" name="" placeholder="Coupon code" />
                                                    <button className="btn btn-light border">Apply</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card shadow-0 border">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">Total price:</p>
                                            <p className="mb-2">{`₹ ${totalPrice}`}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">Discount:</p>
                                            <p className="mb-2 text-success">-$60.00</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">TAX:</p>
                                            <p className="mb-2">$14.00</p>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">Total price:</p>
                                            <p className="mb-2 fw-bold">$283.00</p>
                                        </div>

                                        <div className="mt-3">
                                            <a href="#" className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
                                            <a href="#" className="btn btn-light w-100 border mt-2"> Back to shop </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList;