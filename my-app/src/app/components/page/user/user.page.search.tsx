
export default function Search()
{
    return (
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
    )
}