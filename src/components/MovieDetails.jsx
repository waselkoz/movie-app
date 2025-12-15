import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Movie not found!</div>;
    }

    return (
        <div className="movie-details-container" style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div className="trailer-container" style={{ margin: '2rem auto', maxWidth: '800px' }}>
                <iframe
                    width="100%"
                    height="450"
                    src={movie.trailerURL}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#03dac6',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default MovieDetails;
