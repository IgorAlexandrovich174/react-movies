import {MovieCard} from "./MovieCard.jsx";

function MoviesList({ moviesList }) {
    return (
        <div className="row">
            {moviesList?.map(movie => (
                <div className="col s12 m6 l3" key={movie.imdbID}>
                    <MovieCard movie={movie}/>
                </div>
            ))}
        </div>
    )
}

export {MoviesList}