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
    const [editModal, setEditModal] = useState(false);
    const [editEmployer, setEditEmployer] = useState<any>();
    const [dataEdit, setDataEdit] = useState<any>([]);
    const category: any = useSelector((state: RootState) => state.category);

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
                        <Button  onClick = {() => showModalEdit(value.id)} className="btn btn-sm btn-primary btn-icon btn-inline-block mr-1"><i className="fa fa-edit"></i></Button>
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

    const handleClose = () => setEditModal(false);
    const handleShow = () => setEditModal(true);

    const showModalEdit = async (value:number) => {     
        const list: any = category.list;
        const data = list.find( (u: any) => u.id === value);
        setEditEmployer(data);
        handleShow();
    }
 console.log(dataEdit)
    return (
        <div className="container-fluid"> 

            <Modal className="special_modal" show={editModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required 
                                type="text" 
                                placeholder="Nhập tên thể loại" 
                                defaultValue = {editEmployer?.category_name}
                                onChange= {(e) => setDataEdit({
                                    ...dataEdit,
                                    name: e.currentTarget.value
                                })} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Mô tả *</Form.Label>
                            <Form.Control 
                                required   
                                type="text" 
                                placeholder="Mô tả" 
                                defaultValue = {editEmployer?.category_description}
                                onChange= {(e) => setDataEdit({
                                    ...dataEdit,
                                    desc: e.currentTarget.value
                                })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Key *</Form.Label>
                            <Form.Control 
                                required   
                                type="text" 
                                placeholder="Từ khóa" 
                                defaultValue = {editEmployer?.category_keyword}
                                onChange= {(e) => setDataEdit({
                                    ...dataEdit,
                                    keyword: e.currentTarget.value
                                })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Trạng thái *</Form.Label>
                            <Form.Control 
                                required   
                                type="text" 
                                placeholder="Trạng thái" 
                                defaultValue = {editEmployer?.category_status}
                                onChange= {(e) => setDataEdit({
                                    ...dataEdit,
                                    status: e.currentTarget.value
                                })}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Save Changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>     
            </Modal>

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