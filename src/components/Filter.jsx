import React from 'react';

const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Search by Title..."
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
                className="filter-input"
            />
            <input
                type="number"
                min="0"
                max="5"
                placeholder="Rating"
                value={filterRate}
                onChange={(e) => setFilterRate(e.target.value)}
                className="filter-input"
            />
        </div>
    );
};

export default Filter;
