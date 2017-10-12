/// <reference path="../../types/index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';

class ReportComponent extends React.Component<IReportProp, {}> {
    constructor(props: IReportProp) {
        super(props);

    }
    render() {
        let numberOfHire: number = 0, numberOfNoHire: number = 0;
        this.props.userData.userList.map((user) => {
            if ((user.comments === "StrongHire") || (user.comments === "Hire")) {
                numberOfHire = numberOfHire + 1;
            }
            if ((user.comments === "NoHire") || (user.comments === "StrongNoHire")) {
                numberOfNoHire = numberOfNoHire + 1;
            }
        });
        return (
            <div>
                <h3>Total Applicant</h3>
                <p>{this.props.userData.userList.length}</p>
                <h3>Number Of Hire</h3>
                <p>{numberOfHire}</p>
                <h3>Number Of No Hire</h3>
                <p>{numberOfNoHire}</p>
            </div>
        );
    }
}

export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userData: store.userState
    }
}

export default connect(mapStateToProps, {})(ReportComponent);

// export default ReportComponent;