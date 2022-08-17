import React from 'react'
import { useLocation } from 'react-router-dom';


const Breadcrumb = () => {
  const location = useLocation();
  const data = location.state.title;
  
  console.log('============================', data);
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{backgroundImage:'url("../img/bg/breadcrumb_bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="title">{data}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Tv Show</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Breadcrumb