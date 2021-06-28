import React from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import Table from '../employer/employer.page.table';
import Search from '../employer/employer.page.search';

export default function Employer(){
    return (
        <div>
            <SideBar/>
            <Header/>
            <div className="clearfix" />
            <div className="content-wrapper">
                <Search/>
                <Table/>
            </div>
        </div>
    )
}