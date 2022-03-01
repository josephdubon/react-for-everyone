import PropTypes from 'prop-types'

export function Movie({movie}) {
    return (
        <>
            <li>
                {config.images?.base_url && (
                    <img
                        src={config.images.base_url + 'w342' + movie.poster_path}
                        alt={movie.title}/>
                )}
                <h3>{movie.title + 'Poster'}</h3>
            </li>

        </>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}