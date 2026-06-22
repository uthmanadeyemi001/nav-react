import React from 'react'
import "../styles/moviediv.css"
const MovieDiv = ({ moviesArray }) => {
  return (
    <div className='moviediv'>
        {moviesArray.map((movie) => (
          <div className='smallbox'>
            <img src={movie.image} alt={movie.name} />
            <span>{movie.name}</span>
          </div>
        ))}
    </div>
  );
}
export default MovieDiv;
