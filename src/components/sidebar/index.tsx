import * as React from 'react';
// import { Link } from 'react-router-dom';
// import ReportComponent from '../report';
import { connect } from 'react-redux';

//stateless component

const Sidebar = (props: IReportProp) => {
    let numberOfHire: number = 0, numberOfNoHire: number = 0;
    props.userData.userList.map((user) => {
        let bool = (user.comments.toUpperCase().includes('.HIRE') ||
            user.comments.toUpperCase().includes(',HIRE') ||
            user.comments.toUpperCase().includes(' HIRE'));
            debugger;
        if (bool) {
            numberOfHire = numberOfHire + 1;
        }
    });
    numberOfNoHire = props.userData.userList.length - numberOfHire;
    return (
        <div className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            <div>
                <h4>Total Applicant</h4>
                <h5 className="margin-left-10">{props.userData.userList.length}</h5>
                <h4>Number Of Hire</h4>
                <h5 className="margin-left-10">{numberOfHire}</h5>
                <h4>Number Of No Hire</h4>
                <h5 className="margin-left-10">{numberOfNoHire}</h5>
            </div>
        </div>
    )
}
export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userData: store.userState
    };
}

export default connect(mapStateToProps, {})(Sidebar);
