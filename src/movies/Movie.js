import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export function Movie({movie, config}) {
    return (
        <li className='movie-item'>
            <Link to='/movie-detail'>
                {config.images?.base_url && (
                    <img
                        src={config.images.base_url + 'w342' + movie.poster_path}
                        alt={movie.title}/>
                )}
                <h5>{movie.title}</h5>
            </Link>
        </li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired
}