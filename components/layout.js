import React from 'react'
import Navbar from './nav'

const Layout = ({page}) =>{
    return(
        <div>
            <Navbar title={page}/>
        
        </div>
    )
}
export default Layout