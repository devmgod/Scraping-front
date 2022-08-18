import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EpipsodeArea from "../components/moviedetails/EpipsodeArea";
import MovieDetail from "../components/moviedetails/MovieDetail";
import TvSeries from "../components/moviedetails/TvSeries";

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header tabIndex={2} />
      <main>
        <MovieDetail />
        {/* <EpipsodeArea/> */}
        <TvSeries />
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
