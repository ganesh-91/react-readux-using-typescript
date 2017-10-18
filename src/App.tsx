import * as React from 'react';
import './App.css';

import UserList from './components/userList';

import Sidebar from './components/sidebar';
import Header from './components/header';

class App extends React.Component<{}, {}> {
  constructor(prop: {}) {
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
              <UserList />
            </main>
          </div >
        </div >
      </div >
    );
  }
}

export default App;
