import React from 'react'

export default class Postingan extends React.Component{
    render=()=>(
      <div className="paralax-img">
      <div className="py-5 h-100" style={{backgroundColor:'rgb(221, 138, 29, 0.4)'}}>
        <p className="green-text display-4 text-center">Postingan Terbaru</p>
          <hr className="my-3  yellow darken-2" style={{height:'3px', width:'200px'}}/>
          <div className="container mt-4">
            <div className="row col-sm col-md">

              <div className="col-md-4">
                <div className="card" style={{backgroundColor:'rgb(69,167,31, 0.8)'}}>

                  <img className="card-img-top" src="./img/img/1a.jpg" alt="Card image cap"/>

                  <div className="card-body text-white">
                    <h6 className="text-right"><i className="fas fa-heart yellow-text"></i> 11</h6>
                    <h5 className="card-title"><a>By Eko Heri Susanto</a></h5>
                    <h4 className="card-title"><b className="yellow-text">18 JUNI :</b> <a>FOTOSINTESIS</a></h4>
                    <p>
                      Salah satu kunci sukses menanam padi adalah memahami bagaimana proses tanaman menyediakan makanan untuk padinya sendiri, 
                      melalui proses Fotosintesis. 
                    </p>
                    <a href="#" className="yellow-text">More >></a>

                  </div>

                </div>
              </div>

              <div className="col-md-4">
                <div className="card" style={{backgroundColor:'rgb(69,167,31, 0.8)'}}>

                  <div className="card-body text-white">
                    <div className="text-right">
                      <a href="#" className="yellow-text">More >></a>
                    </div>
                    <h5 className="card-title"><a>By Eko Heri Susanto</a></h5>
                    <h4 className="card-title"><b className="yellow-text">20 JUNI :</b> <a>MORFOLOGI TANAMAN PADI</a></h4>
                    <p>
                    Salah satu kunci sukses menanam padi adalah mengetahui sifat dan fase pertumbuhannya.
                    </p>
                    <h6 className=""><i className="fas fa-heart yellow-text"></i> 11</h6>

                  </div>
                  <img className="card-img-top" src="./img/img/1b.jpg" alt="Card image cap"/>


                </div>
              </div>

              <div className="col-md-4">
                <div className="card" style={{backgroundColor:'rgb(69,167,31, 0.8)'}}>

                  <img className="card-img-top" src="./img/img/1c.jpg" alt="Card image cap"/>

                  <div className="card-body text-white">
                    <h6 className="text-right"><i className="fas fa-heart yellow-text"></i> 11</h6>
                    <h5 className="card-title"><a>By Eko Heri Susanto</a></h5>
                    <h4 className="card-title"><b className="yellow-text">25 Juni :</b> <a>RAKYAT OPTIMIS, RAKYAT VISIONER</a></h4>
                    <p>
                    Negara dengan berbagai suku bangsa yang disebut Indonesia ini, tidak akan bisa dibangun 
                    dengan "AROGANSI Cebong versus Kampret". 
                    </p>
                    <a href="#" className="yellow-text">More >></a>

                  </div>

                </div>
              </div>


            </div>
          </div>
      </div>
    </div>

    )
}