import React, { useState } from "react";
import Parent from "../components/Parent";
import MovieDiv from "../components/MovieDiv";
import wednesdayImg from "../assets/wednesday.webp";
import neroImg from "../assets/Nero.webp";

const Addmovie = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([
    { name: "Wednesday", image: wednesdayImg },
    { name: "Nero", image: wednesdayImg }
  ]);
  const[editIndex,setEditIndex] = useState()
  const [keyword, setKeyword] = useState("")
   const filtered = movies.filter(movie => movie.name.toLowerCase().includes(keyword.toLowerCase()))




  const AddToMoviesArray = () => {
    if (movieName.trim()) {
      setMovies([...movies, { name: movieName, image: neroImg }]);
      setMovies([...movies, { name: movieName, image: neroImg }]);

      setMovieName("");
    }
  };
  const EditMovieName = (id) => {
    setEditIndex(id)
    setMovieName(movies[id].name);
  };

   const updateMovies = () => {
     if (editIndex !== undefined) {
       movies[editIndex] = { name: movieName, image: movies[editIndex].image };
       setMovies([...movies]);
       setMovieName("");
       setEditIndex(undefined);
     }
   }

  const DeleteMovie = (id) => {
    setMovies(movies.filter((_,idx) => idx !== id) )
  }

  const handleSearch =(e) =>{
    setKeyword (e.target.value)
    // setMovies(filtered)
  }

 

  return (
    <div>
      <h1>addmovie</h1>
      {/* {movieName} */}
      <input
        onChange={(e) => setMovieName(e.target.value)}
        type="text"
        placeholder="add your movie"
        value={movieName}
      />
      <input type="text" placeholder="search for movies" onChange={handleSearch} />
      <button onClick={AddToMoviesArray}>Add</button>
      <button onClick= {updateMovies} >update</button>

      {filtered.map((movie, id) => (
        <div key={id}>
          <h1>{movie.name}</h1>
          <button
            onClick={() => {
              EditMovieName(id);
            }}
          >
            edit
          </button>

          <button onClick={()=> DeleteMovie(id)}>delete</button>
        </div>
      ))}



      <Parent currentMovie = {movieName}/>

      <MovieDiv moviesArray={movies}/>
    </div>
  );
};

export default Addmovie;
