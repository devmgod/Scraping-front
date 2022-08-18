import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "./MovieMenu";
import $ from "jquery";
import ReactPaginate from "react-paginate";

const MovieArea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentpage, setCurrentpage] = useState(1);
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;

  useEffect(() => {
    const totalPage = Math.ceil(data.length / 8);
    const pushItem = [];
    let pageLength = (currentpage - 1) * 8 + 8;
    if (currentpage == totalPage) {
      pageLength = data.length;
    }
    for (let i = (currentpage - 1) * 8; i < pageLength; i++) {
      pushItem.push(data[i]);
    }
    setItems(pushItem);
    $(".pagenation-ul").html("");
    $(".pagenation-ul").append(`
      <li class='pagenation-li-prev'><a>Prev</a></li>
    `);
    // for (let i = 1; i <= totalPage; i++) {
    //   if (i > 3 && i < totalPage - 2) {
    //     $(".pagenation-ul").append(`
    //     <li class="pagenation-li-item" id=${i}><a>...</a></li>
    //   `);
    //   } else {
    //     $(".pagenation-ul").append(`
    //     <li class="pagenation-li-item" id=${i}><a>${i}</a></li>
    //   `);
    //   }
    // }
    $(".pagenation-ul").append(`
      <li class="pagenation-li-next"><a>Next</a></li>
    `);

    $(".pagenation-ul").on("click", ".pagenation-li-item", function (event) {
      setCurrentpage(Number(event.currentTarget.id));
    });

    $(".pagenation-ul").on("click", ".pagenation-li-next", function () {
      if (currentpage < totalPage) {
        setCurrentpage(Number(currentpage + 1));
      } else if (currentpage >= totalPage) {
        setCurrentpage(1);
      }
    });

    $(".pagenation-ul").on("click", ".pagenation-li-prev", function () {
      if (currentpage > 1) {
        setCurrentpage(Number(currentpage - 1));
      } else if (currentpage <= 1) {
        setCurrentpage(Number(totalPage));
      }
    });
    $(`.pagenation-ul #${currentpage}`).addClass("active");
  }, [currentpage, data]);

  const filterItem = (categItem) => {
    const updatesItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatesItems);
  };
  return (
    <section
      className="movie-area movie-bg"
      style={{ backgroundImage: 'url("../img/bg/movie_bg.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-left">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">New Release Movies</h2>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="movie-page-meta">
              <div className="tr-movie-menu-active text-center">
                <button
                  className="active"
                  data-filter="cat-three"
                  onClick={() => filterItem("Animation")}
                >
                  Animation
                </button>
                <button
                  data-filter=".cat-one"
                  onClick={() => filterItem("Movies")}
                >
                  Movies
                </button>
                <button
                  data-filter=".cat-two"
                  onClick={() => filterItem("Anime")}
                >
                  Anime
                </button>
              </div>
              <form className="movie-filter-form">
                <select className="custom-select">
                  <option value={0}>English</option>
                  <option value={1}>Blueray</option>
                  <option value={2}>4k Movie</option>
                  <option value={3}>Hd Movie</option>
                </select>
              </form>
            </div>
          </div> */}
        </div>
        <div className="row tr-movie-active">
          {items.map((elem) => {
            const image = "./poster/" + elem.poster;
            return (
              <motion.div
                className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                key={elem.id}
              >
                <div className="movie-item mb-60">
                  <motion.div className="movie-poster">
                    <a
                      onClick={() => {
                        navigate("/movie-details", {
                          state: { onedata: elem, alldata: data },
                        });
                      }}
                    >
                      <img src={image} alt="" />
                    </a>
                  </motion.div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <Link
                          to={{
                            pathname: "/movie-details",
                            state: data,
                          }}
                        >
                          {elem.title}
                        </Link>
                      </h5>
                      <span className="date">{elem.year}</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">{elem.genres}</span>
                        </li>
                        <li>
                          <span className="duration">
                            <i className="far fa-clock" />
                            {elem.runtime}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrap mt-30">
              <nav>
                <ul className="pagenation-ul"></ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieArea;
