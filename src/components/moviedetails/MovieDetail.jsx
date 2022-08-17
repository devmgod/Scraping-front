import React,{ useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import $ from "jquery";
import "magnific-popup"


const MovieDetail = () => {
  const location = useLocation();
  const state = location.state.onedata;
  console.log('============================', state);
  useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])
  return (
    <section className="movie-details-area" style={{backgroundImage:'url("../img/bg/movie_details_bg.jpg")'}}>
    <div className="container">
      <div className="row align-items-center position-relative">
        <div className="col-xl-3 col-lg-4">
          <div className="movie-details-img">
            <img src={`./poster/${state.poster}`} alt="" />
            <a href={state.iframurl} className="popup-video"><img src="img/images/play_icon.png" alt="" /></a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-8">
          <div className="movie-details-content">
            <h5>New Episodes</h5>
            <h2>{state.title}</h2>
            <div className="banner-meta">
              <ul>
                <li className="quality">
                  <span>Pg 18</span>
                  <span>hd</span>
                </li>
                <li className="category">
                  <a href="/#">{state.genres}</a>
                  {/* <a href="/#">Drama</a> */}
                </li>
                <li className="release-time">
                  <span><i className="far fa-calendar-alt" /> {state.year}</span>
                  <span><i className="far fa-clock" /> {state.runtime}</span>
                </li>
              </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many
              variations of passages of lorem
              Ipsum available, but the majority have suffered alteration in some injected humour.</p>
            <div className="movie-details-prime">
              <ul>
                <li className="share"><a href={state.videourl}><i className="fas fa-share-alt" /> Share</a></li>
                <li className="streaming">
                  <h6>Prime Video</h6>
                  <span>Streaming Channels</span>
                </li>
                <li className="watch"><a href={state.iframurl} className="btn popup-video"><i className="fas fa-play" /> Watch Now</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="movie-details-btn">
          <a href={state.videourl} className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MovieDetail