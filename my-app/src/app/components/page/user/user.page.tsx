
import Header from '../index/header';
import SideBar from '../index/sidebar';
import Search from './user.page.search';
import Table from './user.page.table';

export default function User(props:any) 
{
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