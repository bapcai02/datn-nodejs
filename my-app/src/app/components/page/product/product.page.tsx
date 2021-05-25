import React from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import Table from '../product/product.page.table';
import Search from '../product/product.page.search';

export default function Product(){
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