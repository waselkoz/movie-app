import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
                </div>
                <div className="card-back">
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <div className="rating">
                        {'★'.repeat(movie.rating)}
                        {'☆'.repeat(5 - movie.rating)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
