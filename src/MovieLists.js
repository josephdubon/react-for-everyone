const movies = [{id: 1, name: 'Juice'}, {id: 2, name: 'Don\'t Be A Menace'}, {id: 3, name: 'A Goofy Movie'}]

export function MoviesList() {
    return (<div>
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>{movie.name}</li>
                )
            })}
        </ul>
    </div>)
}