import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/ProductActions";

const ShopApp = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(products => {
                setIsLoading(false);
                setProducts(products.products)
            });
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(category => {
                setCategory(category)
            })
        // console.log(category);
    }, [])

    return (
        <>
            <div className="appearContent">
                <div className="container">
                    {category && <div className="nav-scroller py-1 mb-3 border-bottom border-top">
                        <div className="nav nav-underline justify-content-between">
                            {category.map((category, index) => {
                                return (
                                    <Link key={index} to={`/products/${category}`}><span style={{ cursor: 'pointer' }} className="nav-item nav-link link-body-emphasis">{category}</span></Link>
                                )
                            })}
                        </div>
                    </div>}
                </div>
                <main className="container">
                    <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                        <div className="col-lg-6 text-start">
                            <h1 className="display-4">Title of a longer featured blog post</h1>
                            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                            <p className="lead mb-0"><button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                                Call Now
                            </button></p>
                        </div>
                    </div>
                </main>
                <div className="container">
                    {isLoading && <div className='p-3 d-flex justify-content-center'>
                        <img src="https://samherbert.net/svg-loaders/svg-loaders/circles.svg" alt="" style={{ width: '50px', margin: '0 auto' }} />

                    </div>}
                    {!isLoading && <>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 flex-wrap">
                            {
                                products.map((product, index) => {
                                    return (
                                        <>
                                            <div className="col mb-4" key={index}>
                                                <div className="card">
                                                    {/* Image */}
                                                    <div className="card-img" style={{ position: 'relative' }}>
                                                        <img
                                                            className="card-img-top card-img-front"
                                                            src={product.thumbnail}
                                                            style={{ aspectRatio: '1' }} alt=""
                                                        />

                                                        {/* Actions */}
                                                        <div className="card-actions mt-3 d-flex justify-content-evenly">
                                                            <div className="card-action px-1">
                                                                <Link to={`/product/${product.id}`}>
                                                                    <button
                                                                        className="d-inline-flex align-items-center btn btn-primary btn-md px-4 rounded-pill"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modalProduct"
                                                                    >
                                                                        View Product
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                            <div className="card-action px-1">
                                                                <button
                                                                    className="d-inline-flex align-items-center btn btn-outline-primary btn-md px-4 rounded-pill"
                                                                    data-toggle="button"
                                                                    onClick={() => { dispatch(addToCart(product)) }}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Body */}
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
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
};

export default ShopApp;
