import React from 'react'

const Footer = () => (
<footer className="page-footer font-small pt-4" style={{backgroundColor:'#45A71F'}}>
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mx-auto">
                <h2 className="font-weight-bold text-uppercase mt-3 mb-4 yellow-text">Tani Pintar</h2>
                    <p style={{fontSize:'18px'}}>
                    Tani Pintar merupakan start up yang didirikan oleh mahasiswa STIKOM PGRI Banyuwangi
                                    pada tahun 2019. Start up ini bergerak di bidang konten, video, animasi, majalah dan website.
                    </p>
            </div>
            <hr className="clearfix w-100 d-md-none"/>
            <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Tautan Langsung</h5>
                <ul className="list-unstyled" style={{fontSize:'15px'}}>
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">About</a>
                    </li>
                    <li>
                        <a href="#!">Budidaya Padi</a>
                    </li>
                    <li>
                        <a href="#!">Gallery</a>
                    </li>
                    <li>
                        <a href="#!">Contact</a>
                    </li>
                </ul>

            </div>

            <hr className="clearfix w-100 d-md-none"/>
            <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Kontak info</h5>
                <ul className="list-unstyled" style={{fontSize:'15px'}}>
                    <li>
                        <a href="#!">Stikom PGRI Banyuwangi</a>
                    </li>
                    <li>
                        <a href="#!"> Team Work Tani Pintar </a>
                    </li>
                    <li>
                        <a href="#!">Phone : +6282 335 911 894</a>
                    </li>
                    <li>
                        <a href="#!">Email : BanyuOsing11@gmail.com</a>
                    </li>
                </ul>

            </div>
            <hr className="clearfix w-100 d-md-none"/>
        
        </div>
    </div>
        <div className="footer-copyright text-center py-3">© 2020 Tani Pintar.
        <a href="https://mdbootstrap.com/education/bootstrap/">  All rights reserved | Design by Rina Permata</a>
        </div>

</footer>
)
export default Footer