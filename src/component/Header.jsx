import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

function Header(props) {
    const cartPageData = useSelector((state) => state.ProductData.cartData)
    const cartCount = {
        display: 'flex',
        position: 'relative',
        top: '-5px',
        right: '-2px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        backgroundColor: 'red',
        borderRadius: '100%',
        color: '#fff',
        width: '20px',
        height: '20px'
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="38" height="30" className="d-inline-block align-text-top" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink to="/" className={`nav-link ({ isActive }) =>
                            (isActive ? 'active' : 'inactive')`}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/counter" className={`nav-link ({ isActive }) =>
                            (isActive ? 'active' : 'inactive')`}>Counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/enquery" className={`nav-link ({ isActive }) =>
                            (isActive ? 'active' : 'inactive')`}>Enquery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/UserFunComp" className={`nav-link ({ isActive }) =>
                            (isActive ? 'active' : 'inactive')`}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/KhataBook" className={`nav-link ({ isActive }) =>
                            (isActive ? 'active' : 'inactive')`}>KhataBook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shopApp" className={`nav-link ({isActive}) => (isActive ? 'active' : 'inactive')`}>ShopApp</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {cartPageData.length > 0 && <Link to="/cart" className="px-3">
                            <button className="d-inline-flex align-items-center btn btn-warning btn-md px-3" type="button">
                                Cart
                                <span style={cartCount}>{cartPageData.length}</span>
                            </button>
                        </Link>}
                        <button className="d-inline-flex align-items-center btn btn-success btn-md px-4" type="button">
                            Call Now
                        </button>
                    </form>
                </div>
            </div>
        </nav >
    )
}

export default Header