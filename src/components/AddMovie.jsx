import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: 1
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMovie.title && newMovie.posterURL) {
            addMovie({ ...newMovie, rating: Number(newMovie.rating) });
            setNewMovie({ title: '', description: '', posterURL: '', rating: 1 });
            setShow(false);
        }
    };

    return (
        <div className="add-movie-section">
            <button className="add-btn" onClick={() => setShow(!show)}>
                {show ? 'Close' : 'Add New Movie'}
            </button>

            {show && (
                <form className="add-form" onSubmit={handleSubmit}>
                    <input name="title" placeholder="Title" onChange={handleChange} value={newMovie.title} required />
                    <input name="description" placeholder="Description" onChange={handleChange} value={newMovie.description} />
                    <input name="posterURL" placeholder="Poster URL" onChange={handleChange} value={newMovie.posterURL} required />
                    <input type="number" name="rating" min="1" max="5" onChange={handleChange} value={newMovie.rating} />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default AddMovie;
