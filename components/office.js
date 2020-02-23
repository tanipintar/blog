import React, { useState } from 'react'
import firebase from '../lib/koneksi'

const addContact = async(nama,email,hp,pesan)=>{
    const dbFire = firebase;
    await dbFire.firestore().collection("Contact").add({
        nama,email,hp,pesan,tanggal: new Date().toLocaleString()
    }).then(res=>{
        console.log(res);
        alert('Contact Berhasil di Kirim dengan nama '+nama);
        window.location.reload(true);
    })
}

export default function Office(){
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setTelepon] = useState('');
    const [pesan, setPesan] = useState('');
    
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
                                <input type="text"  className="form-control" 
                                value={nama} onChange={(e)=> setNama(e.target.value)}/>
                                {nama ? '' : <label>Your Name</label>}
                                </div>
                                <div className="md-form md-outline">
                                <input type="text"  className="form-control"
                                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                {email ? '' : <label>Your Email Address</label>}
                                </div>
                                <div className="md-form md-outline">
                                <input type="text"  className="form-control"
                                value={nohp} onChange={(e)=> setTelepon(e.target.value)}/>
                                {nohp ? '' : <label>Phone</label>}
                                </div>
                                <div className="md-form md-outline">
                                <textarea id="message" className="md-textarea form-control" rows="3"
                                value={pesan} onChange={(e)=> setPesan(e.target.value)}/>
                                {pesan ? '' : <label>Your Message</label>}
                                </div>

                                <button type="button" className="btn btn-success btn-md btn-block ml-0 mb-0"
                                onClick={()=> addContact(nama,email,nohp,pesan)}>Simpan</button>

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