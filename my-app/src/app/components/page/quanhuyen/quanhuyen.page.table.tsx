import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getQuanHuyen } from '../../../Store/quanhuyenSlice';
import { getTinhTp } from '../../../Store/tinhtpSlice';
import './quanhuyen.css';

export default function Table()
{
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const quanhuyen:any = useSelector((state: RootState) => state?.quanhuyen)
    const tinhtp:any = useSelector((state: RootState) => state?.tinhtp)

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getQuanHuyen());
            await dispatch(getTinhTp());
        }

        fetchData()
    }, [])

    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(quanhuyen.list.length / page) - 1;

    const display = quanhuyen.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.name}</td>
                    <td>{() => { checkTinhTp(value.matp)}}</td>
                    <td>{value.type}</td>
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

    const checkTinhTp = (matp:number) => {
        console.log(matp);
        const data = tinhtp.list.filter((obj: any) => {
            return obj.id == matp;
        });
        return data[0];
    }
    
    return (
    <div className="container-fluid"> 
        <div className="row ">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                    <div className="row mb-3">
                        <div className="col-12">
                            <Button 
                                className="btn btn-success btn-sm js-btn-add"
                                type="button">
                                <span><i className="fa fa-plus mr-1"></i>Thêm mới</span>
                            </Button>
                        </div>
                    </div>
                        <table id="dt-basic-example" className="table table-bordered table-hover table-striped w-100">
                            <thead className="bg-primary-600">
                                <tr>
                                    <th style={{ width:2 }}>#</th>
                                    <th>Quận Huyện</th>
                                    <th>Tỉnh Thành</th>
                                    <th style={{ width:5 }}>Thuộc</th>
                                    <th style={{ width:5 }}>Thao tác</th>
                                </tr>
                            </thead>
                            {display}
                        </table>
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
</div>
    )
}