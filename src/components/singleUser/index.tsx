/// <reference path="../../types/index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SingleUserComponent extends React.Component<ISingleUserProps, { statusDd: Array<Status>; commentsDd: Array<Comments>; }> {
    constructor(props: ISingleUserProps) {
        super(props);
        this.state = {
            statusDd: [{ label: "New", value: "New" }, { label: "Hired", value: "Hired" }, { label: "Round 1", value: "Round 1" }, { label: "Round 2", value: "Round 2" }, { label: "Round 3", value: "Round 3" }],
            commentsDd: [{ value: "StrongHire", label: "Strong Hire" }, { value: "Hire", label: "Hire" }, { value: "NoHire", label: "No Hire" }, { value: "StrongNoHire", label: "Strong no hire" }],
        };
    }
    public render() {
        return (
            <div>
                <h2>User Details</h2>
                <form className="col-sm-5">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                            <input value={this.props.userState.singleUser.name}
                                onChange={e => this.props.updateSingleUserFields("name", e.target.value)}
                                className="form-control  form-control-sm" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Status</label>
                        <div className="col-sm-9">
                            <select className="form-control  form-control-sm"
                                onChange={e => this.props.updateSingleUserFields("status", e.target.value)}
                                value={this.props.userState.singleUser.status}>
                                {this.props.userState.statusDd.map((el, i) => {
                                    return (<option key={i} value={el.value}>{el.label}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Conducted By</label>
                        <div className="col-sm-9">
                            <input value={this.props.userState.singleUser.conductedBy}
                                onChange={e => this.props.updateSingleUserFields("conductedBy", e.target.value)}
                                className="form-control  form-control-sm" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    public componentDidMount() {
        let updateStoreArr = [
            "commentsDd",
            "statusDd"
        ]
        updateStoreArr.map((dd) => {
            this.props.updateCommonData(this.state[dd], dd);
        })
    }

}

export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userState: store.userState
    }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        updateSingleUserFields: (prop: string, value: any) => {
            dispatch(actions.updateSingleUserFields({ prop, value }));
        },
        updateSingleUserData: (data: SingleUser) => {
            dispatch(actions.updateSingleUserData(data));
        },
        putSingleUserIntoUserList: (value: {}, index: number) => {
            dispatch(actions.putSingleUserIntoUserList({ value, index }));
        },
        updateCommonData: (value: any, prop: string) => {
            dispatch(actions.updateCommonData({ value, prop }));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserComponent);