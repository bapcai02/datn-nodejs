import React from 'react';
import Header from './header';
import SideBar from './sidebar';
import Home from './home';

function Index() {
  return (
    <div>
        <div id="wrapper">
            <SideBar/>
            <Header/>
            <div className="clearfix" />
            <Home/>
            <footer className="footer">
                <div className="container">
                <div className="text-center">
                    Copyright © 2018 Dashtreme Admin
                </div>
                </div>
            </footer>
        </div>
    </div>
  );
}

export default Index;
