import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/ProductActions";

const ProductView = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isProductAdded, setIsProductAdded] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();

    const getProductView = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(data)
    }
    // console.log(product);

    useEffect(() => {
        window.scrollTo(0, 0);
        getProductView()
    }, [])
    // console.log(product.price)
    // const finalPrice = () => {
    //     const priceMargin = product.price - (product.price * product.discountPercentage / 100)
    //     return console(priceMargin);
    // }
    // finalPrice()
    return (
        <>
            <div className="appearContent container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            src={product.thumbnail}
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">{product.brand}</div>
                        <h1 className="display-5 fw-bolder">
                            {product.title}
                        </h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">
                                ${product.price}
                            </span>
                            <span>$40.00</span>
                        </div>
                        <p className="lead">
                            {product.description}
                        </p>
                        <div className="d-flex justify-content-center">
                            <input
                                className="form-control text-center me-3"
                                id="inputQuantity"
                                type="num"
                                style={{ maxWidth: "3rem" }}
                            />
                            <button className="btn btn-warning shadow-0 me-3">
                                Buy now
                            </button>
                            <button className="btn btn-primary shadow-0" onClick={() => {
                                setIsProductAdded(true)
                                dispatch(addToCart(product))
                            }}>
                                {isProductAdded ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductView;
