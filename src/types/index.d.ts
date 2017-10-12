interface Status {
    value: string;
    label: string;
}

interface Comments {
    value: string;
    label: string;
}

interface SingleUser {
    id: number;
    name: string;
    conductedBy: string;
    status: string;
    editable: boolean;
    comments: string;
}

interface StoreState {
    statusDd: Array<Status>;
    commentsDd: Array<Comments>;
    singleUser: {
        id: number;
        name: string;
        conductedBy: string;
        status: string;
        editable: boolean;
        comments: string;
    };
    userList: Array<SingleUser>;
}

interface IPaginationComponentProps {
    itemCount: number;
    maxButtons: number;
    itemPerPage: number;
    activePage: number;
    componentClassName: string;
    pageChange: (event: any) => void;
}

interface ITableDataRowProp {
    index: number;
    singleUser: SingleUser;
    data: SingleUser;
    selectOptions: Array<Status>;
    commentOptions: Array<Comments>;
    editClick: (event: any, id: number) => void;
    saveClick: (event: any, id: number) => void;
    cancelClick: (event: any, id: number) => void;
    updateSingleUserFields: (event: any, prop: string) => void;
}

interface IUserListState {
    statusDd: Array<Status>;
    activePage: number;
    itemPerPage: number;
    statusDdId: string;
    commentsDdId: string;
    commentsDd: Array<Comments>;
}

interface IUserListProps {
    userData: StoreState;
    updateSingleUserFields: (prop: string, value: any) => Event;
    updateUserList: (list: Array<SingleUser>) => Event;
    updateSingleUserData: (data: SingleUser) => Event;
    updateUserListFields: (value: any, prop: string, index: number) => Event;
    putSingleUserIntoUserList: (value: {}, index: number) => Event;
    updateCommonData: (value: any, prop: string) => Event;
}

interface ISingleUserProps {
    userState: StoreState;
    match: any;
    history: any;
    updateSingleUserFields: (prop: string, value: any) => Event;
    updateSingleUserData: (data: SingleUser) => Event;
    putSingleUserIntoUserList: (value: {}, index: number) => Event;
    updateCommonData: (value: any, prop: string) => Event;

}

interface IReportProp {
    userData: StoreState;
}

// interface ITodo { StoreState
//     id: string,
//     title: string,
//     completed: boolean
// }

// // Defines the interface of the properties of the TodoItem component
// interface ITodoItemProps {
//     key: string,
//     todo: ITodo;
//     editing?: boolean;
//     onSave: (val: any) => void;
//     onDestroy: () => void;
//     onEdit: () => void;
//     onCancel: (event: any) => void;
//     onToggle: () => void;
// }

// // Defines the interface of the state of the TodoItem component
// interface ITodoItemState {
//     editText: string
// }

// // Defines the interface of the state of the App component
// interface IAppState {
//     editing?: string;
//     nowShowing?: string
// }