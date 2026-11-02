import React, { useState, useEffect } from 'react';
import { MoviesList } from "../components/MoviesList.jsx";
import { Preloader } from "../components/Preloader.jsx";
import { Search } from "../components/Search.jsx";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const basicFetch = (searchValue, type = 'all') => {
        setLoading(true)

        const typeQuery = type !== 'all' ? `&type=${type}` : '';

        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}${typeQuery}`)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error('Network error');
            })
            .then(data => {
                setMovies(data.Search || [])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
    }

    const handleSearch = (searchValue, type) => {
       basicFetch(searchValue, type);
    }

    useEffect(() => {
        basicFetch('matrix');
    }, [])

    return (
        <main className='container content'>
            <Search handleSearch={handleSearch}/>
            {loading ? (
                <Preloader />
            ) : movies.length ? (
                <MoviesList moviesList={movies}/>
            ) : (
                <h4>Nothing found</h4>
            )}
        </main>
    );
}
