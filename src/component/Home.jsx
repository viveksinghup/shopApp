import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const pageBoxStyle = {
        height: '200px',
        width: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontSize: '32px',
        border: '1px solid hsl(0deg 0% 100% / 15%)',
        margin: '20px',
        textDecoration: 'none',
        color: '#fff',
    }

    const pages = [{
        page: 'Counter',
        pageLink: '/counter',
        bgColor: 'linear-gradient(180deg, #2af598 0%, #009efd 100%)'
    },
    {
        page: 'Users',
        pageLink: '/UserFunComp',
        bgColor: 'linear-gradient(180deg,  #f83600 0%, #f9d423 100%)'
    },
    {
        page: 'Enquery',
        pageLink: '/enquery',
        bgColor: 'linear-gradient(180deg,  #16a085 0%, #f4d03f 100%)'
    },
    {
        page: 'Khata Book',
        pageLink: '/khataBook',
        bgColor: 'linear-gradient(180deg,  #4481eb 0%, #04befe 100%)'
    },
    {
        page: 'Shop App',
        pageLink: '/shopApp',
        bgColor: 'linear-gradient(180deg,  #cc208e 0%, #6713d2 100%)'
    }];
    return (
        <div className="appearContent">
            <div className="d-flex flex-wrap align-items-center mb-5 justify-content-center">
                {pages.map((pageNo) => (
                    <div style={{ backgroundImage: pageNo.bgColor, margin: '10px'}}>
                        <Link to={pageNo.pageLink} style={pageBoxStyle}>
                            <div>{pageNo.page}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;