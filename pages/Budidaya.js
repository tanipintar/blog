import React from 'react'
import Navbar from '../components/nav'
import Magazine from '../components/magazine'
import Footer from '../components/footer'

export default function Budidaya(){
    return(
        <div>
            <Navbar title="Cara Budidaya Padi"/>
            <Magazine/>
            <Footer/>
        </div>
    )
}