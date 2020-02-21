import React from 'react'

const Loginview = () => (
    <div>
        <div className="py-3 container">
            <div className="row">
                <div className="col-lg-6 col-md-12 d-none d-lg-block">
                    <div className="align-content-center flex-center justify-content-center p-5">
                        <img className="w-75 z-depth-1 card" src="../img/img/mp01.jpg"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-9 p-5">
                    <form className="mt-5" action="#!">

                        <h3 className="text-center font-weight-bold mb-4 text-white">Login Admin</h3>

                        <div className="md-form mb-2 bg-white pb-1" style={{ borderRadius: '25px' }}>
                            <i className="fas fa-lock prefix ml-3 mt-2"></i>
                            <input type="email" id="inputValidationEx2" className="form-control form-control-lg border-0" />
                            <label htmlFor="inputValidationEx2" className="ml-5">Email</label>
                        </div>
                        <div className="md-form mb-2 bg-white pb-1" style={{ borderRadius: '25px' }}>
                        <i className="fas fa-envelope prefix ml-3 mt-2"></i>
                            <input type="password" id="inputValidationEx2" className="form-control form-control-lg border-0" />
                            <label htmlFor="inputValidationEx2" className="ml-5">Password</label>
                        </div>

                        <div className="flex-center">
                            <button className="btn success-color text-white col-md-6" type="submit" style={{ borderRadius: '25px' }}>Sign in</button>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
)
export default Loginview