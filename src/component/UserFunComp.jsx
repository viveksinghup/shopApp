import React, { useEffect, useState } from 'react';

const UserFunComp = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(8);
    const [active, setActive] = useState(null)

    const handlePage = (page) => {
        setPage(page)
        setActive(page)
    }

    const handleLimit = (limit) => {
        setLimit(limit)
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'app-id': '64da699b7841392dee472d86'
            }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data.data);
                setIsLoading(false);
            });
    }, [page, limit])
    // console.log(users);
    return (
        <>
            <div className="container appearContent">
                <div className="rounded p-3 bg-body-tertiary d-flex justify-content-between align-items-center pb-2 mb-4">
                    {isLoading && <div className='p-3'>
                        <div className=''>
                            Loading...
                        </div>

                    </div>}
                    {!isLoading && <>
                        <h5 className='m-0'>Total {users.length} Cards showing</h5>
                        <div>

                            <ul className="pagination align-items-center mb-2.5 justify-content-center">
                                <h5 className='m-2'>Records per page</h5>
                                <select className='p-2' value={limit} onChange={(event) => handleLimit(event.target.value)}>
                                    {[8, 16, 24].map((limit, index) => (
                                        <option className="page-item" value={limit} key={index}>{limit}</option>
                                    ))}
                                </select>
                            </ul>
                        </div>
                    </>
                    }
                </div>
                {isLoading && <div className='pt-5'>
                    <img src="https://samherbert.net/svg-loaders/svg-loaders/circles.svg" alt="" style={{ width: '80px', margin: 'auto' }} />
                </div>}

                {/* {isLoading && <main className="px-3">
                    <h1>No Record Found</h1>
                    <p className="lead">
                        <span className="btn btn-lg btn-light fw-bold border-white bg-white">Back to HomePage</span>
                    </p>
                </main>
                } */}
                {!isLoading && <>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 appearContent">
                        {
                            users.map((user, index) => {
                                return (<div className="col" key={index}>
                                    <div className="card shadow-sm">
                                        <img src={user.picture} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{`${user.title.toUpperCase()} ${user.firstName} ${user.lastName}`}</h5>
                                            <span className="card-title">User ID: {user.id}</span>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col m-5">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((page, index) => (
                                        <li key={index} className={`page-item ${active === page && 'active'}`} onClick={() => { handlePage(page) }}><span className="page-link">{page}</span></li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </>}
            </div>
        </>
    )
}

export default UserFunComp;