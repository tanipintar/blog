import React, { Component } from 'react'
import Router from 'next/router'
import LayoutAdmin from '../../components/Admin_component/layout';
import firebase from '../../lib/koneksi'

class Konten extends React.Component {
//variabel data didalam state, semacam object
    state = {
        data: [], //data kosong array
        loading: false 
    }
    // load data tidak menggunakan konstruktor atau get initial props
    // get initial props sama saja load data ketika aplikasi baru pertama kali di jalankan, konstraktor ngeload setiap class komponen dijalankan
    async componentDidMount() {// perubahan data yang dikirim pada user
        this.setState({ //load data 
            loading : true
        })
        const db = firebase;
        await db.firestore().collection("Post").get().then(snap => {
            snap.forEach(doc => {
                this.setState(Object.assign(this.state.data.push({ //seState digunakan untuk melakukan perubahan data dalam aplikasi dari value sebelumnya
                    id: doc.id,
                    judul: doc.data().judul,
                    creator: doc.data().creator,
                    isi: doc.data().isi,
                    imgUrl: doc.data().imgUrl,
                    tanggal: doc.data().tanggal,
                    namaImg : doc.data().namaImg
                })))
            })
            this.setState({
                loading : false
            })
        }).catch(err => console.log(err));
        console.log(this.state.data) //then: memberikan sebuah hasil tangkapan atau respon terhadap koneksi ke firestore
        //catch: memberikan hasil pesan error ketika koneksi data tidak berjalan dengan lancar
    }
    async hapusKonten(id,file){ // fungsi untuk menghapus dokumen yang ada di firestore, yang memiliki 2 parameter.
        //parameter id digunakan untuk menghapus dokumen di firestore, parameter file digunakan untuk menghapus dokumen
        // di firebase storage
        const db = firebase; // memanggil koneksi
        await db.firestore().collection("Post").doc(id).delete().then(res=>{ //memanggil fungsi firestore dengan koleksi post
            console.log(res)
        }).catch(err=>console.log(err));
        this.hapusFiles(file); 
        window.location.reload(true) // digunakan untuk mereload ulang kembali page konten
    }
    async hapusFiles(namaImage){ // fungsi untuk menghapus file di firebase storage
        const dbFiles = firebase;
        await dbFiles.storage().ref("Konten").child(namaImage).delete().then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))
    }
    render() {
        return (
            <LayoutAdmin dashboard='Konten'>
                <div className="card mb-3">
                    <div className="card-header border">
                        <i className="fas fa-table"></i>
                        Data Konten
                        <button className="btn btn-warning btn-sm float-right" onClick={() => {
                            Router.push('/Admin/tambahPost')
                        }}>Add Post</button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Tanggal Post</th>
                                        <th>Judul</th>
                                        <th>Creator</th>
                                        <th>Isi Konten</th>
                                        <th>Gambar</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {this.state.loading ? <tbody>
                                    <tr className="border text-center">
                                        <td colSpan={6}>
                                            <div className="spinner-border yellow-ic" style={{ width: '3rem', height: '3rem' }} role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody> : <tbody>
                                        {this.state.data.map(snap => {
                                            return (
                                                <tr key={snap.id}>
                                                    <td>{snap.tanggal}</td>
                                                    <td>{snap.judul}</td>
                                                    <td>{snap.creator}</td>
                                                    <td>{snap.isi.substring(0, 20)}. . . .</td>
                                                    <td>
                                                        <img src={snap.imgUrl} className="img-fluid" width="40" />
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-danger" 
                                                        type="button" onClick={()=>{
                                                            if (window.confirm('Apakah Anda Yakin Hapus ?')) {
                                                                this.hapusKonten(snap.id, snap.namaImg)
                                                            }
                                                        }}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-primary" type="button"
                                                        onClick={()=>{
                                                            Router.push({
                                                                pathname : '/Admin/editPost',
                                                                query : {data : JSON.stringify(snap)}
                                                            });
                                                        }}>
                                                            <i className="fas fa-fw fa-edit"></i>

                                                        </button>
                                                    </td>
                                                </tr>

                                            )
                                        })}
                                    </tbody>}
                            </table>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

            </LayoutAdmin>
        )
    }
}

export default Konten
//   static async getInitialProps(){
    //     const snapshot = await firebase.firestore().collection("konten").get()
    //     const data = snapshot.docs.map(doc =>{
    //       return {
    //         id: doc.id,
    //         data: doc.data()
    //       }
    //     });
    //     var konten = data;
    //     console.log(konten);

    //     return { konten } 
    //   }
    
    //   constructor(props){
    //     super(props);

    //     this.state = {
    //       loading:false,
    //       dtmhs: [],
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    //   }

    //   Database(){
    //     const db = firebase.firestore().collection("konten");
    //     return db;
    //   }



    //   GetData = async function() {
    //     const snapshot = await firebase.firestore().collection("konten").get()
    //     const data = snapshot.docs.map(doc =>{
    //       return {
    //         id: doc.id,
    //         data: doc.data()
    //       }
    //     });
    //     this.setState({
    //       loading: false,
    //       dtmhs: data
    //     })
    //   }

    //dibawah kodingan rafy
     // static async getInitialProps() {
    //     const db = firebase;
    //     const data = [];
    //     await db.firestore().collection("Post").get().then(snap => {
    //         snap.forEach(doc => {
    //             data.push({
    //                 id: doc.id,
    //                 judul: doc.data().judul,
    //                 creator: doc.data().creator,
    //                 isi: doc.data().isi,
    //                 imgUrl: doc.data().imgUrl,
    //                 tanggal: doc.data().tanggal
    //             })
    //         })
    //     }).catch(err => console.log(err));
    //     console.log(data);
    //     return { data }
    // }