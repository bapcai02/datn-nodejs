import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getEmployer } from '../../../Store/employerSlice';

export default function Table(props: any)
{

    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const employer: any = useSelector((state: RootState) => state.employer);

    useEffect(() => {
        const fetchDataProduct = async () => {
            await dispatch(getEmployer());
        }
        fetchDataProduct();
    }, []);

    console.log(employer);

    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(employer.list.length / page) - 1;

    const display = employer.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.name}</td>
                    <td>{value.phone}</td>
                    <td>{value.date}</td>
                    <td><img src={value.image} /></td>
                    <td>{value.address}</td>
                    <td>{value.created_at}</td>
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
                                            <th>Tên khách hàng</th>
                                            <th>Số điện thoại</th>
                                            <th>Ngày, tháng, năm sinh</th>
                                            <th>Hình ảnh</th>
                                            <th>Địa chỉ</th>
                                            <th>Ngày tham gia</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {display}
                                </table>
                            </div>
                            <div className="paginate">
                                <a>&laquo;</a>
                            
                                <a>&raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}