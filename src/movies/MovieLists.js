import {useEffect, useState} from 'react'
import {Movie} from "./Movie";
import {Filter} from "../Filter";

const movies = [{id: 1, name: 'Juice'}, {id: 2, name: 'Don\'t Be A Menace'}, {id: 3, name: 'A Goofy Movie'},]

export function MoviesList() {
    const [filter, setFilter] = useState('')

    useEffect(() => {
        console.log('hit effect!')
    }, [filter])

    return (<div>
        <Filter filter={filter} setFilter={setFilter}/>
        <ul>
            {/* Change to lowercase to implement non-case sensitive filter */}
            {movies.filter((movie) =>
                movie.name.toLowerCase()
                    .includes(filter))
                .map((movie) =>
                    <Movie key={movie.id} movie={movie}/>
                )}
        </ul>
    </div>)
}

