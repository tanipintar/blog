import React from 'react'
import Router from 'next/router'
import LayoutAdmin from '../../components/Admin_component/layout'
import firebase from '../../lib/koneksi'
import { storage } from 'firebase'
import 'firebase/firestore'

export default class tambahPost extends React.Component {
    state = {
        konten: {
            judul: '',
            creator: '',
            isi: '',
            imgUrl: '',
            tanggal: new Date().toLocaleString(),
            namaImg : ''
        },
        image: null,
        url: '',
        loading: false,
        form: false,
        alertSuccess: false
    }
    async upload() {
        this.state.loading = true;
        this.setState({
            image: this.state.image
        })
        const dbFiles = firebase;
        const uploadTask = await dbFiles.storage().ref(`Konten/${this.state.image.name}`).put(this.state.image);
        uploadTask.task.on("state_changed", snap => {
            console.log(snap)
        }, err => console.log(err), () => {
            storage().ref("Konten").child(this.state.image.name).getDownloadURL().then(url => {
                this.setState(Object.assign(this.state.konten, {
                    imgUrl: url,
                    namaImg : this.state.image.name
                }));
                this.setState({
                    loading: false,
                    form: true
                });
            })
        })
    }
    async postingKonten() {
        const db = firebase;
        this.setState({
            judul: this.state.konten.judul,
            creator: this.state.konten.creator,
            isi: this.state.konten.isi,
            imgUrl: this.state.konten.imgUrl,
            namaImg : this.state.konten.namaImg
        })
        let data = this.state.konten;
        await db.firestore().collection("Post").add(data).then(() => {
            this.setState({
                alertSuccess: true
            })
            setTimeout(() => {
                this.setState({
                    alertSuccess: false
                })
                Router.push('/Admin/konten');

            }, 1500)
        }).catch(() => console.log('Gagal'))
    }
    async batal() {
        const dbFiles = firebase;
        await dbFiles.storage().ref("Konten").child(this.state.image.name).delete().then(res => {
            console.log(res);
            this.setState({
                form: false,
            })
            this.setState(Object.assign(this.state.konten, {
                imgUrl: ''
            }));
        }).catch(err => console.log(err))
    }
    render() {
        const { judul, creator, isi } = this.state.konten;
        let lebar = 0;
        if (this.state.alertSuccess) {
            lebar = 1;
        }
        return (
            <LayoutAdmin dashboard='Add Post'>
                <div className="overflow-auto">
                    <div className="card z-depth-1 p-5 position-absolute alert-custom" style={{ opacity: lebar }}>
                        <p className="green-ic">Success Upload</p>
                    </div>
                    <div className="row col-md">
                        <div className="card z-depth-1 col-md-6 border-light p-5" action="#!">
                            <p className="h4 mb-4">Tambah Postingan</p>
                            <div className="row justify-content-around rounded">
                                <label className="btn btn-sm">
                                    <i className="fas fa-folder-plus green-ic" style={{ fontSize: '20px' }}></i>
                                    <input type="file" style={{ display: 'none' }}
                                        onChange={(e) => this.setState({ image: e.target.files[0] })} />
                                </label>
                                <button className="btn btn-success btn-sm"
                                    onClick={() => this.upload()} type="button">Upload</button>
                            </div>

                            {this.state.form ? <div className="my-2">
                                <input type="text" className="form-control mb-2"
                                    value={judul} onChange={(e) => this.setState(Object.assign(this.state.konten, {
                                        judul: e.target.value
                                    }))} placeholder={judul ? '' : 'Judul Postingan'}
                                />
                                <input type="text" className="form-control mb-2"
                                    value={creator} onChange={(e) => this.setState(Object.assign(this.state.konten, {
                                        creator: e.target.value
                                    }))} placeholder={creator ? '' : 'Creator'} />

                                <div className="form-group">
                                    <textarea className="form-control rounded-0" rows="3"
                                        value={isi} onChange={(e) => this.setState(Object.assign(this.state.konten, {
                                            isi: e.target.value
                                        }))} placeholder={isi ? '' : 'Isi Konten'} />
                                </div>
                                <button className="btn btn-success btn-block my-2"
                                    onClick={() => this.postingKonten()} type="button">Simpan</button>
                            </div> : <p className="my-5 text-muted text-center">Mohon Upload Gambar...</p>}

                        </div>
                        <div className="col-md justify-content-center">
                            <div className="col-md-6 col-6 mx-auto flex-center">
                                <div className="position-relative h-50">
                                    {this.state.loading ? <div className="rgba-black-strong position-absolute w-100 rounded h-100 flex-center">
                                        <div className="spinner-border yellow-ic" style={{ width: '3rem', height: '3rem' }} role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div> : this.state.form ? <div className="text-center">
                                        <button className="btn btn-danger btn-sm " onClick={() => this.batal()}>Batal</button>
                                    </div> : ''}
                                    <img
                                        src={this.state.konten.imgUrl || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAD8CAMAAAAFbRsXAAAAZlBMVEU5gPv///+ewv8fU7FTj/syffsue/skd/t3pPzm7v50ovzy9v/U4f4pefuXtvxflfy5z/2kyP8oWbSWvf8jWr3c6P6sxv3X5f6cvP12o/ywyf3j7f+awf9VkfwtYMAnV7IuZcdNi/vEUSy1AAACuUlEQVR4nO3b63ISQRRF4RZhVBSJSYRcNJH3f0nNHZjb6UpNu3ez1ht8v+bUrp40T6ot5rcf4iVdSJr/+lkJZHYRl2hDMiTikLhEHRKWyEOiEn1IUGIAiUkcICGJBSQi8YAEJCaQcYkLZFRiAxmT+EBGJEaQYYkTZFBiBRmSeEEGJGaQfokbpFdiB+mT+EFmF9tKIN0SR0inxBLSJfGEdEhMIW2JK6QlsYUcS3whRxJjyKHEGXIgsYbsS7whexJzyJvEHfIqsYe8SPwhz5IKIE+SGiCPkiogDxJlyO8f4Wa3ypB0d38e7P5OGpIuP0Y714bEJeqQsEQeEpXoQ4ISA0hM4gAJSSwgEYkHJCAxgYxLXCCjEhvImMQHMiIxggxLnCCDEivIkMQLMiAxg/RL3CC9EjtIn8QP0iMxhHRLHCGdEktIl8QT0iExhbQlrpCWxBZyLPGFHEmMIYcSZ8iBxBqyL/GG7EnMIW8Sd8irxB7yIvGHPEsqgDxJaoA8SqqAPEjqgPyTVAJJl7VA0p9aIHMgYmVDFk2hFtNCFsvvhVrmSXIhq7PWP0ETdbYCAgQIECBAgEwNaa6234q0vWomhaTmU6HyHCd8xqsGRC0gagFRC4ha+btWsaaFLNafC7Vm1wICBAgQIECAhCGbL4XaTAtJq1K7Vp7jhM941YCoBUQtIGoBUeuEd63rZZGu2bWAAAECBAgQIOGam6+Fupn4vVYtj/xlA6IWELWAqAVErROGlByrMsqG7NbvajcNo/wZn3nT6kI2QIAAAQLkv0Ay38pMBkm7+buS+bLXc2upBkQtIGoBUQuIWkDUAqIWELWAqAVELSBqAVELiFpA1AKiFhC1gKgFRC0gagFRC4haQNQCohYQtYCoBUQtIGoBUQuIWkDUAqIWELWAqAVELSBqAVELiFpA1KoH8hf1znhNPIvNYAAAAABJRU5ErkJggg=="}
                                        alt="Uploaded Images"
                                        className="w-100 h-100"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <style jsx>{`
                        .alert-custom{
                            top : 10px;
                            right : 0px;
                            transition: all ease 0.5s
                        }
                    `}</style>
                </div>
            </LayoutAdmin>
        )
    }
}