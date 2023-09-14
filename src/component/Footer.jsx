import { Link } from "react-router-dom";
import { Component } from "react";

class Footer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        return (
            <footer className="py-3 footer mt-auto py-3 bg-body-tertiary">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link px-2 text-body-secondary"
                        >
                            {this.props.link.text1}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/counter"
                            className="nav-link px-2 text-body-secondary"
                        >
                            {this.props.link.text2}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/enquery"
                            className="nav-link px-2 text-body-secondary"
                        >
                            {this.props.link.text3}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/UserFunComp"
                            className="nav-link px-2 text-body-secondary"
                        >
                            {this.props.link.text4}
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">
                    © 2023 Company, Inc
                </p>
            </footer>
        );
    }
}

export default Footer;
