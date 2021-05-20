import {useSelector, useDispatch} from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getAll, addUser} from '../../../Store/useSlice';
import React, { useEffect, useState } from 'react';

export default function Table(props:any)
{
    const [userList, setUser] = useState([]);
    const dispatch = useDispatch();
    useEffect( () => {
        const fetchUsertList = async () => {
            try{
                const actionResult = await dispatch(getAll());
                const currentUser = unwrapResult(actionResult);
                setUser(currentUser);
            }catch(error) {
                console.log(error);
            }
        };
        fetchUsertList();
    }, []);

    const Add = async (value: any) => {
        const action = addUser(value);
        dispatch(action);
    }

    const EditUser = async (value:any) => {
        console.log('object');
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
                                    <a className="btn btn-success btn-sm js-btn-add"
                                        type="button">
                                    <span>
                                        <i className="fa fa-plus mr-1"></i>
                                        Thêm mới người dùng
                                    </span>
                                    </a>
                                </div>
                            </div>
                                <table id="dt-basic-example" className="table table-bordered table-hover table-striped w-100">
                                    <thead className="bg-primary-600">
                                        <tr>
                                            <th>#</th>
                                            <th>Tên người dùng</th>
                                            <th>Email</th>
                                            <th>Phân Loại người dùng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {userList.map((value:any, key: number) => {
                                        return (
                                                <tbody> 
                                                    <td>{key+1}</td>   
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.role_id}</td>
                                                    <td className="text-center">
                                                        <button onClick = {EditUser} ><i className="fa fa-times"></i></button>
                                                        <button><i className="fa fa-edit"></i></button>
                                                    </td>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}