/// <reference path="../../types/index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import HighChartsComponent from "../common/highCharts";

class ReportComponent extends React.Component<IReportProp, {}> {
    constructor(props: IReportProp) {
        super(props);

    }
    render() {
        let numberOfHire: number = 0, numberOfNoHire: number = 0;
        this.props.userData.userList.map((user) => {
            debugger;
            if ((user.comments === 'Strong Hire') || (user.comments === 'Hire')) {
                numberOfHire = numberOfHire + 1;
            }
            if ((user.comments === 'No Hire') || (user.comments === 'Strong No Hire')) {
                numberOfNoHire = numberOfNoHire + 1;
            }
        });
        let dataArr = {
            series: [{
                type: "pie",
                data: [
                    ['Total Hire', numberOfHire],
                    ['Total No Hire', numberOfNoHire]],
            }]
        };
        return (
            <div className="margin-top-20">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <HighChartsComponent
                            container={"chartsPie"}
                            chartsOptions={dataArr}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Total Applicant</h3>
                        <h4 className="margin-left-10">{this.props.userData.userList.length}</h4>
                        <h3>Number Of Hire</h3>
                        <h4 className="margin-left-10">{numberOfHire}</h4>
                        <h3>Number Of No Hire</h3>
                        <h4 className="margin-left-10">{numberOfNoHire}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userData: store.userState
    };
}

export default connect(mapStateToProps, {})(ReportComponent);