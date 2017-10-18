interface Status {
    value: string;
    label: string;
}

interface Actions {
    type: string;
    data: {
        value: {};
        prop: string;
        index: number;
    }
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
    editClick: (event: any,
        id: number) => void;
    saveClick: (event: any, id: number) => void;
    cancelClick: (event: any, id: number) => void;
    updateSingleUserFields: (event: any, prop: string) => void;
}

interface IUserListState {
    statusDd: Array<Status>;
    activePage: number;
    filterByApplicantName: string;
    filterByConductorName: string;
    itemPerPage: number;
    statusDdId: string;
    commentsDdId: string;
}

interface IUserListProps {
    userData: StoreState;
    updateUserListResetEditable: () => void;
    updateSingleUserFields: (prop: string, value: any) => void;
    updateUserList: (list: Array<SingleUser>) => void;
    updateSingleUserData: (data: SingleUser) => void;
    updateUserListFields: (value: any, prop: string, index: number) => void;
    putSingleUserIntoUserList: (value: {}, index: number) => void;
    updateCommonData: (value: any, prop: string) => void;
}

interface ISingleUserProps {
    userState: StoreState;
    match: any;
    history: any;
    updateSingleUserFields: (prop: string, value: any) => void;
    updateSingleUserData: (data: SingleUser) => void;
    putSingleUserIntoUserList: (value: {}, index: number) => void;
    updateCommonData: (value: any, prop: string) => void;

}

interface IReportProp {
    userData: StoreState;
}

interface IHighChartsProps {
    modules?: any[];
    container: string;
    pieData?: any;
    chartsOptions: {};
    pieColors?: Array<String>;
}