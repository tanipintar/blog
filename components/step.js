import React from 'react'

export default function Step(){
    return(
        <div className="py-4 text-center">
        <p className="green-text" style={{fontSize:'35px'}}>Proses Budidaya Padi</p>
        <hr className="my-3  yellow darken-2" style={{height:'3px', width:'150px'}}/>
          <div className="container">
            <div className="row col-md">
              <div className="col-md-4 p-3">

              <div className="card-body mb-1">
                    <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}> 1</span>
                    </div>
                    <div className="col-md">
                        <img className="avatar-2 position-relative" src="./img/img/1.png"
                          alt="Generic placeholder image" style={{width:'80px'}}/>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <h4>Pengolahan Tanah</h4>
                    </div>
                    <div className="media d-block d-md-flex pt-2">
                      <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Tanaman tidak bisa hidup tanpa adanya media tanam. Tanah menjadi salah satu media tanam yang harus diolah 
                        terlebih dahulu agar tanah tersebut subur dan mampu menjadi media tanam yang baik untuk tanaman.</p>
                      </div>
                    </div>
                  </div>
            
                <div className="card-body mb-1">
                    <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}> 4</span>
                    </div>
                    <div className="col-md">
                        <img className="avatar-2 position-relative" src="./img/img/4.png"
                          alt="Generic placeholder image"  style={{width:'80px'}}/>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <h4>Pengendalian Hama</h4>
                    </div>
                    <div className="media d-block d-md-flex pt-2">
                      <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Upaya mengendalikan berbagai unsur
                        -unsur ekosistem padi sawah, hal ini  dilakukan lingkungan secara alami yang akan memberi dukungan terhadap 
                        tumbuhnya tanaman dan keberadaan keanekaragaman hayati lainya.</p>
                      </div>
                    </div>
                  </div>
            </div>

            
            <div className="col-md-4 p-3">
              <div className="card-body mb-1">
                  <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}> 2</span>
                  </div>
                  <div className="col-md">
                      <img className="avatar-2 position-relative " src="./img/img/2.png"
                      alt="Generic placeholder image"  style={{width:'80px'}}/>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <h4>Persemaian Benih Padi</h4>
                  </div>
                  <div className="media d-block d-md-flex pt-2">
                    <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Teknik penyemain padi yang 
                      benar akan menunjang pertumbuhan tanaman padi, apabila teknik penyemain padi tidak dilakukan 
                      dengan sesuai prosedur penyemain maka pertumbuhan padi 
                      menjadi tidak baik.</p>
                    </div>
                  </div>
                </div>

                <div className="card-body mb-1">
                  <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}> 5</span>
                  </div>
                  <div className="col-md">
                      <img className="avatar-2 position-relative" src="./img/img/5.png"
                      alt="Generic placeholder image" style={{width:'80px'}}/>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <h4>Penyiangan</h4>
                  </div>
                  <div className="media d-block d-md-flex pt-2">
                    <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Pembersihan area persawahan dari gulma
                      dan rumput liar yang mengganggu,merupakan tahap penting yang harus dilakukan dalam cara menanam 
                      padi yang baik dan benar. Penyiangan dapat dimulai pada saat umur masa tanam sudah menginjak usia 3 minggu.</p>
                    </div>
                  </div>
                </div>
            </div>
        
            <div className="col-md-4 p-3">
              <div className="card-body mb-1">
                  <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}>3</span>
                  </div>
                  <div className="col-md">
                      <img className="avatar-2 position-relative" src="./img/img/3.png"
                      alt="Generic placeholder image" style={{width:'50px'}}/>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <h4>Penanaman Benih Padi</h4>
                  </div>
                  <div className="media d-block d-md-flex pt-2">
                    <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Terdapat berbagai macam cara 
                        penanaman padi, namun lebih  disarankan dengan cara tanam jajar legowo 2 : 1 (40 x (20 x 10) cm. Cara 
                        tanam ini akan memberikan jumlah populasi yang banyak dengan produksi lebih tinggi.</p>
                    </div>
                  </div>
                </div>

                <div className="card-body mb-1">
                  <div className="col-md-6 mx-auto">
                      <hr className="stylish-color-green my-3 " style={{height:'4px'}}/>
                      <span className="rounded-circle text-white" 
                      style={{backgroundColor:'#00C851', padding :'10px', right:'60px', 
                      position :'absolute', bottom:'-15px'}}> 6</span>
                  </div>
                  <div className="col-md">
                      <img className="avatar-2 position-relative" src="./img/img/6.png"
                      alt="Generic placeholder image" style={{width:'80px'}}/>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <h4>Pemupukan</h4>
                  </div>
                  <div className="media d-block d-md-flex pt-2">
                    <div className="mb-md-0 mb-3">
                      <p className="text-muted" style={{fontSize:'16px'}}>Menanam padi yang sempurna tidak
                        lepas dari tanam pemberian pupuk agar padi yang ditanam dapat tumbuh dan berbuah banyak.</p>
                    </div>
                  </div>
                </div>
            </div>

            </div>
          </div>
      </div>
      
    )
}