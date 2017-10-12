import * as React from 'react';

class Header extends React.Component< object> {
    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top bg-dark">
                <a className="navbar-brand color-white">Dashboard</a>
            </nav>
        );
    }
}

export default Header;
