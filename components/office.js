import React, { useState } from 'react'

export default class Office extends React.Component{
    
    render(){
        // const {nama} = useState('')
        // const tes = () =>{
        //     console.log(nama)
        // }
        return(
            <div>
                  <div className="custombg-portofolio py-5">
                   
                    </div>
                    <div className="container">
                    <section className="my-md-5">
                        <div className=" text-center rounded p-5">
                        <p className="green-text" style={{fontSize:'30px'}}>Contact Us</p>
                            <hr className="yellow darken-2" style={{height:'3px', width:'75px'}}/>
    
                        <div className="mx-md-5" action="">
    
                            <div className="row col-md col-sm">
                            <div className="col-md-7 mb-4">
    
                                <div className="">
                                <div className="card-body">
    
                                    <div className="md-form md-outline mt-0">
                                    <input type="text"  className="form-control" />
                                    <label>Your Name</label>
                                    </div>
                                    <div className="md-form md-outline">
                                    <input type="text"  className="form-control"/>
                                    <label>Your Email Address</label>
                                    </div>
                                    <div className="md-form md-outline">
                                    <input type="text"  className="form-control"/>
                                    <label>Phone</label>
                                    </div>
                                    <div className="md-form md-outline">
                                    <textarea id="message" className="md-textarea form-control" rows="3"/>
                                    <label>Your Message</label>
                                    </div>
    
                                    <button type="button" className="btn btn-success btn-md btn-block ml-0 mb-0">Submit inquiry</button>
    
                                </div>
                                </div>
    
                            </div>
                            <div className="col-md-4 text-left offset-md-1 mt-md-4 mb-4 success-ic">
    
                                <h5 className="font-weight-bold">Address</h5>
                                <p className="mb-0">Desa Badean Kecamatan Blimbingsari</p>
                                <p className="mb-4 pb-2">Banyuwangi</p>
    
                                <h5 className="font-weight-bold">Phone</h5>
                                <p className="mb-4 pb-2">082 335 911 894</p>
    
                                <h5 className="font-weight-bold">Email</h5>
                                <p>Rinapermata16@gmail.com</p>
    
                            </div>
                            </div>
    
                        </div>
    
                        </div>
    
                    </section>
    
    
                    </div>
    
        
            </div>
        )
    }
}