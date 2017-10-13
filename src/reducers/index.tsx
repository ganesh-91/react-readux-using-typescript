/// <reference path="../types/index.d.ts" />
import * as update from 'immutability-helper';

const userInitialState = {
    statusDd: [],
    commentsDd: [],
    singleUser: {
        id: 0,
        name: '',
        conductedBy: '',
        status: '',
        editable: false,
        comments: ''
    },
    userList: []
};

export function userReducer(state: StoreState, action: Actions): StoreState {
    let newState = state;

    if (typeof state === 'undefined') {
        newState = userInitialState;
    }

    switch (action.type) {

        case 'UPDATE_USER_LIST':
            newState = update(state, {
                userList: { $set: action.data.value }
            });
            break;

        case 'UPDATE_USER_LIST_FIELDS':
            newState = update(state, {
                userList: {
                    [action.data.index]: {
                        [action.data.prop]: { $set: action.data.value }
                    }
                }
            });
            break;

        case 'UPDATE_SINGLE_USER_FIELDS':
            newState = update(state, {
                singleUser: {
                    [action.data.prop]: { $set: action.data.value }
                }
            });
            break;

        case 'UPDATE_SINGLE_USER_DATA':
            newState = update(state, {
                singleUser: { $set: action.data.value }
            });
            break;

        case 'PUT_SINGLE_USER_INTO__USER_LIST':
            newState = update(state, {
                userList: {
                    [action.data.index]: { $set: action.data.value }
                }
            });
            break;

        case 'UPDATE_COMMON_DATA':
            newState = update(state, {
                [action.data.prop]: { $set: action.data.value }
            });
            break;
    }
    // console.log(newState);
    return newState;
}