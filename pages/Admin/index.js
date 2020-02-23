import React from 'react'
import LayoutAdmin from '../../components/Admin_component/layout'
//import firebase from '../lib/db'


class Home extends React.Component{
    render(){
        return (
            <LayoutAdmin dashboard='Dashboard'>
                <div className="row">
                    <div className="col-md-5 col-sm-2 mb-5">
                        <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                            <i className="fas fa-fw fa-shopping-cart"></i>
                            </div>
                            <div className="mr-5">Selamat Datang Admin Cantik!</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                            </span>
                        </a>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        )
    }
}

export default Home