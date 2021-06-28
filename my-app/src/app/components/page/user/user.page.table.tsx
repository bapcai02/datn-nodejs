import { useSelector, useDispatch} from 'react-redux';
import { getAll, createUser, deleteUser, updateUser} from '../../../Store/useSlice';
import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RootState } from '../../../Store/store';
import './style.css';

export default function Table(props:any)
{
    const [editModal, setEditModal] = useState(false);
    const [newModal, setNewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editUser, setEditUser] = useState<any>();
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [newEmail, setNewEmail] = useState<string>();
    const [newName, setNewName] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [newRole, setNewRole] = useState<string>();
    const [userId, setUserId] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const dispatch = useDispatch();
    const data:any = useSelector((state: RootState) => state?.users);

    //paginate
    const page = 10;
    const pagevisit = pageNumber ? pageNumber * page : 0;
    let pageCount = Math.ceil(data.list.length / page)-1;
     const display = data.list
         .slice(pagevisit, page + pagevisit)
         .map((value:any, key: number) => {
             return (
                <tbody> 
                    <td>{key+1}</td>   
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.role_id}</td>
                    <td className="text-center">
                        <Button  onClick = {() => {deleteHandleShow();setUserId(value.id)}}  className="btn btn-sm btn-danger btn-icon btn-inline-block mr-1 waves-effect waves-themed"><i className="fa fa-times"></i></Button>
                        <Button  onClick = {() => showModalEditUser(value.id)}  className="btn btn-sm btn-primary btn-icon btn-inline-block mr-1"><i className="fa fa-edit"></i></Button>
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

    // useEffect
    useEffect( () => {
        const fetchUsertList = async () => {
            try{
                await dispatch(getAll());
            }catch(error) {
                console.log(error);
            }
        };
        fetchUsertList();
    }, []);

    // on/off modal
    const handleClose = () => setEditModal(false);
    const handleShow = () => setEditModal(true);

    const newHandleClose = () => setNewModal(false);
    const newHandleShow = () => setNewModal(true);

    const deleteHandleClose = () => setDeleteModal(false);
    const deleteHandleShow = () => setDeleteModal(true);

    // edit user
    const showModalEditUser = async (value:number) => {     
        const userList: any = data.list;
        const user = userList.find( (u: any) => u.id === value);
        setEditUser(user);
        handleShow();
    }
 
    const EditUser = async (event:any) => {
        event.preventDefault();
        const data = {
            "id": editUser.id,
            "name": name ? name : editUser.name,
            "email": email ? email: editUser.email
        }
        await dispatch(updateUser(data));
        handleClose();
    }

    // delete user 
    const DropUser = async (id:number) => {
        const data = {
            "id": id
        };
        deleteHandleClose();
        await dispatch(deleteUser(data));
        
    }

    //new user
    const NewUser = async (event:any) => {
        event.preventDefault();
        const data = {
            "email": newEmail,
            "name": newName,
            "password": newPassword,
            "role_id" : newRole
        };
        await dispatch(createUser(data));
        newHandleClose();
    }

    return (
        <div className="container-fluid"> 
            
            <Modal className="special_modal" show={editModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => EditUser(e)}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control 
                                required 
                                onChange= {(e) => setEmail(e.currentTarget.value)} 
                                defaultValue = { editUser?.email }  
                                type="email" 
                                placeholder="Enter email" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required  
                                onChange= {(e) => setName(e.currentTarget.value)} 
                                defaultValue={ editUser?.name }  
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
                    <Form onSubmit={(e) => NewUser(e)}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control 
                                required 
                                onChange= {(e) => setNewEmail(e.currentTarget.value)}  
                                type="email" 
                                placeholder="Enter email" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Tên *</Form.Label>
                            <Form.Control 
                                required  
                                onChange= {(e) => setNewName(e.currentTarget.value)} 
                                type="text" 
                                placeholder="Tên" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password *</Form.Label>
                            <Form.Control 
                                required 
                                onChange= {(e) => setNewPassword(e.currentTarget.value)}  
                                type="password" 
                                placeholder="Enter password" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formRole">
                            <Form.Label>Role *</Form.Label>
                            <Form.Control as="select" required onChange= {(e) => setNewRole(e.currentTarget.value)}  >
                                <option value = '0'>Chọn quyền</option>
                                <option value = '0'>User</option>
                                <option value = '1'>Customer</option>
                                <option value = '2'>Admin</option>
                            </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={newHandleClose}>Close</Button>
                            <Button variant="primary" type="submit">Save Changes</Button>
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
                    <Button variant="primary" onClick={() => DropUser(userId)}>
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
                                            <span><i className="fa fa-plus mr-1"></i>Thêm mới người dùng</span>
                                        </Button>
                                    </div>
                                </div>
                                <table id="dt-basic-example" className="table table-bordered table-hover table-striped w-100">
                                    <thead className="bg-primary-600">
                                        <tr>
                                            <th>#</th>
                                            <th>Tên người dùng</th>
                                            <th>Email</th>
                                            <th>Phân loại người dùng</th>
                                            <th>Thao tác</th>
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