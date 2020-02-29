import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const JenisNutrisi = () => {
    return (
        <div>
            <Navbar title="Jenis Nutrisi" />
            <div className="custombg-about">
            </div>
            <div className="container my-5">
                <section>
                <div className=" text-center rounded p-5">
                        <p className="green-text" style={{fontSize:'30px'}}>Jenis Nutrisi Pada Tumbuhan Padi</p>
                            <hr className="yellow darken-2" style={{height:'3px', width:'150px'}}/>
                </div>

                    <div className="row">

                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card text-center text-white" style={{backgroundColor:'#45A71F'}}>
                                <div className="card-body">
                                    <p className="mt-3 px-3">
                                        <img src="../img/img/nitrogen.jpg" style={{height : '60px'}} className="w-40"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-2 py-2"><a className="text-white" href="#">Nitrogen (N)</a></h5>
                                    <p className="mb-4">Nitrogen termasuk ke dalam unsur hara makro yang memegang peran penting bagi pertumbuhan tanaman. 
                                    Unsur hara berupa nitrogen sangat diperlukan untuk pembentukan atau pertumbuhan bagian-bagian vegetatif tanaman 
                                    seperti daun, batang, dan akar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <p className="mt-3 px-3">
                                        <img src="../img/img/fosfor.jpg" style={{height : '60px'}} className="w-40"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-2 py-2"><a className="dark-grey-text" href="#">Fosfor (P)</a></h5>
                                    <p className="text-muted mb-4">Fosfor atau phospat merupakan nutrisi hidroponik yang diperlukan tanaman 
                                    dalam jumlah besar, termasuk ke dalam unsur hara makro. Jumlah fosfor pada tanaman lebih sedikit dibandingkan 
                                    nitrogen dan kalium. Fosfor dianggap sebagai kunci setiap tanamanan. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card text-center lighten-1 text-white" style={{backgroundColor:'#45A71F'}}>
                                <div className="card-body">
                                    <p className="mt-4 px-5">
                                        <img src="../img/img/OnGrow NitroGreen A.png" style={{height : '130px'}} className="w-100"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2"><a className="text-white" href="#">Digital Marketing</a></h5>
                                    <p className="mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="card text-center">
                                <div className="card-body">
                                    <p className="mt-4 px-5">
                                        <img src="../img/img/OnGrow NitroGreen A.png" style={{height : '130px'}} className="w-100"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2"><a className="dark-grey-text" href="#">Branding Package</a></h5>
                                    <p className="text-muted mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        <Footer/>
        </div>
    )
}
export default JenisNutrisi