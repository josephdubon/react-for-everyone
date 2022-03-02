import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=66fc13ab589d1d905e3a3546e4bbc9f2'

export function MovieDetail() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try {
            const res = await fetch(BASE_URL + id + API_KEY)
            const newMovie = await res.json()
            setMovie(newMovie)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getMovie().then(r => console.log(movie))
    }, [id])

    if (!movie.title) return null

    return (<div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>

        <ul>
            <h3>Genres:</h3>
            {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    </div>)
}