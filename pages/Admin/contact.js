import React from 'react'
import LayoutAdmin from '../../components/Admin_component/layout'
import firebase from '../../lib/koneksi'


class Contact extends React.Component {
    state = {
        data: [],
        loading: false
    }
    async componentDidMount() {
        this.setState({
            loading: true
        })
        const db = firebase;
        await db.firestore().collection("Contact").get().then(snap => {
            snap.forEach(doc => {
                this.setState(Object.assign(this.state.data.push({
                    id: doc.id,
                    nama: doc.data().nama,
                    email: doc.data().email,
                    hp: doc.data().hp,
                    pesan: doc.data().pesan,
                    tanggal: doc.data().tanggal
                })))
            })
            this.setState({
                loading: false
            })
        }).catch(err => console.log(err));
        console.log(this.state.data)
    }
    render() {
        return (
            <LayoutAdmin dashboard='Contact'>

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i>
                        Data Contact</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>No.Telp</th>
                                        <th>Komentar</th>
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
                                                    <td>{snap.nama}</td>
                                                    <td>{snap.email}</td>
                                                    <td>{snap.hp}</td>
                                                    <td>{snap.pesan}</td>
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

export default Contact