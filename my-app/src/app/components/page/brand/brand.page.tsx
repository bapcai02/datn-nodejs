import React from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import Table from '../brand/brand.page.table';
import Search from '../brand/brand.page.search';

export default function Brand(){
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