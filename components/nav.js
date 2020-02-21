import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MenuNav from './navMenu'
import loadjs from 'loadjs'
// const color = () =>{
//   bac
// }

export default class Navbar extends React.Component{
  state ={
    togle : false
  }
  // componentDidMount(){
  //   loadjs([
  //     '/js/jquery.min.js','/js/popper.min.js','/js/bootstrap.min.js', '/js/mdb.min.js'
  //   ], {
  //     success: function() { },
  //     async: false
  //   });
  // }
  showTogle=()=>{
    this.setState({
      togle : !this.state.togle
    })
  }
  render(){

    let classNav = 'collapse navbar-collapse';

    if(this.state.togle){
      classNav += ' show';
    }
    return (
      <div>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <title>{this.props.title}</title>
        <link rel="shortcut icon" href="/plant.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/mdb.min.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
  
        {/* <script type="text/javascript" src="" async/>
        <script type="text/javascript" src="" async/>
        <script type="text/javascript" src="" async/>
        <script type="text/javascript" src="" async/> */}
  
        </Head>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
              <a className="navbar-brand yellow-text font-weight-bold" href="/"><strong><h2>Tani Pintar</h2></strong></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.showTogle}
                aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={classNav}>
                <MenuNav/>
                {/* <form className="form-inline">
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  </div>
                </form> */}
              </div>
            </div>
          </nav>
          {this.props.children}
          <style jsx global>{`
              .activeNav {
                border-bottom: 1px solid rgb(243, 212, 39);
            }
            .dropdowns {
                position: relative;
                display: inline-block;
              }

              .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                padding: 12px 16px;
                z-index: 1;
              }

              .dropdowns:hover .dropdown-content {
                display: block;
              }
            `}</style>
      </div>
    )
  }
}