import React, { useEffect, useState } from 'react';
import Header from '../index/header';
import Search from './user.page.search';
import Table from './user.page.table';
import SideBar from '../index/sidebar';

export default function User(props:any) 
{
 return (
        <div>
            <SideBar />
            <Header />
            <div className="clearfix" />
                <div className="content-wrapper">
                    <Search />
                    <Table  />
                </div>
        </div>
    )
}