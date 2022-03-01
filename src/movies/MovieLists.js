import {useEffect, useState} from 'react'
import {Movie} from "./Movie";
import {Filter} from "../Filter";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=<API_KEY_HERE>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

export function MoviesList() {
    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (<div>
        <Filter filter={filter} setFilter={setFilter}/>
        <ul>
            {/* Change to lowercase to implement non-case sensitive filter */}
            {movies.filter((movie) => movie.title.toLowerCase()
                .includes(filter))
                .map((movie) =>
                    <Movie
                        key={movie.id}
                        config={config}
                        movie={movie}/>)}
        </ul>
    </div>)
}

