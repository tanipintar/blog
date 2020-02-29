import React from 'react'
import LayoutAdmin from '../../components/Admin_component/layout'
import firebase from '../../lib/koneksi'
import { storage } from 'firebase'
import 'firebase/firestore'
import Router from 'next/router'
export default class Edit extends React.Component {
    static async getInitialProps({ query }) {
        console.log(query.data)
        return query
    }
    constructor(props) {
        super(props);

        this.state = {
            konten: {
                id: '',
                judul: '',
                creator: '',
                isi: '',
                imgUrl: '',
                tanggal: '',
                namaImg: ''
            },
            loadImage: false,
            updateLoad: false
        }

        this.ganti = this.ganti.bind(this);
        this.updatePost = this.updatePost.bind(this)
    }

    componentDidMount() {
        const hasil = this.props.data
        const kolom = JSON.parse(hasil);
        this.setState(Object.assign(this.state.konten, {
            id: kolom.id,
            judul: kolom.judul,
            creator: kolom.creator,
            isi: kolom.isi,
            imgUrl: kolom.imgUrl,
            tanggal: kolom.tanggal,
            namaImg: kolom.namaImg
        }))
    }
    async ganti(e) {
        this.setState({
            loadImage: true
        })
        const gambar = e.currentTarget.files[0];

        const dbFiles = firebase;
        const uploadTask = await dbFiles.storage().ref(`Konten/${gambar.name}`).put(gambar);
        uploadTask.task.on("state_changed", snap => {
            console.log(snap)
        }, err => console.log(err), () => {
            storage().ref("Konten").child(this.state.konten.namaImg).delete().then(res => {
                console.log(res);
            }).catch(err => console.log(err));
            storage().ref("Konten").child(gambar.name).getDownloadURL().then(url => {
                this.setState({
                    loadImage: false
                });
                this.setState(Object.assign(this.state.konten, {
                    imgUrl: url,
                    namaImg: gambar.name
                }));
            });

        })
    }
    async updatePost() {
        this.setState({
            updateLoad: true
        })
        const db = firebase;
        await db.firestore().collection("Post").doc(this.state.konten.id).update({
            'judul': this.state.konten.judul,
            'creator': this.state.konten.creator,
            'isi': this.state.konten.isi,
            'imgUrl': this.state.konten.imgUrl,
            'tanggal': new Date().toLocaleString(),
            'namaImg': this.state.konten.namaImg
        }).then(() => {
            this.setState({
                updateLoad: false
            });
            Router.push('/Admin/konten');
        }).catch(err => console.log(err))
    }
    render() {

        return (
            <LayoutAdmin dashboard='Edit Konten'>
                <div className="card z-depth-1 col-md-6 pt-2 pl-5 pr-5 pb-3">
                    <div className="mb-4">
                        <span className="badge badge-pill badge-success p-2">Tanggal Upload : {this.state.konten.tanggal}</span>
                    </div>
                    <div className="row col-md mb-4 flex-center">
                        <img src={this.state.konten.imgUrl} className="img-fluid mx-auto card" width="200" />
                        <div>
                            <p>Nama : {this.state.konten.namaImg}</p>
                            <label className="btn btn-success btn-sm">
                                Ganti Gambar
                                <input type="file" style={{ display: 'none' }} onChange={this.ganti}
                                />
                                {this.state.loadImage ? <div className="spinner-border spinner-border-sm white-text" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> : ''}
                            </label>
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label>Judul : </label>
                        <div className="col-md-10 ml-auto">
                            <input type="text" className="form-control"
                                value={this.state.konten.judul} onChange={e => this.setState(Object.assign(this.state.konten,{
                                    judul: e.target.value 
                                }))} />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label>Creator : </label>
                        <div className="col-md-10 ml-auto">
                            <input type="text" className="form-control mb-2"
                                value={this.state.konten.creator} onChange={e => this.setState(Object.assign(this.state.konten,{
                                    creator: e.target.value 
                                }))} />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label>Isi : </label>
                        <div className="col-md-10 ml-auto">
                            <textarea rows="3" className="form-control mb-2"
                                value={this.state.konten.isi} onChange={e => this.setState(Object.assign(this.state.konten,{
                                    isi: e.target.value 
                                }))} />
                        </div>
                    </div>
                    <button className="btn btn-success btn-block" onClick={this.updatePost}>
                        Simpan Perubahan {this.state.updateLoad ? <div className="spinner-border spinner-border-sm white-text" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : ''}
                    </button>

                </div>
                {/* {nama ? '' : <label>Your Name</label>} */}
            </LayoutAdmin>
        )
    }
}