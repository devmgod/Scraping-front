import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieArea from '../components/movie/MovieArea'
import Newsletter from '../components/movie/Newsletter'
import Breadcrumb from '../components/tv/Breadcrumb'

const TvSeries = () => {
  const location = useLocation();
  const data = location.state;
  console.log('============================', data);
  return (
    <div>
        <Header/>
        <main>
            <Breadcrumb/>
            <MovieArea parentToChild={data}/>
            <Newsletter/>
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries