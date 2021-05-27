import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getCategory } from '../../../Store/categorySlice';
import './style.css';

export default function Table(props: any)
{

    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const category: any = useSelector((state: RootState) => state.category);
console.log(category.list);
    useEffect(() => {
        const fetchDataCategory = async () => {
            await dispatch(getCategory());
        }
        fetchDataCategory();
    }, [])

    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(category.list.length / page) - 1;

    const display = category.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.category_name}</td>
                    <td className="text-revert">{value.category_description}</td>
                    <td>{value.category_keyword}</td>
                    <td>{value.category_status}</td>
                    <td className="text-center">
                        <Button className="btn btn-sm btn-danger btn-icon btn-inline-block mr-1 waves-effect waves-themed"><i className="fa fa-times"></i></Button>
                        <Button className="btn btn-sm btn-primary btn-icon btn-inline-block mr-1"><i className="fa fa-edit"></i></Button>
                    </td>
                </tbody>
            )
        });

    let jsxItems = [];
    for (let index = 1; index <= pageCount; index++) {
        if(index === activePage){
            jsxItems.push(<a className = "active" onClick = {() => changePage(index)}> {index} </a>);
        }else{
            jsxItems.push(<a onClick = {() => changePage(index)}> {index} </a>);
        }  
    }
    
    const changePage = (selected:number) => {
        setPageNumber(selected);
        setActivePage(selected);
    }

    return (
        <div className="container-fluid"> 
            <div className="row ">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="dt-basic-example" className="table table-bordered table-hover table-striped w-100">
                                    <thead className="bg-primary-600">
                                        <tr>
                                            <th>#</th>
                                            <th>Tên thể loại</th>
                                            <th>Mô tả</th>
                                            <th>Key thể loại</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    {display}
                                </table>
                            </div>
                            <div className="paginate">
                                <a>&laquo;</a>
                                {jsxItems}
                                <a>&raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}