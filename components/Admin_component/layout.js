import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Sidebar from './sidebar'
const LayoutAdmin = ({children, dashboard=''}) => {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />

                <title>Tani Pintar - Nutrisi</title>
                {/* <link href="../admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" /> */}
                <link href="../admin/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet" />
                <link href="../admin/css/sb-admin.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="../css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../css/mdb.min.css"/>
                
                <link rel="stylesheet" href="../css/style.css"/>

                {/* <script src="../admin/vendor/jquery/jquery.min.js"></script>
                <script src="../admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="../admin/vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="../admin/vendor/chart.js/Chart.min.js"></script>
                <script src="../admin/vendor/datatables/jquery.dataTables.js"></script>
                <script src="../admin/vendor/datatables/dataTables.bootstrap4.js"></script>

                <script src="../admin/js/sb-admin.min.js"></script>

                <script src="../admin/js/demo/datatables-demo.js"></script>
                <script src="../admin/js/demo/chart-area-demo.js"></script> */}


            </Head>
            <div id="page-top">

                <Navbar />
                <div id="wrapper">

                    <Sidebar />
                    <div id="content-wrapper">

                        <div className="container-fluid"> 
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">{dashboard}</li>
                            </ol>
                            {children}
                        </div>

                    </div>

                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Keluar</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default LayoutAdmin