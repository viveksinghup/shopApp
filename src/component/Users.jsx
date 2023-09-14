import React, { Component } from "react";


class Users extends Component {
    state = {
        users: [],
        page: 0
    }

    getUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.page}&limit=8`, {
            method: 'GET',
            headers: {
                'app-id': '64da699b7841392dee472d86'
            }
        })
        const data = await response.json();
        this.setState({ users: data.data })
        // console.log('stateUsers', this.state.users)
    }
    componentDidMount() {
        this.getUserData();
    }

    setPages = (pageNum) => {
        this.setState({ page: pageNum });
        // console.log('pageNum', pageNum)
    }

    componentDidUpdate(prevsProps, prevsState) {
        // console.log('prevsState', prevsState);
        if (prevsState.page !== this.state.page) {
            this.getUserData();
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        {/* {this.isLoading && <div>
                            <img src="https://samherbert.net/svg-loaders/svg-loaders/circles.svg" alt="" style={{width: '80px'}} />
                        </div>} */}
                        {!this.isLoading && (this.state.users.length > 0) && <>
                            {
                                this.state.users.map((user, index) => {
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
                        </>}
                    </div>
                    <div className="row">
                        <div className="col m-5">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNum, index) => (
                                        <li className="page-item" key={index} onClick={() => { this.setPages(pageNum) }}><span className="page-link">{pageNum}</span></li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Users;