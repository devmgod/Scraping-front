import React, { useState, useEffect } from "react";
import Menu from "../UpMovieItemMenu";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const UpcomingMovie = () => {
  const [post, setPost] = useState(Menu);
  const navigate = useNavigate();
  useEffect(async () => {
    await axios.get("http://localhost:8080/upcoming/").then((response) => {
      setPost(response.data);
      const data = response.data;
      console.log(data);
    });
  }, []);

  // const [items, setItems] = useState(Menu);
  // const filterItem = (categItem)=>{
  //   const updateItems = Menu.filter((curElem)=>{

  //     return curElem.category === categItem;

  //   })
  //   setItems(updateItems);
  // }

  return (
    <section
      className="ucm-area ucm-bg"
      style={{ backgroundImage: 'url("../../img/bg/ucm_bg.jpg")' }}
    >
      <div
        className="ucm-bg-shape"
        style={{ backgroundImage: 'url("../../img/bg/ucm_bg_shape.png")' }}
      />
      <div className="container">
        <div className="row align-items-end mb-55">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-left">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">Upcoming Movies</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tr-movie-menu2-active text-center">
              {/* <button
                className="active"
                data-filter="*"
                onClick={() => setItems(post)}
              >
                TV Shows
              </button>
              <button
                data-filter=".cat-two"
                onClick={() => filterItem("documentary")}
              >
                documentary
              </button>
              <button
                data-filter=".cat-one"
                onClick={() => filterItem("Movies")}
              >
                Movies
              </button>
              <button
                data-filter=".cat-three"
                onClick={() => filterItem("sports")}
              >
                sports
  </button> */}
            </div>
          </div>
        </div>

        <div className="row tr-movie-active">
          {post.map((elem) => {
            //  const {id,image,title,date,quality,duration,ratings} = elem;
            const { id, poster, title, year, genres, runtime } = elem;
            const imgsrc = String(poster).split('/')[4];
            console.log('asdfasdfasdfasdf',imgsrc);
            const image = "./poster/" + poster;

            return (
              <motion.div
                layout
                className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                key={id}
              >
                <div className="movie-item mb-60">
                  <motion.div layout className="movie-poster">
                    <a
                      onClick={() => {navigate("/movie-details", {state: elem})}}
                   
                    >
                      <img src={image} alt="" />
                    </a>
                   
                  </motion.div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <a
                          href="/movie-details"
                        >
                          {title}
                        </a>
                      </h5>
                      <span className="date">{year}</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">{genres}</span>
                        </li>
                        <li>
                          <span className="duration">
                            <i className="far fa-clock" />
                            {runtime}
                          </span>
                        </li>
                        {/* <li>
                          <span className="duration">
                            <i className="far fa-clock" />
                            {ratings}
                          </span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovie;
