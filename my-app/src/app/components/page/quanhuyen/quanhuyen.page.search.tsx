import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Search(props:any){

    const [name, setName] = useState<string>()
    const dispatch = useDispatch();

    const search = async (event:any) => {
        event.preventDefault();
        const data = {
            "name": name ? name : "",
        }
        console.log(data)
    }

    return (
        <div className="col-md-12 ">
            <div className="row">
                <div className="col-md-4 col-xs-12 mb-2">
                    <div className="form-group">
                        <label className="form-label" htmlFor="simpleinput">Tên Tỉnh Thành</label>
                        <input onChange = {(e) => setName(e.currentTarget.value)}  type="text" name="product_name" className="form-control" placeholder="Tên tỉnh thành" />
                    </div>
                </div>
                <div className="col-md-4 col-xs-10 mb-4">
                    <div className="d-flex flex-column align-items-start justify-content-end h-100">
                        <button onClick = {search} className="btn btn-primary waves-effect waves-themed">
                        <i className="fa fa-search"/> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}