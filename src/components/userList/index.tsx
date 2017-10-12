/// <reference path="../../types/index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';

import dummySmsList from '../../data';
import * as actions from '../../actions/';
// import { store } from '../../store';
import PaginationComponent from '../common/pagination';

class TableDataRow extends React.Component<ITableDataRowProp, {}> {

    render() {
        return (
            <tr>
                <td>
                    <label>{this.props.data.id}</label>
                </td>
                <td>
                    <label hidden={this.props.data.editable}>{this.props.data.name}</label>
                    <input value={this.props.singleUser.name}
                        onChange={e => this.props.updateSingleUserFields(e, "name")}
                        className="form-control  form-control-sm"
                        hidden={!this.props.data.editable} />
                </td>
                <td>
                    <label hidden={this.props.data.editable}>{this.props.data.status}</label>
                    <select className="form-control  form-control-sm"
                        onChange={e => this.props.updateSingleUserFields(e, "status")}
                        hidden={!this.props.data.editable}
                        value={this.props.singleUser.status}>
                        {this.props.selectOptions.map((el, i) => {
                            return (<option key={i} value={el.value}>{el.label}</option>)
                        })}
                    </select>
                </td>
                <td>
                    <label hidden={this.props.data.editable}>{this.props.data.conductedBy}</label>
                    <input value={this.props.singleUser.conductedBy}
                        onChange={e => this.props.updateSingleUserFields(e, "conductedBy")}
                        className="form-control  form-control-sm"
                        hidden={!this.props.data.editable} />
                </td>
                <td>
                    <label hidden={this.props.data.editable}>{this.props.data.comments}</label>
                    <select className="form-control  form-control-sm"
                        onChange={e => this.props.updateSingleUserFields(e, "comments")}
                        hidden={!this.props.data.editable}
                        value={this.props.singleUser.comments}>
                        {this.props.commentOptions.map((el, i) => {
                            return (<option key={i} value={el.value}>{el.label}</option>)
                        })}
                    </select>
                </td>
                <td>
                    <div hidden={this.props.data.editable}>
                        <button type="button" value={this.props.data.id}
                            onClick={e => this.props.editClick(e, this.props.data.id)}
                            className="page-link btn btn-sm">Edit
                    </button>
                    </div>
                    <div className="btn-toolbar" hidden={!this.props.data.editable}>
                        <button type="button" value={this.props.data.id}
                            onClick={e => this.props.saveClick(e, this.props.data.id)}
                            className="page-link btn btn-sm">Save
                        </button>
                        <button type="button" value={this.props.data.id}
                            onClick={e => this.props.cancelClick(e, this.props.data.id)}
                            className="page-link btn btn-sm">Cancel
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

class UserList extends React.Component<IUserListProps, IUserListState> {
    constructor(props: IUserListProps) {
        super(props);
        this.state = {
            activePage: 1,
            itemPerPage: 6,
            statusDdId: "1",
            commentsDdId: "1",
            statusDd: [{ label: "New", value: "New" }, { label: "Hired", value: "Hired" }, { label: "Round 1", value: "Round 1" }, { label: "Round 2", value: "Round 2" }, { label: "Round 3", value: "Round 3" }],
            commentsDd: [{ value: "StrongHire", label: "Strong Hire" }, { value: "Hire", label: "Hire" }, { value: "NoHire", label: "No Hire" }, { value: "StrongNoHire", label: "Strong no hire" }],
        };
    }
    public render() {
        this.props;
        const userListToShow = this.getContactListToShow(this.props.userData.userList);
        return (
            <div >
                <h2>User List</h2>
                <div className="row justify-content-start margin-bottom-10">
                    <div className="col-1">
                        Filters:-
                        </div>
                    <div className="col-2">
                        <select className="form-control  form-control-sm"
                            onChange={this.updateStatusDdState.bind(this)}
                            value={this.state.statusDdId}>
                            <option value="1" >Show all by Statue</option>
                            {this.state.statusDd.map((el, i) => {
                                return (<option key={i} value={el.value}>{el.label}</option>)
                            })}
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-control  form-control-sm"
                            onChange={this.updateCommentDdState.bind(this)}
                            value={this.state.commentsDdId}>
                            <option value="1" >Show all by Comment</option>
                            {this.state.commentsDd.map((el, i) => {
                                return (<option key={i} value={el.value}>{el.label}</option>)
                            })}
                        </select>
                    </div>
                </div>

                <table className="table table-hover table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Conducted By</th>
                            <th>Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListToShow.map((user, i) => {
                            if (i <= (((this.state.activePage) * this.state.itemPerPage) - 1) && i >= ((this.state.activePage - 1) * this.state.itemPerPage)) {
                                return (
                                    <TableDataRow
                                        index={i}
                                        editClick={this.editClick.bind(this)}
                                        updateSingleUserFields={this.updateSingleUserFields.bind(this)}
                                        saveClick={this.saveClick.bind(this)}
                                        cancelClick={this.cancelClick.bind(this)}
                                        selectOptions={this.props.userData.statusDd}
                                        commentOptions={this.props.userData.commentsDd}
                                        singleUser={this.props.userData.singleUser}
                                        key={user.id} data={user} />
                                );
                            }
                            return null
                        })}
                    </tbody>
                </table>
                <PaginationComponent
                    componentClassName="float-right"
                    itemCount={userListToShow.length}
                    maxButtons={5}
                    itemPerPage={this.state.itemPerPage}
                    activePage={this.state.activePage}
                    pageChange={this.handlePaginationChange.bind(this)} />
            </div >
        );
    }
    public componentDidMount() {
        this.props.updateUserList(dummySmsList);
        let updateStoreArr = [
            "commentsDd",
            "statusDd"
        ]
        updateStoreArr.map((dd) => {
            this.props.updateCommonData(this.state[dd], dd);
        })
    }
    public getContactListToShow(array: Array<SingleUser>): Array<SingleUser> {
        let arrayList: any = [];
        array.map((dataObj) => {
            if (((this.state.statusDdId === dataObj.status) || this.state.statusDdId === "1") &&
                ((this.state.commentsDdId === dataObj.comments) || this.state.commentsDdId === "1")) {
                arrayList.push(dataObj);
            }
        });
        return arrayList;
    }
    public updateStatusDdState(event: any): void {
        this.setState({ statusDdId: event.target.value, activePage: 1 });
    }
    public updateCommentDdState(event: any): void {
        this.setState({ commentsDdId: event.target.value, activePage: 1 });
    }
    public handlePaginationChange(event: any, action: string): void {
        if (action === 'TO_PAGE_NUMBER') {
            this.setState({ activePage: parseInt(event.target.value) });
        } else if (action === 'NEXT') {
            if (this.state.activePage >= (dummySmsList.length / this.state.itemPerPage)) {
                return;
            }
            this.setState({ activePage: this.state.activePage + 1 });
        } else if (action === 'PERVIOUS') {
            if (this.state.activePage <= 1) {
                return;
            }
            this.setState({ activePage: this.state.activePage - 1 });
        }
    }
    public editClick(event: any, id: number): void {
        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.updateSingleUserData(obj);
                this.props.updateUserListFields(true, "editable", i);
            }
        });
    }
    public saveClick(event: any, id: number): void {
        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.putSingleUserIntoUserList(this.props.userData.singleUser, i);
            }
        });

    }
    public cancelClick(event: any, id: number): void {
        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.updateUserListFields(false, "editable", i);
            }
        });
        this.props.updateSingleUserData({
            id: 1,
            name: "",
            conductedBy: "",
            status: "",
            editable: false,
            comments: ""
        });
    }
    public updateSingleUserFields(event: any, prop: string): void {
        this.props.updateSingleUserFields(prop, event.target.value);
    }
}

export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userData: store.userState
    }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        updateSingleUserFields: (prop: string, value: any) => {
            dispatch(actions.updateSingleUserFields({ prop, value }));
        },
        updateUserList: (list: Array<SingleUser>) => {
            dispatch(actions.updateUserList(list));
        },
        updateSingleUserData: (data: SingleUser) => {
            dispatch(actions.updateSingleUserData(data));
        },
        updateUserListFields: (value: any, prop: string, index: number) => {
            dispatch(actions.updateUserListFields({ value, prop, index }));
        },
        putSingleUserIntoUserList: (value: {}, index: number) => {
            dispatch(actions.putSingleUserIntoUserList({ value, index }));
        },
        updateCommonData: (value: any, prop: string) => {
            dispatch(actions.updateCommonData({ value, prop }));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);