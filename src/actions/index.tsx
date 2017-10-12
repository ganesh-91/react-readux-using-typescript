// import * as constants from '../constants'
/// <reference path='../types/index.d.ts' />

export interface UpdateUserList {
    type: string;
    data: {
        value: SingleUser[];
    };
}

export interface UpdateUserListFields {
    type: string;
    data: {
        value: any;
        index: number;
        prop: string;
    };
}

export interface UpdateSingleUserData {
    type: string;
    data: {
        value: SingleUser;
    };
}

export interface UpdateSingleUserFields {
    type: string;
    data: {
        value: any;
        prop: string;
    };
}

export interface PutSingleUserIntoUserList {
    type: string;
    data: {
        value: {};
        index: number;
    };
}

export interface UpdateCommonData {
    type: string;
    data: {
        value: {};
        prop: string;
    };
}

export function updateUserList(list: SingleUser[]): UpdateUserList {
    return {
        type: 'UPDATE_USER_LIST',
        data: {
            value: list
        }
    };
}

export function updateUserListFields(data: { value: any, prop: string, index: number }): UpdateUserListFields {
    return {
        type: 'UPDATE_USER_LIST_FIELDS',
        data: {
            value: data.value,
            index: data.index,
            prop: data.prop
        }
    };
}

export function updateSingleUserData(value: SingleUser): UpdateSingleUserData {
    return {
        type: 'UPDATE_SINGLE_USER_DATA',
        data: {
            value: value
        }
    };
}

export function updateSingleUserFields(data: { value: any, prop: string }): UpdateSingleUserFields {
    return {
        type: 'UPDATE_SINGLE_USER_FIELDS',
        data: {
            value: data.value,
            prop: data.prop
        }
    };
}

export function putSingleUserIntoUserList(data: { value: {}, index: number }): PutSingleUserIntoUserList {
    return {
        type: 'PUT_SINGLE_USER_INTO__USER_LIST',
        data: {
            value: data.value,
            index: data.index
        }
    };
}

export function updateCommonData(data: { value: {}, prop: string }): UpdateCommonData {
    return {
        type: 'UPDATE_COMMON_DATA',
        data: {
            value: data.value,
            prop: data.prop
        }
    };
}