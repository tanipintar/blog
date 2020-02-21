import React from 'react'

export default function Sri(){
    return(
        <div className="py-4 text-center">
        <p className="green-text" style={{fontSize:'35px'}}>System Of Rice Intensification</p>
        <hr className="my-3  yellow darken-2" style={{height:'3px', width:'200px'}}/>
        <div className="container">
          <div className="row col-md col-sm pt-3">
              <div className="col-md-7 p-0">
                <div className="h-100 p-5" style={{backgroundColor : '#43B616', border : '1px solid #43B616'}}>
                  <div className="border-left border-warning col-md-10 text-left text-white">
                    <h2 className=" font-weight-bold" style={{fontSize:'35px'}}>
                    SRI (System Of Rice Intensification)
                    </h2>
                    <p>                                     
                      adalah teknik budidaya padi yang mampu meningkatkan 
                      produktivitas padi dengan cara mengubah pengelolaan 
                      tanaman, tanah, air dan unsur hara. 
                    </p>
                  </div>
                  <button className="btn btn-warning float-left">Read More>></button>
                </div>
              </div>
              <div className="col-md-5 p-0 border">
                <img className="avatar-2 position-relative w-100" src="./img/img/b.png"
                            alt="Generic placeholder image"/>
              </div>
          </div>
          <div className="row col-md col-sm">
              
              <div className="col-md-5 p-0">
                <img className="avatar-2 position-relative w-100" src="./img/img/a.png"
                            alt="Generic placeholder image"/>
              </div>
              <div className="col-md-3 p-0 border">
                <img className="avatar-2 position-relative w-100 h-100" src="./img/img/c.png"
                            alt="Generic placeholder image"/>
              </div>
              <div className="col-md-4 p-0">
                <div className="h-100 p-4 flex-center" style={{backgroundColor : '#43B616', border : '1px solid #43B616'}}>
                  <div className="border-left border-warning col-md-10 text-left text-white ">
                    <p>                                     
                    Penerapan SRI memperhatikan semua komponen 
                    yang ada di ekosistem baik itu tanah, tanaman, 
                    mikro organisme, makro organisme, udara,
                    sinar matahari dan air sehingga memberikan
                    produktivitas yang tinggi serta menghindari berbagai 
                    pengaruh negatif bagi kehidupan komponen.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        
          </div>
     </div>

    )
}