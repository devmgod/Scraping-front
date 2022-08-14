import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieArea from '../components/movie/MovieArea'
import Newsletter from '../components/movie/Newsletter'
import Breadcrumb from '../components/tv/Breadcrumb'

const TvSeries = () => {
  const location = useLocation();
  const state = location.state;
  console.log('============================', state);
  return (
    <div>
        <Header/>
        <main>
            <Breadcrumb/>
            <MovieArea/>
            <Newsletter/>
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries