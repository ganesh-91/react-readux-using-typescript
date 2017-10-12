import * as React from 'react';

class Sidebar extends React.Component<object> {
    render() {
        return (
            <div className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <h4>Total Applied</h4>
                <p></p>
                <h4>Total Hired</h4>
                <p></p>
                <h4>Total Not Hired</h4>
                <p></p>
            </div>
        );
    }
}

export default Sidebar;
