import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="sidebar bg-sidebar">
      <div className="rgba-black-strong h-100">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href='/Admin/'>
              <a className="nav-link">
                <i className="fas fa-fw fa-home"></i>
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link href='/Admin/konten' >
              <a className="nav-link">
                <i className="fas fa-fw fa-bell"></i>
                <span>Konten</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/Admin/contact'>
              <a className="nav-link">
                <i className="fas fa-fw fa-table"></i>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>

      </div>
      <style jsx>{`
            .bg-sidebar{
              background-image: url('../../img/img/4.jpg'); 
              background-repeat: no-repeat; 
              background-size: cover; 
              background-position: center center;
            }
          `}
      </style>
    </div>

  )
}
export default Sidebar