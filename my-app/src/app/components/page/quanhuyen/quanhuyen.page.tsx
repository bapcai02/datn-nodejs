import Table from './quanhuyen.page.table';
import Search from './quanhuyen.page.search';
import Header from '../index/header';
import SideBar from '../index/sidebar';

export default function QuanHuyen(props:any){
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