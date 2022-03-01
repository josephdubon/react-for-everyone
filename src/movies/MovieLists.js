import {useState} from 'react'

const movies = [{id: 1, name: 'Juice'}, {id: 2, name: 'Don\'t Be A Menace'}, {id: 3, name: 'A Goofy Movie'},]

export function MoviesList() {
    const [filter, setFilter] = useState('')

    return (<div>
        <Filter filter={filter} setFilter={setFilter}/>
        <ul>
            {/* Change to lowercase to implement non-case sensitive filter */}
            {movies.filter((movie) =>
                movie.name.toLowerCase().includes(filter)).map((movie) =>
                <li key={movie.id}>{movie.name}</li>)}
        </ul>
    </div>)
}

