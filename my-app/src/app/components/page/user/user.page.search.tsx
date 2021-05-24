import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUser } from '../../../Store/useSlice';

export default function Search(props:any)
{
    const dispatch = useDispatch();
    const [user, setUser] = useState<string>();
    const [email, setEmail] = useState<string>();

    const Search = async (event:any) => {
        event.preventDefault();
        const data = {
            "name": user ? user : "",
            "email" : email ? email : ""
        }
        await dispatch(searchUser(data));
    }

    return (
        <div className="col-md-12 ">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="simpleinput">Tên User</label>
                            <input onChange = {(e) => setUser(e.currentTarget.value)} type="text" name="product_name" className="form-control" placeholder="Tên user" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 mb-2">
                        <div className="form-group">
                            <label className="form-label" htmlFor="simpleinput">Email</label>
                            <input onChange = {(e) => setEmail(e.currentTarget.value)} type="text" name="email" className="form-control" placeholder="địa chỉ email" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-10 mb-4">
                        <div className="d-flex flex-column align-items-start justify-content-end h-100">
                            <button onClick = {(e) => Search(e)} className="btn btn-primary waves-effect waves-themed" type="submit">
                            <i className="fa fa-search" />
                            Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}