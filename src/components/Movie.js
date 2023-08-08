import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ year, title, poster, summary}) {
    return (
        <div className="movie">
            <Link to = {{
                pathname: "/movie-detail",
                state: { year, title, poster, summary },
            }}
            >
            <img src={"https://image.tmdb.org/t/p/w500" + poster} alt={title} title={title} />
            <div className="movie__data">
                <h2 className="movie__title" >{title}</h2>
                <h5 className="movie__year">{year}</h5>
                {/* <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie_genre">{genre}</li>;
                    })}
                </ul> */}
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
