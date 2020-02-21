import React from 'react'

const Team = () => (
    <div style={{backgroundColor : '#E9F0EC'}}>
        <div className="container p-3">
        <section className="text-center dark-grey-text">
            <h3 className="font-weight-bold text-center dark-grey-text pb-2">Executive Team</h3>
            <hr className="w-header my-4"/>
            <div className="row">
            
            <div className="col-md-3 mb-4">
                <div className="z-depth-1 mb-4">
                <img src="./img/img/2a.png" className="img-fluid mx-auto" alt="smaple image"/>
                </div>
                <h6 className="font-weight-bold">Meriatu Istiqomah</h6>
                <small className="text-muted">Jurnalistik</small>
            </div>

            <div className="col-md-3 mb-4">
                <div className="z-depth-1 mb-4">
                <img src="./img/img/2d.png" className="img-fluid mx-auto" alt="smaple image"/>
                </div>
                <h6 className="font-weight-bold">Siti Nur Aini</h6>
                <small className="text-muted">Animator</small>
            </div>

            <div className="col-md-3 mb-4">
                <div className="z-depth-1 mb-4">
                <img src="./img/img/2c.png" className="img-fluid mx-auto" alt="smaple image"/>
                </div>
                <h6 className="font-weight-bold">Rina Permata Sari</h6>
                <small className="text-muted">Design Website</small>
            </div>

            <div className="col-md-3 mb-4">
                <div className=" z-depth-1 mb-4">
                <img src="./img/img/2b.png" className="img-fluid mx-auto" alt="smaple image"/>
                </div>
                <h6 className="font-weight-bold">Sri Wulandari</h6>
                <small className="text-muted">Design Majalah</small>
            </div>

            </div>
        </section>
        </div>
    </div>

)
export default Team