import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Movies() { 
  
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        if (!searchText) {
        setMovies([]);
        return;
        }
        fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setMovies(data.map(item => item.show));
    })
        
        }, [searchText]);
    return (
    <>
        <Navbar />

        <div>
            <h1>Movies</h1>

            <input
                type="text"
                placeholder="Search movie..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDetails={setSelectedMovie}
                    />
                ))}
            </div>

            {selectedMovie && (
                <div className="movie-details">
                    <img
                        src={selectedMovie.image?.original}
                        alt={selectedMovie.name}
                    />

                    <h2>{selectedMovie.name}</h2>

                    <p>Year: {selectedMovie.premiered?.slice(0, 4)}</p>

                    <p>Rating: {selectedMovie.rating?.average ?? "N/A"}</p>
                    
                    <p>Genres: {selectedMovie.genres?.join(", ") || "N/A"}</p>

                    <p>{selectedMovie.summary}</p>

                    <button onClick={() => setSelectedMovie(null)}>
                        Close
                    </button>
                </div>
            )}

           
        </div>

        <Footer />
    </>
);
        
    
}

export default Movies;