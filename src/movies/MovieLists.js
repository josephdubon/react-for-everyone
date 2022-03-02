import {useEffect, useState} from 'react'
import {Movie} from "./Movie";
import {Filter} from "../Filter";

// exposed api key -it is okay it is a free one
const API_URL = 'https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key='
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key='

export function MoviesList() {
    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState([])

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL + process.env.REACT_APP_API_KEY)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.error(e)
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.REACT_APP_API_KEY)
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
        <Filter filter={filter} setFilter={setFilter}/>
        <ul className='movies-list'>
            {/* Change to lowercase to implement non-case sensitive filter */}
            {movies.filter((movie) => movie.title.toLowerCase()
                .includes(filter))
                .map((movie) => <Movie
                    key={movie.id}
                    config={config}
                    movie={movie}/>)}
        </ul>
    </div>)
}

