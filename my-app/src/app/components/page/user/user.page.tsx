import React from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import {useSelector, useDispatch} from 'react-redux';

User.propsTypes = {

};

export default function User(props:any){

    const dispatch = useDispatch();
    console.log(dispatch);

    return (
        <div>
            <SideBar/>
            <Header/>
            <div className="clearfix" />
            <div className="content-wrapper">
                <div className="col-md-12 ">
                    <form method="GET">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="example-date">Ngày Tạo</label>
                            <input className="form-control" type="date" name="date" />
                        </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="simpleinput">Tên Sản Phẩm</label>
                            <input type="text" name="product_name" className="form-control" placeholder="product name" />
                        </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="simpleinput">Thương Hiệu</label>
                            <select className="form-control" name="brand">                     
                            <option>Chọn Brand</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="example-select">Doanh Nghiệp</label>
                            <select className="form-control" id="example-select" name="category">
                            <option>Chọn Category</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-2">
                        <div className="d-flex flex-column align-items-start justify-content-end h-100">
                            <button className="btn btn-primary waves-effect waves-themed" type="submit">
                            <i className="fa fa-search" />
                            Search
                            </button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
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
                                                    <th>Giá</th>
                                                    <th>Giảm giá</th>
                                                    <th>Mô Tả</th>
                                                    <th>Mô Tả</th>
                                                    <th>Status</th>
                                                    <th>Ngày tạo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}