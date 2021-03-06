import Table from './tinhtp.page.table';
import Search from './tinhtp.page.search';
import Header from '../index/header';
import SideBar from '../index/sidebar';

export default function TinhTP(props:any){
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