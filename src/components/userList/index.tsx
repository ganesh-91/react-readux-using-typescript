/// <reference path="../../types/index.d.ts" />

import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

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
                        <option value="" disabled>Status</option>
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
                    <input value={this.props.singleUser.comments}
                        onChange={e => this.props.updateSingleUserFields(e, "comments")}
                        className="form-control  form-control-sm"
                        hidden={!this.props.data.editable} />
                </td>
                <td>
                    <div>
                        <button type="button" value={this.props.data.id}
                            hidden={this.props.data.editable}
                            onClick={e => this.props.editClick(e, this.props.data.id)}
                            className="page-link btn btn-sm">edit
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
            itemPerPage: 5,
            statusDdId: '1',
            commentsDdId: '1',
            filterByApplicantName: '',
            filterByConductorName: '',
            statusDd: [{ label: 'New', value: 'New' }, { label: 'Hired', value: 'Hired' }, { label: 'Round 1', value: 'Round 1' }, { label: 'Round 2', value: 'Round 2' }, { label: 'Round 3', value: 'Round 3' }]
        };
    }
    public render() {
        const userListToShow = this.getUserListToShow(this.props.userData.userList);
        return (
            <div >
                <h2>User List</h2>
                <div >
                    Filters:-
                    </div >
                <div className="row justify-content-start margin-bottom-10">
                    <div className="col-md-3 col-xs-12">
                        <select className="form-control  form-control-sm"
                            onChange={(event: any) => {
                                this.updateStatusDdState(event);
                                this.props.updateUserListResetEditable();
                            }}
                            value={this.state.statusDdId}>
                            <option value="1" >Show all by Statue</option>
                            {this.state.statusDd.map((el, i) => {
                                return (<option key={i} value={el.value}>{el.label}</option>);
                            })}
                        </select>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <input value={this.state.filterByApplicantName}
                            placeholder="Search in Applicant's Name"
                            onChange={(event) => {
                                this.setState({ filterByApplicantName: event.target.value });
                                this.props.updateUserListResetEditable();
                            }}
                            className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <input value={this.state.filterByConductorName}
                            placeholder="Search in Conductor's Name"
                            onChange={(event) => {
                                this.setState({ filterByConductorName: event.target.value });
                                this.props.updateUserListResetEditable();
                            }}
                            className="form-control form-control-sm" />
                    </div>
                </div>
                <table className="table table-hover table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th>Applicant's Name</th>
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
                                        editClick={(event: any, id: number) => {
                                            this.editClick(event, id);
                                        }}
                                        updateSingleUserFields={(event: any, prop: string) => {
                                            this.updateSingleUserFields(event, prop);
                                        }}
                                        saveClick={(event: any, id: number) => {
                                            this.saveClick(event, id);
                                        }}
                                        cancelClick={(event: any, id: number) => {
                                            this.cancelClick(event, id);
                                        }}
                                        selectOptions={this.props.userData.statusDd}
                                        singleUser={this.props.userData.singleUser}
                                        key={user.id} data={user} />
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
                <PaginationComponent
                    componentClassName="float-right"
                    itemCount={userListToShow.length}
                    maxButtons={5}
                    itemPerPage={this.state.itemPerPage}
                    activePage={this.state.activePage}
                    pageChange={(value: number) => {
                        this.handlePaginationChange(value);
                        this.props.updateUserListResetEditable();
                    }} />
                <div className="clearfix" />
            </div >
        );
    }
    public componentDidMount() {
        let updateStoreArr = [
            'statusDd'
        ];
        updateStoreArr.map((dd) => {
            this.props.updateCommonData(this.state[dd], dd);
        });
        if (localStorage.getItem('dataObject')) {
            this.props.updateUserList(JSON.parse(localStorage.getItem('dataObject') || ""));
        } else {
            this.getUserList();
        }
    }
    public getUserListToShow(array: Array<SingleUser>): Array<SingleUser> {
        let arrayList: any = [];
        array.map((dataObj) => {
            if (((this.state.statusDdId === dataObj.status) || this.state.statusDdId === '1') &&
                ((this.state.commentsDdId === dataObj.comments) || this.state.commentsDdId === '1') &&
                ((dataObj.name.toUpperCase().includes(this.state.filterByApplicantName.toUpperCase())) || this.state.filterByApplicantName === '') &&
                ((dataObj.conductedBy.toUpperCase().includes(this.state.filterByConductorName.toUpperCase())) || this.state.filterByConductorName === '')) {
                arrayList.push(dataObj);
            }
        });
        return arrayList;

    }
    public getUserList() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('https://uinames.com/api/?amount=25&region=india')
            .then(function (response: any) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then((data) => {
                let parsedArray: Array<SingleUser> = [];
                parsedArray.push({
                    name: 'Paridhi Trivedi',
                    id: 1,
                    conductedBy: 'Ramesh',
                    status: 'Round 3',
                    editable: false,
                    comments: 'a random comment.Hire'
                });
                data.map((obj: any, i: number) => {
                    parsedArray.push({
                        name: obj.name + " " + obj.surname,
                        id: i + 2,
                        conductedBy: '',
                        status: '',
                        editable: false,
                        comments: ''
                    });
                });
                this.props.updateUserList(parsedArray);
                localStorage.setItem('dataObject', JSON.stringify(parsedArray));
            });
    }
    private updateStatusDdState(event: any): void {
        this.setState({ statusDdId: event.target.value, activePage: 1 });
    }
    private handlePaginationChange(value: number): void {
        this.setState({ activePage: value });
    }
    private editClick(event: any, id: number): void {
        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.updateSingleUserData(obj);
                this.props.updateUserListFields(true, 'editable', i);
            }
        });
    }
    private saveClick(event: any, id: number): void {
        let newState: Object;
        newState = JSON.parse(localStorage.getItem('dataObject') || "");

        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.putSingleUserIntoUserList(this.props.userData.singleUser, i);
                newState[i] = this.props.userData.singleUser;
            }
        });
        localStorage.setItem('dataObject', JSON.stringify(newState));
    }
    private cancelClick(event: any, id: number): void {
        this.props.userData.userList.map((obj, i) => {
            if (obj.id === id) {
                this.props.updateUserListFields(false, 'editable', i);
            }
        });
        this.props.updateSingleUserData({
            id: 1,
            name: '',
            conductedBy: '',
            status: '',
            editable: false,
            comments: ''
        });
    }
    private updateSingleUserFields(event: any, prop: string): void {
        debugger;
        this.props.updateSingleUserFields(prop, event.target.value);
    }
}

export function mapStateToProps(store: { userState: StoreState }) {
    return {
        userData: store.userState
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UserAction>) {
    return {
        updateSingleUserFields: (prop: string, value: {}) => {
            dispatch(actions.updateSingleUserFields({ prop, value }));
        },
        updateUserListResetEditable: () => {
            dispatch(actions.updateUserListResetEditable());
        },
        updateUserList: (list: Array<SingleUser>) => {
            dispatch(actions.updateUserList(list));
        },
        updateSingleUserData: (data: SingleUser) => {
            dispatch(actions.updateSingleUserData(data));
        },
        updateUserListFields: (value: {}, prop: string, index: number) => {
            dispatch(actions.updateUserListFields({ value, prop, index }));
        },
        putSingleUserIntoUserList: (value: {}, index: number) => {
            dispatch(actions.putSingleUserIntoUserList({ value, index }));
        },
        updateCommonData: (value: {}, prop: string) => {
            dispatch(actions.updateCommonData({ value, prop }));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);