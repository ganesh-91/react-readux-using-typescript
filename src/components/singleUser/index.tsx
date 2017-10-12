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
                <form className="col-sm-5 margin-bottom-10">
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
                                <option value="">Select</option>
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
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Comments</label>
                        <div className="col-sm-9">
                            <select className="form-control  form-control-sm"
                                onChange={e => this.props.updateSingleUserFields("comments", e.target.value)}
                                value={this.props.userState.singleUser.comments}>
                                <option value="">Select</option>
                                {this.props.userState.commentsDd.map((el, i) => {
                                    return (<option key={i} value={el.value}>{el.label}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="btn-toolbar float-right">
                        <button type="button"
                            onClick={this.saveData.bind(this)}
                            className="page-link btn btn-sm">Save
                        </button>
                        <button type="button"
                            onClick={this.cancelClick.bind(this)}
                            className="page-link btn btn-sm">Cancel
                        </button>
                    </div>
                    <div className="clearfix" />
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
        this.getUserById();
    }
    public componentWillUnmount() {
        let data = {
            id: 0,
            name: "",
            status: "1",
            conductedBy: "",
            comments: "1",
            editable: false
        }
        this.props.updateSingleUserData(data);
    }
    public saveData() {
        this.props.userState.userList.map((user, index) => {
            if (user.id === this.props.userState.singleUser.id) {
                this.props.putSingleUserIntoUserList(this.props.userState.singleUser, index);
            }
        });
        this.props.history.push("/user-list");
    }
    public cancelClick() {
        this.props.history.push("/user-list");
    }
    public getUserById() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.userId)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                let parsedData;
                parsedData = {
                    id: data.id,
                    name: data.name,
                    status: "",
                    conductedBy: "",
                    comments: "",
                    editable: false
                }
                this.props.updateSingleUserData(parsedData);
            });
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