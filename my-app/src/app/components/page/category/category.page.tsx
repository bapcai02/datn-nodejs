import React from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import Table from '../category/category.page.table';
import Search from '../category/category.page.search';

export default function Category(){
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