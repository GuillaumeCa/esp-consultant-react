import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Container from './components/Container';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Topbar />
      <div className="main-view">
        <Sidebar/><Container>{children}</Container>
      </div>
    </div>
  )
}
