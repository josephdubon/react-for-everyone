const movies = [{name: 'Juice'}, {name: 'Don\'t Be A Menace'}, {name: 'A Goofy Movie'},]

export function MoviesList() {
    return (<div>
        <ul>
            {movies.map((movie) => {
                return (
                    <div>
                        <li key={movie.name}>{movie.name}</li>
                    </div>
                )
            })}
        </ul>
    </div>)
}