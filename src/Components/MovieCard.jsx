function MovieCard({ movie, onDetails }) {
    return (
        <div className="movie-card">
            <h3>{movie.name}</h3>
            <img src={movie.image?.medium} alt={movie.name} />
            {/* <p>{movie.image ? "Image ache" : "Image nai"}</p> */}
            <p>Year: {movie.premiered?.slice(0, 4)}</p>
            <p>Rating: {movie.rating?.average ?? "N/A"}</p>
            <button onClick={() => onDetails(movie)}>See Details</button>
            {/* <p>{movie.summary}</p> */}
        </div>
    );
}

export default MovieCard;