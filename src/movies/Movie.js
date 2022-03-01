import PropTypes from 'prop-types'

export function Movie({movie, config}) {
    return (
        <li className='movie-item'>
            {config.images?.base_url && (
                <img
                    src={config.images.base_url + 'w342' + movie.poster_path}
                    alt={movie.title}/>
            )}
            <h5>{movie.title}</h5>
        </li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired
}