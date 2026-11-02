import React from 'react';
import { MoviesList } from "../components/MoviesList.jsx";
import { Preloader } from "../components/Preloader.jsx";
import { Search } from "../components/Search.jsx";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    basicFetch = (searchValue, type = 'all') => {
        this.setState({ loading: true });

        const typeQuery = type !== 'all' ? `&type=${type}` : '';

        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}${typeQuery}`)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error('Network error');
            })
            .then(data => {
                this.setState({ movies: data.Search || [], loading: false });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    handleSearch = (searchValue, type) => {
        this.basicFetch(searchValue, type);
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Search handleSearch={this.handleSearch}/>

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

    componentDidMount() {
        this.basicFetch('matrix');
    }
}

export { Main };
