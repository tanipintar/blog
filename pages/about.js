import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Team from '../components/team'

const About = () => (
    <div>
        <div>
        <Navbar title="About"/>
            <div className="custombg-about">
            </div>
        </div>
        <div className="container py-5">
            <section>
                <div className="row col-md col-sm">
                    <div className="col-lg-5 mb-1 ">
                        <div className="flex-center overlay mb-4">
                            <div className="border-right border-success py-5 pr-2">
                                <img className="img-fluid " src="./img/img/sri.png" alt="Sample image" />
                            </div>
                        </div>
                    </div>
                <div className="col-lg-7">
                   <div className="text-center col-md-4">
                    <p className="green-text" style={{fontSize:'30px'}}>About Us</p>
                        <hr className="yellow darken-2" style={{height:'3px', width:'75px'}}/>
                   </div>
                        <div className="py-5">
                            <p className="text-success" style={{fontSize:'20px'}}>Apa yang kita lakukan ?</p>
                            <p className="text-success" style={{fontSize:'24px'}}>
                                <strong>MENGUBAH MINDSET PETANI UNTUK MEMBANGUN PERTANIAN YANG LEBIH BAIK </strong>
                            </p>
                            <p className="text-muted mb-4">Potensi petani yang meningkat dalam kemajuan teknologi menjadikan modal
                            dasar perkembangan dalam sektor pertanian yang akan datang.</p>

                            <h3 className="text-success font-weight-bold" style={{fontSize:'25px'}}>
                                <strong> <b>SMART FARMING SOLUSINYA!</b> </strong>
                            </h3>
                            <p className="text-muted mb-4">Smart farming (pertanian pintar) yaitu penggunaan platform yang 
                            dikonektivitaskan dengan perangkat teknologi contoh : tablet dan 
                            handphone dalam pengumpulkan informasi yang diperoleh dari lapang dari 
                            perangkat yang ditanamkan pada lahan pertanian.</p>
                                                        
                        </div>
                </div>

                </div>

            </section>

            </div>
            <Team/>
        <Footer/>
    </div>
)
export default About