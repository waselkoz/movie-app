import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (newMovie) => {
    // Generate a new ID based on the last movie's ID + 1
    const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
    setMovies([...movies, { ...newMovie, id: newId }]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
    );
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <header className="app-header">
                <h1>Movie Verse</h1>
                <Filter
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRate={filterRate}
                  setFilterRate={setFilterRate}
                />
              </header>
              <main>
                <AddMovie addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </main>
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
