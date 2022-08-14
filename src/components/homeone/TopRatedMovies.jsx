import React,{ useState, useEffect } from 'react';
import Menu from '../UpMovieItemMenu';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const TopRatedMovies = () => {

  try{
    const [post, setPost] = useState(Menu);
    const navigate = useNavigate();
    useEffect(async () => {
      await axios.get("http://localhost:8080/featured/").then((response) => {
        setPost(response.data);
        const data = response.data;
        console.log(data);
      });
    }, []);
  
    const [items, setItems] = useState(Menu);
    // const filterItem = async(categItem, e)=>{
    //   await axios.get(`http://localhost:8080/${categItem}/`).then((response) => {
    //     setPost(response.data);
    //     const data = response.data;
    //     console.log(data);
    //   });
    //   document.getElementsByClassName(categItem).classList = document.getElementsByClassName(categItem).classList || 'active'
    //   console.log(document.getElementsByClassName(categItem))
    // }
    return (
    
    <section className="top-rated-movie tr-movie-bg" style={{backgroundImage:'url("../../img/bg/tr_movies_bg.jpg")'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">Top Rated Movies</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tr-movie-menu-active text-center">
              {/* <button className='tamil'  data-filter="*" onClick={()=> filterItem('tamil')}>Tamil</button>
              <button className='kannada active' data-filter=".cat-two" onClick={()=> filterItem('kannada')}>Kannada</button>
              <button className='hindi' data-filter=".cat-one" onClick={()=> filterItem('hindi')}>Hindi</button>
              <button className='malayalam' data-filter=".cat-three" onClick={()=> filterItem('malayalam')}>Malayalam</button>
              <button className='telugu' data-filter=".cat-four" onClick={()=> filterItem('telugu')}>Telugu</button>
              <button className='upcoming' data-filter=".cat-five" onClick={()=> filterItem('upcoming')}>Upcoming</button>
    <button className='featured' data-filter=".cat-six" onClick={()=> filterItem('featured')}>Featured</button> */}
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {
                 post.map((elem)=>{
                  // const {id,image,title,date,quality,duration,ratings} = elem;
                  const { id, poster, title, year, genres, runtime } = elem;
                  const image = "./poster/" + poster;
  
            return(
  
              
               <motion.div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two" key={id}>
              <div className="movie-item mb-60">
                <motion.div className="movie-poster">
                  <a onClick={() => {navigate("/movie-details", {state: elem})}}><img src={image} alt="" /></a>
                </motion.div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <Link to={{
                        pathname: "/movie-details",
                        state: post
                      }}
                      >
                        {title}
                      </Link>
                    </h5>
                    <span className="date">{year}</span>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li><span className="quality">{genres}</span></li>
                      <li>
                        <span className="duration"><i className="far fa-clock" />{runtime}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
         
            )
          })
  
        }
        </div>
        
      </div>
    </section>
    )
  }catch(e){

  }

  
}

export default TopRatedMovies