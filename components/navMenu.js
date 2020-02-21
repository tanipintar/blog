import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



const MenuNav = () =>{
    const route = useRouter();
    const [ dropdown , setDropdown] = useState(false);
    const set=()=>{
      setDropdown(dropdown = true);
      console.log(dropdown)
    }
    return(
        <ul className="navbar-nav ml-auto">
        <li className={route.pathname == '/' ? 'nav-item activeNav' : 'nav-item'}>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className={route.pathname == '/about' ? 'nav-item activeNav' : 'nav-item'}>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        {/* <li className={route.pathname == '/Budidaya' ? 'nav-item activeNav dropdowns' : 'nav-item dropdowns'}>
          <Link href="/Budidaya">
            <a className="nav-link">Budidaya Padi</a>
          </Link>
        </li> */}
        <li className={route.pathname == '/Budidaya' ? 'nav-item activeNav dropdowns' : 'nav-item dropdowns'}>
          <a className="nav-link dropdown-toggle">Budidaya Padi</a>
          <div className="dropdown-content" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/Budidaya">
              <a className="dropdown-item">Pengolahan Lahan</a>
            </Link>
            <Link href="/Budidaya">
              <a className="dropdown-item">Pembibitan Benih</a>
            </Link>
            <Link href="/Budidaya">
              <a className="dropdown-item">Fase-Fase Petumbuhan</a>
            </Link>
          </div>
        </li>
        <li className={route.pathname == '/portofolio' ? 'nav-item activeNav' : 'nav-item'}>
          <Link href="/portofolio">
            <a className="nav-link">Gallery</a>
          </Link>
        </li>
        <li className={route.pathname == '/contact' ? 'nav-item activeNav' : 'nav-item'}>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
        <li className={route.pathname == '/LoginPage' ? 'nav-item activeNav' : 'nav-item'}>
          <Link href="/Login">
            <a className="nav-link">Admin</a>
          </Link>
        </li>
      </ul>
    )
}
export default MenuNav