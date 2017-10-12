import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from "react-redux";

import { store } from "../store";

import UserList from '../components/userList';
import SingleUserComponent from '../components/userList';

import App from '../App';

// class ContentViewWrapper extends React.Component<IContentViewWrapperProps, IContentViewWrapperState> {

export class AppRouter extends React.Component<{}, {}> {
    // _isLoggedIn(nextState, replace) {
    //     if (!sessionStorage.getItem("loggedIn")) {
    //         replace({
    //             pathname: "/"
    //         });
    //     }
    // }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={App} >
                        <Route path="user-list" component={UserList}  />
                        <Route path="single-user/:userId" component={SingleUserComponent}  />
                    </Route>
                </Router>
            </Provider >
        );
    }
}
