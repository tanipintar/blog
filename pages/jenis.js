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

                    <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6>
                    <h3 className="font-weight-bold text-center dark-grey-text pb-2">Our Services</h3>
                    <hr className="w-header my-4" />
                    <p className="lead text-center text-muted pt-2 mb-5">Join thousands of satisfied customers using our template
      globally.</p>

                    <div className="row">

                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card text-center text-white" style={{backgroundColor:'#45A71F'}}>
                                <div className="card-body">
                                    <p className="mt-4 px-5">
                                        <img src="../img/img/OnGrow NitroGreen A.png" style={{height : '130px'}} className="w-100"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2"><a className="text-white" href="#">Web Design</a></h5>
                                    <p className="mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <p className="mt-4 px-5">
                                        <img src="../img/img/OnGrow NitroGreen A.png" style={{height : '130px'}} className="w-100"></img>
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2"><a className="dark-grey-text" href="#">Mobile App</a></h5>
                                    <p className="text-muted mb-4">He polite be object change. Consider no overcame yourself sociable children.</p>
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