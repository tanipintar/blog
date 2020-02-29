import React from 'react'
import Navbar from '../components/nav'
import Pembibitanbenih from '../components/pembibitanbenih'
import Footer from '../components/footer'

export default function Budidaya(){
    return(
        <div>
            <Navbar title="Cara Budidaya Padi"/>
            <Pembibitanbenih/>
            <Footer/>
        </div>
    )
}