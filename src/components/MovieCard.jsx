function MovieCard({movie}) {
    const {
        Title,
        Poster
    } = movie

    return (
        <div className="card">
            <div className="card-image">
                { Poster === 'N/A' ?
                    <img src="https://placehold.co/600x400" alt="" />
                    : <img src={Poster} alt="" />
                }

            </div>
            <div className="card-content">
                <span className="card-title">{Title}</span>
            </div>
        </div>
    )
}

export {MovieCard}