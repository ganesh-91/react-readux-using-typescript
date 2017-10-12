import * as React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component<object> {
    render() {
        return (
            <div className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link to={`/user-list`}>User list</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/report`}>Report</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
