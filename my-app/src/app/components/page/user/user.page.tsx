import React, { useEffect } from 'react';
import Header from '../index/header';
import SideBar from '../index/sidebar';
import {useSelector, useDispatch} from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getAll, addUser} from '../../../Store/useSlice';

export default function User(props:any){
    const state = useSelector(state => state.users);
    console.log(state);
    const dispatch = useDispatch();
    useEffect( () => {
        const fetchUsertList = async () => {
            try{
                const actionResult = await dispatch(getAll());
                const currentUser = unwrapResult(actionResult);
                console.log(currentUser);
            }catch(error) {
                console.log(error);
            }
        };
        const AddUser = async () => {
            try{
                const action = addUser('123');
                dispatch(action);
            }catch(error){
                console.log(error);
            }
        }
        fetchUsertList();
        AddUser();
    }, []);

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