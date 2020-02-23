import React from 'react'
import firebase from '../lib/koneksi'

export default class Postingan extends React.Component {
  state = {
    data: []
  }
  async componentDidMount() {

    const db = firebase;
    await db.firestore().collection("Post").get().then(snap => {
      snap.forEach(doc => {
        this.setState(Object.assign(this.state.data.push({
          id: doc.id,
          judul: doc.data().judul,
          creator: doc.data().creator,
          isi: doc.data().isi,
          imgUrl: doc.data().imgUrl,
          tanggal: doc.data().tanggal,
          namaImg: doc.data().namaImg
        })))
      })
    }).catch(err => console.log(err));
    console.log(this.state.data)
  }
  render = () => (
    <div className="paralax-img">
      <div className="py-5 h-100" style={{ backgroundColor: 'rgb(221, 138, 29, 0.4)' }}>
        <p className="green-text display-4 text-center">Postingan Terbaru</p>
        <hr className="my-3  yellow darken-2" style={{ height: '3px', width: '200px' }} />
        <div className="container mt-4">
          <div className="row col-sm col-md">

            {this.state.data.map(snap => {
              return (
                <div className="col-md-4" key={snap.id}>
                  <div className="card" style={{ backgroundColor: 'rgb(69,167,31, 0.8)' }}>

                    <img className="card-img-top" height="200" src={snap.imgUrl} alt="Card image cap" />

                    <div className="card-body text-white">
                      <h6 className="text-right"><i className="fas fa-heart yellow-text"></i> 11</h6>
                      <h5 className="card-title"><a>By {snap.creator}</a></h5>
                      <h4 className="card-title"><b className="yellow-text">{snap.tanggal}</b> <a>{snap.judul}</a></h4>
                      <p>
                        {snap.isi}
                      </p>
                      <a href="#" className="yellow-text">More >></a>

                    </div>

                  </div>
                </div>
              )
            })}

            {/* <div className="col-md-4">
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
              </div> */}

          </div>
        </div>
      </div>
    </div>

  )
}