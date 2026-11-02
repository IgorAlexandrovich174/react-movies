import { useState, useEffect }from 'react';
import RadioButton from "./RadioButton.jsx";

export default function Search(props) {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const submitSearch = () => {
        props.handleSearch(search, type);
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            submitSearch();
        }
    }

    const searchMovies = (event) => {
        const selectedType = event.target.dataset.type;

        setType(selectedType)

        if (search.trim()) {
            props.handleSearch(search, type);
        }

    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field search-field">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleEnter}
                    />
                    <button
                        className="btn"
                        type="button"
                        onClick={submitSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="col s12 search-types">
                <RadioButton
                    title="All"
                    datatype="all"
                    checked={type === 'all'}
                    onChange={searchMovies}
                />
                <RadioButton
                    title="Movies only"
                    datatype="movie"
                    checked={type === 'movie'}
                    onChange={searchMovies}
                />
                <RadioButton
                    title="Series only"
                    datatype="series"
                    checked={type === 'series'}
                    onChange={searchMovies}
                />
            </div>
        </div>
    );
}
