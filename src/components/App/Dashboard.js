// This is a layout component for our main app.

import React, { Component } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import MessagesList from './MessagesList';
import MessagePreview from './MessagePreview';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Sidebar />
          <MessagesList />
          <MessagePreview />
        </div>
      </div>
    )
  }
}

export default Dashboard;
