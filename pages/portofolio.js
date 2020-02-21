import React from 'react'
import Navbar from '../components/nav'
import Gallery from '../components/gallery'
import Footer from '../components/footer'


const Portofolio = () =>(
    <div style={{backgroundColor : '#E9F0EC'}}>
        <Navbar title="Gallery Page"/>
        <div className="custombg-portofolio mb-5">
        </div>
        <Gallery/>
        <Footer/>
    </div>
)
export default Portofolio