export default function Home() {
    return (
        <main className="p-4 pb-0" style={{ marginLeft: '200px' }}>
            <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-speedometer2 me-2" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                    <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                </svg>
                <h1 className="h1 m-0">Dashboard</h1>
            </div>
            <div className="row mt-4 mx-3">
                <div className="col-3">
                    <div className="card text-bg-primary text-dark shadow  mb-4" style={{ width: '100%' }}>
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="d-flex text-bg-primary flex-column">
                                <span className="fs-2 fw-bold ">69</span>
                                <span className="fs-4">Anggota</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-people text-bg-primary" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                            </svg>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small stretched-link text-bg-primary" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card  text-bg-primary text-dark shadow mb-4">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="d-flex text-bg-primary flex-column">
                                <span className="fs-2 fw-bold ">267</span>
                                <span className="fs-4">Buku</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-book text-bg-primary" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small stretched-link text-bg-primary" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-primary text-dark shadow  mb-4">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="d-flex text-bg-primary flex-column">
                                <span className="fs-2 fw-bold ">26</span>
                                <span className="fs-4">Peminjaman</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-cloud-arrow-up text-bg-primary" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small stretched-link text-bg-primary" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-primary text-dark shadow  mb-4">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="d-flex text-bg-primary flex-column">
                                <span className="fs-2 fw-bold ">89</span>
                                <span className="fs-4">Pengembalian</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-cloud-arrow-down text-bg-primary" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small stretched-link text-bg-primary" href="#">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col-6">
                    <div className="card shadow my-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Daftar Anggota</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>NISN</th>
                                            <th>Nama</th>
                                            <th>Tanggal Lahir</th>
                                            <th>Jenis Kelamin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2209999</td>
                                            <td>Mohammad Yusuf</td>
                                            <td>20-09-2003</td>
                                            <td>Laki-laki</td>
                                        </tr>
                                        <tr>
                                            <td>2209034</td>
                                            <td>Farhan Albustomi</td>
                                            <td>23-02-2009</td>
                                            <td>Laki-laki</td>
                                        </tr>
                                        <tr>
                                            <td>2209018</td>
                                            <td>Robiatus Syarifa</td>
                                            <td>19-12-2019</td>
                                            <td>Perempuan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card shadow my-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Daftar Buku</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>NISN</th>
                                            <th>Nama</th>
                                            <th>Tanggal Lahir</th>
                                            <th>Jenis Kelamin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2209999</td>
                                            <td>Mohammad Yusuf</td>
                                            <td>20-09-2003</td>
                                            <td>Laki-laki</td>
                                        </tr>
                                        <tr>
                                            <td>2209034</td>
                                            <td>Farhan Albustomi</td>
                                            <td>23-02-2009</td>
                                            <td>Laki-laki</td>
                                        </tr>
                                        <tr>
                                            <td>2209018</td>
                                            <td>Robiatus Syarifa</td>
                                            <td>19-12-2019</td>
                                            <td>Perempuan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}