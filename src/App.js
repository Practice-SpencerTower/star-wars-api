import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/') // sends GET request by default
            .then((response) => {
                return response.json(); // returns a promise
            })
            .then((data) => {
                const transformedMovies = data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    };
                });
                setMovies(transformedMovies);
            });
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </React.Fragment>
    );
}

export default App;
