import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <div className="movie-card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
                    </div>
                    <div className="card-back">
                        <h2>{movie.title}</h2>
                        <p>{movie.description.substring(0, 50)}...</p>
                        <div className="rating">
                            {'★'.repeat(movie.rating)}
                            {'☆'.repeat(5 - movie.rating)}
                        </div>
                        <span style={{ fontSize: '0.8rem', marginTop: '10px', textDecoration: 'underline' }}>See Details</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
