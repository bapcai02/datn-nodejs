
export default function Table(props: any)
{
    return (
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
    )
}