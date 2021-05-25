import { useSelector, useDispatch} from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RootState } from '../../../Store/store';
import { getTinhTp, createTinhTp, updateTinhTp, deleteTinhTp } from '../../../Store/tinhtpSlice';
import './tinhtp.css';

export default function Table(props:any)
{
    const dispatch = useDispatch();
    const [editModal, setEditModal] = useState(false);
    const [newModal, setNewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const [newTinh, setNewTinh] = useState<string>();
    const [newType, setNewType] = useState<string>();
    const [editTinh, setEditTinh] = useState<string>();
    const [editType, setEditType] = useState<string>();
    const [edit, setEdit] = useState<any>();
    const [deleteID, setDeleteID] = useState<number>(0);
    const data:any = useSelector((state: RootState) => state.tinhtp);

    //paginate
    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    const pageCount = Math.ceil(data.list.length / page) - 1;

    useEffect( () => {
        const fetchTinhTpList = async () => {
            try{
                await dispatch(getTinhTp());
            }catch(error) {
                console.log(error);
            }
        };
        fetchTinhTpList();
    }, []);

    const display = data.list
        .slice(pagevisit, page + pagevisit)
        .map((value:any, key: number) => {
            return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.name}</td>
                    <td>{value.type}</td>
                    <td className="text-center">
                        <Button onClick = {() => showDeleteModal(value.id)} className="btn btn-sm btn-danger btn-icon btn-inline-block mr-1 waves-effect waves-themed"><i className="fa fa-times"></i></Button>
                        <Button onClick = {() => showEditModal(value.id)} className="btn btn-sm btn-primary btn-icon btn-inline-block mr-1"><i className="fa fa-edit"></i></Button>
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

    // create tỉnh thành phố
    const newTinhTp = async () => {
        const data = {
            'name': newTinh,
            'type': newType
        };
        await dispatch(createTinhTp(data));
        newHandleClose();
    }

    // edit tinh thành phố
    const showEditModal = (id: number) => {
        const list: any = data.list;
        const tinhtp = list.find( (u: any) => u.id === id);
        setEdit(tinhtp);
        handleShow();
    }

    const EditTinhtp = async () => {
        const data = {
            "name": editTinh ? editTinh : edit.name,
            "type": editType ? editType : edit.type,
            "id": edit.id
        }
        await dispatch(updateTinhTp(data))
        handleClose();
    }

    //delete tỉnh thành phố
    const showDeleteModal = (id: number) => {
        setDeleteID(id)
        deleteHandleShow();
    }

    const DropTinhTp = async () => {
        const data:any = {
            "id": deleteID
        };
        await dispatch(deleteTinhTp(data));
        deleteHandleClose();
    }

    return (
        <div className="container-fluid"> 
            <Modal className="special_modal" show={editModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Tên thành phố *</Form.Label>
                            <Form.Control 
                                required 
                                onChange = {(e) => setEditTinh(e.currentTarget.value)}
                                defaultValue = {edit?.name}
                                type="text" 
                                placeholder="Nhập tỉnh thành phố" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Trực thuộc *</Form.Label>
                            <Form.Control 
                                required   
                                onChange = {(e) => setEditType(e.currentTarget.value)}
                                defaultValue = {edit?.type}
                                type="text" 
                                placeholder="Trực thuộc" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={EditTinhtp}>Save Changes</Button>
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
                        <Form.Group controlId="formName">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required  
                                onChange = {(e) => setNewTinh(e.currentTarget.value)}
                                type="text" 
                                placeholder="Tên tỉnh thành phố" 
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Trực thuộc *</Form.Label>
                            <Form.Control 
                                required
                                onChange = {(e) => setNewType(e.currentTarget.value)}
                                type="text" 
                                placeholder="Nhập trực thuộc" 
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={newHandleClose}>Close</Button>
                            <Button variant="primary" onClick={newTinhTp}>Save Changes</Button>
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
                    <Button variant="primary" onClick = {DropTinhTp}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row ">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <Button 
                                        onClick = {newHandleShow} 
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
                                            <th>Tên tỉnh thành</th>
                                            <th style={{ width:5 }}>Thuộc</th>
                                            <th style={{ width:5 }}>Thao tác</th>
                                        </tr>
                                    </thead>
                                    { display }                             
                                </table>
                                <div className="pagination">
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