import React from "react"
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (<>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
                <div>
                </div>
            </header>

            <main className="px-3">
                <h1>Page not found</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages.</p>
                <p className="lead">
                    <Link to="/">
                        <span className="btn btn-lg btn-light fw-bold border-white bg-white">Back to Home</span >
                    </Link>
                </p>
            </main>

            <footer className="mt-auto text-white-50">
            </footer>
        </div ></>)
}

export default PageNotFound;