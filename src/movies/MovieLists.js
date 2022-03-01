import {useEffect, useState} from 'react'
import {Movie} from "./Movie";
import {Filter} from "../Filter";
import Nav from "../Nav";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=66fc13ab589d1d905e3a3546e4bbc9f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=66fc13ab589d1d905e3a3546e4bbc9f2'

export function MoviesList() {
    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState([])

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.error(e)
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL)
            const config = await res.json()
            setConfig(config)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getConfig()
        getMovies()
    }, [])

    return (<div>
        <Nav/>
        <Filter filter={filter} setFilter={setFilter}/>
        <ul className='movies-list'>
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

