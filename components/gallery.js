import React from 'react'

const Gallery = () => (
    <div className="py-4 text-center" style={{backgroundColor : '#E9F0EC'}}>
        <p><b className="text-muted" style={{fontSize:'28px'}}>See Our Work, </b><b className="green-text display-4">Our Gallery</b></p>
        <hr className="my-3  yellow darken-2" style={{height:'3px', width:'200px'}}/>
          <div className="container py-3">
            <div className="row col-md col-sm">
              <figure className="col-md-4">
                <a src="./img/img/1.png"data-size="1600x1067">
                  <img alt="picture" src="./img/img/12.jpg"
                    className="img-fluid"/>
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/13.jpg"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/14.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/123.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/132.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/213.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/10.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/11.png"
                    className="img-fluid" />
                </a>
              </figure>

              <figure className="col-md-4">
                <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg" data-size="1600x1067">
                  <img alt="picture" src="./img/img/g2.jpg"
                    className="img-fluid" />
                </a>
              </figure>

            </div>
          </div>
      </div>
  
)
export default Gallery