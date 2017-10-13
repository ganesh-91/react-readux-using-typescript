import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component<{}, { showMenu: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showMenu: false
        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar navbar-dark fixed-top bg-dark">
                <a className="navbar-brand color-white">Dashboard</a>
                <div className="pos-f-t">
                    <button className="navbar-toggler" type="button"
                        onClick={() => {
                            this.setState({ showMenu: !this.state.showMenu });
                        }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className={'dropdown-menu header-menu ' + (this.state.showMenu ? 'show' : '')}>
                    <ul className="nav nav-pills flex-column margin-left-10">
                        <li className="nav-item">
                            <Link to={`/user-list`}
                                onClick={() => {
                                    this.setState({ showMenu: false });
                                }}>User list</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/report`}
                                onClick={() => {
                                    this.setState({ showMenu: false });
                                }}>Report</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}

export default Header;
