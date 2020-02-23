import React from 'react'
import Link from 'next/link'
// import Router from 'next/router'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark static-top success-color-dark">
        <Link href='/Admin/'>
          <a className="navbar-brand mr-1">Tani Pintar</a>
        </Link>

        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
          <i className="fas fa-bars"></i>
        </button>

        {/* <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Cari ..." aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form> */}

        <ul className="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <li className="nav-item dropdown no-arrow">
            <Link href='/'>
              <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw"></i>
                <span>Log Out</span>
              </a>
            </Link>
            {/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">Login</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                </div> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar