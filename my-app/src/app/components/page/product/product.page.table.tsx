import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getProduct } from '../../../Store/productSlice';
import { getProductImage } from '../../../Store/productImageSlice';
import './style.css';

export default function Table(props: any)
{

    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const product: any = useSelector((state: RootState) => state.products);
    const productimage: any = useSelector((state: RootState) => state.productImage);

    useEffect(() => {
        const fetchDataProduct = async () => {
            await dispatch(getProduct());
        }
        
        const fetchDataImage = async () => {
            await dispatch(getProductImage());
        }

        fetchDataProduct();
        fetchDataImage();
    }, [])

    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(product.list.length / page) - 1;

    const display = product.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.product_name}</td>
                    <td>{value.category_name}</td>
                    <td>{value.brand_name}</td>
                    <td>{value.shop_name}</td>
                    <td>{1}</td>
                    <td>{value.product_price}</td>
                    <td>{value.sale}</td>
                    <td>{value.product_content}</td>
                    <td>{value.product_status}</td>
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
                                            <th>Tên sản phẩm</th>
                                            <th>Phân Loại</th>
                                            <th>Tên Thương Hiệu</th>
                                            <th>Tên shop</th>
                                            <th>Hình Ảnh</th>
                                            <th>Giáv(VND)</th>
                                            <th>Giảm giá (%)</th>
                                            <th>Mô Tả</th>
                                            <th>Status</th>
                                            <th>Ngày tạo</th>
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