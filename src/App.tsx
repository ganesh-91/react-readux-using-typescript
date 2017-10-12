import * as React from 'react';
import './App.css';

import ContentViewWrapper from './components/contentViewWrapper';
import Sidebar from './components/sidebar';
import Header from './components/header';

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <ContentViewWrapper />
          </div >
        </div >
      </div >
    );
  }
}

export default App;
