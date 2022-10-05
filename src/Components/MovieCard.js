//Import react
import React from "react";


const MovieCard = (props) => {
    return ( 
        <div className="movie-card">
             <img src={props.poster} alt={props.title + ' poster'} className="movie-card-img" /> 
            <p>{props.title}</p>
            <p>{props.plot}</p>
            <p>{props.released ? props.released : props.year}</p>
        </div>
    );
}
export default MovieCard;