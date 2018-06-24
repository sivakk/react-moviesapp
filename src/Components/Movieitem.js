import React, { Component } from "react";

const urlComponent = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";

const Movieitem = ({ movie }) => {
  if (!movie) {
    return <div>Loading....</div>;
  }
  return (
    <div className="row">
    <div className="grid">
    		    <div className="thumbnail">
    		      <a href={movieUrl+movie.id} target="_blank"><img src={urlComponent+movie.poster_path} alt={movie.title+ " Image"} /></a>
    		      <div className="caption">
    		        <h3>{movie.title}</h3>
    		        <p>{movie.overview}</p>


    		      </div>
    		    </div>
    		  </div>
        </div>


  );
};

export default Movieitem;
