import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Homeone from './pages/Homeone';
import HomeTwo from './pages/HomeTwo';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(()=>{
    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
      preloader();
      
     
    });
  })
  return (
     <Router>
       
        <Routes>
          <Route exact={true} path="/" element={<Homeone/>} />

          <Route exact={true} path="/index-2" element={<HomeTwo/>} />
          
          <Route exact={true} path="/movie" element={<Movie />} />

          <Route exact={true} path="/movie-details" element={<MovieDetails />} />

          <Route exact={true} path="/tv-show" element={<TvSeries />} />

          <Route exact={true} path="/pricing" element={<Pricing />} />

          <Route exact={true} path="/blog" element={<Blogs />} />
          
          <Route exact={true} path="/blog-details" element={<BlogDetails />} />
         
          <Route exact={true} path="/contact" element={<ContactPage />} />


        </Routes>
        
     </Router>
  );
}

export default App;
