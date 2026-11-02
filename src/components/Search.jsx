import React from 'react';
import { RadioButton } from "./RadioButton.jsx";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    submitSearch = () => {
        this.props.handleSearch(this.state.search, this.state.type);
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.submitSearch();
        }
    }

    searchMovies = (event) => {
        const selectedType = event.target.dataset.type;

        this.setState({ type: selectedType }, () => {
            if (this.state.search.trim()) {
                this.props.handleSearch(this.state.search, this.state.type);
            }
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field search-field">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="text"
                            value={this.state.search}
                            onChange={(event) => { this.setState({search: event.target.value})}}
                            onKeyDown={this.handleEnter}
                        />
                        <button
                            className="btn"
                            type="button"
                            onClick={this.submitSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="col s12 search-types">
                    <RadioButton
                        title="All"
                        datatype="all"
                        checked={this.state.type === 'all'}
                        onChange={this.searchMovies}
                    />
                    <RadioButton
                        title="Movies only"
                        datatype="movie"
                        checked={this.state.type === 'movie'}
                        onChange={this.searchMovies}
                    />
                    <RadioButton
                        title="Series only"
                        datatype="series"
                        checked={this.state.type === 'series'}
                        onChange={this.searchMovies}
                    />
                </div>
            </div>
        );
    }
}

export { Search };
