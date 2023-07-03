import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
        // Perform your search here...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe algo..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default Search;