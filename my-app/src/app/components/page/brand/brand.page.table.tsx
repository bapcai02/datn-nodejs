import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getBrand } from '../../../Store/brandSlice';
import './style.css';

export default function Table(props: any)
{
    const dispatch = useDispatch();
    const [editModal, setEditModal] = useState(false);
    const [newModal, setNewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const brand: any = useSelector((state: RootState) => state.brand);

    useEffect(() => {
        const fetchDataBrand = async () => {
            await dispatch(getBrand());
        }
        fetchDataBrand();
    }, [])

    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(brand.list.length / page) - 1;

    const display = brand.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.brand_name}</td>
                    <td className="text-revert">{value.brand_description}</td>
                    <td>{value.brand_keyword}</td>
                    <td>{value.brand_status}</td>
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

     // on/off modal
     const handleClose = () => setEditModal(false);
     const handleShow = () => setEditModal(true);
 
     const newHandleClose = () => setNewModal(false);
     const newHandleShow = () => setNewModal(true);
 
     const deleteHandleClose = () => setDeleteModal(false);
     const deleteHandleShow = () => setDeleteModal(true);
     
    return (
        <div className="container-fluid"> 
            <Modal className="special_modal" show={editModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control 
                                required 
                                type="email" 
                                placeholder="Enter email" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required  
                                type="text" 
                                placeholder="Tên" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Save Changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>     
            </Modal>
         
            <Modal className="special_modal2" show={newModal} onHide={newHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control 
                                required 
                                type="email" 
                                placeholder="Enter email" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required  
                                type="text" 
                                placeholder="Tên" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password *</Form.Label>
                            <Form.Control 
                                required 
                                type="password" 
                                placeholder="Enter password" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" >Close</Button>
                            <Button variant="primary" >Save Changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal className="special_modal3" show={deleteModal} onHide={deleteHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa người dùng</Modal.Title>
                </Modal.Header>
                    <Modal.Body>bạn có muốn xóa người dùng !</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="row ">
                <div className="col-md-12">
                    <Button 
                        onClick = {newHandleShow} 
                        className="btn btn-success btn-sm js-btn-add"
                        type="button">
                        <span><i className="fa fa-plus mr-1"></i>Thêm mới thương hiệu</span>
                    </Button>
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