import React from 'react';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
        <Link to={`/movie/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
        </Link>
    ))}
    <Link to='/' component={MovieList} exact>
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
