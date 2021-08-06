import AddProductForm2 from "./form-add2";

export default function Main(props) {
    console.log(props);
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* <AddProductForm2 {...props} />x` */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Share
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Export
                        </button>
                    </div>
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    >
                        <span data-feather="calendar" />
                        This week
                    </button>
                </div>
            </div>

            {/* <h2>Section title</h2> */}
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.data.map((item, index) => (

                            <tr key={index}>
                                <td>{index + 1}</td>

                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button className="btn btn-danger btn-sm"
                                    onClick={() => props.onRemove(item.id)}
                                >Xóa</button>
                                </td>
                                <td>
                                    <Link to></Link>
                                </td>
                            </tr>
                        )

                        )}


                    </tbody>
                </table>
            </div>
        </main>)
}