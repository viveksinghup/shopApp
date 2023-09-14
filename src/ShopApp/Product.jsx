import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../redux/ProductActions";
import { useDispatch } from "react-redux";


const Product = () => {
    const [categ, setCateg] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { category } = useParams()
    const [isProductAdded, setIsProductAdded] = useState(false);
    // console.log(category)
    const dispatch = useDispatch();

    const getCategoryList = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`)
        setCateg(data.products)
        setIsLoading(false);
    }
    // console.log(categ);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        getCategoryList()
    }, [])
    return (
        <>
            {isLoading && <div className='p-3 d-flex justify-content-center'>
                <img src="https://samherbert.net/svg-loaders/svg-loaders/circles.svg" alt="" style={{ width: '50px', margin: '0 auto' }} />

            </div>}
            <div className="appearContent container px-4 px-lg-5 my-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 flex-wrap">
                    {
                        categ.map((product, index) => {
                            return (
                                <div className="col mb-4" key={index}>
                                    <div className="card">
                                        <div className="card-img" style={{ position: 'relative' }}>
                                            <img
                                                className="card-img-top card-img-front"
                                                src={product.thumbnail}
                                                style={{ aspectRatio: '1' }} alt=""
                                            />
                                            <div className="card-actions mt-3 d-flex justify-content-evenly">
                                                <div className="card-action px-1">
                                                    <Link to={`/product/${product.id}`}>
                                                        <button
                                                            className="d-inline-flex align-items-center btn btn-primary btn-md px-3 rounded-pill"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalProduct"
                                                        >
                                                            View Product
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="card-action px-1">
                                                    <button
                                                        className="d-inline-flex align-items-center btn btn-outline-primary btn-md px-3 rounded-pill"
                                                        data-toggle="button" onClick={() => {
                                                            setIsProductAdded(true)
                                                            dispatch(addToCart(product))
                                                        }}
                                                    >
                                                        {isProductAdded ? 'Added to Cart' : 'Add to Cart'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0">
                                            <div className="fw-bold">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="mb-4 d-flex justify-content-evenly">
                                            <div className="fs-xs text-muted">
                                                {product.brand}
                                            </div>
                                            <div className="fw-bold text-muted">Rs. {product.price}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Product;
