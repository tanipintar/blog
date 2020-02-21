import React from 'react'
import Navbar from '../components/nav'
import Gallery from '../components/gallery'
import Step from '../components/step'
import Postingan from '../components/Postingan'
import Footer from '../components/footer'
import Sri from '../components/SRI'

const Home = () => (
  <div>
     <header>
     <Navbar title="Home Page"/>
        <div className="view jarallax custombg">
          
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
          
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto p-3 mb-4 white-text text-center shadow">
                  <div className="rgba-black-light shadow py-5 rounded">
                      <div className="mb-5">
                        <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
                        data-wow-delay="0.3s"><strong>SMART FARMING</strong></h1>
                      <h2 className="article__title h2-reponsive font-weight-italic">"Metode Pertanian Cerdas Berbasis Teknologi"</h2>
                      <div className="col-md-8 mx-auto">
                        <p className="mb-4 text-white" style={{fontSize : '18px'}}>
                        Membangun pertanian Indonesia melalui pertanian berbasis Teknologi.
                        Teknologi pintar menjadi pilihan masa depan petani yang tepat untuk digunakan
                        </p>
                      </div>
                        <a className="btn btn-success">Read More</a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Step/>
      <hr className="display-4"/>
      <Sri/>
      <Gallery/>
      <Postingan/>
      <Footer/>
  </div>
)

export default Home
