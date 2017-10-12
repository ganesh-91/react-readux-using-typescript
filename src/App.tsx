import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import UserList from './components/userList';
import SingleUserComponent from './components/singleUser';
import ReportComponent from './components/report';

import Sidebar from './components/sidebar';
import Header from './components/header';

//class ContentViewWrapper extends React.Component<IContentViewWrapperProps, IContentViewWrapperState> {

class App extends React.Component<{ location?: any }, {}> {
  constructor(prop: { location: any }) {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
              <Switch>
                <Route path='/user-list' component={UserList} />
                <Route path='/single-user/:userId' component={SingleUserComponent} />
                <Route path='/report' component={ReportComponent} />
              </Switch>
            </main>
          </div >
        </div >
      </div >
    );
  }
}

export default App;
