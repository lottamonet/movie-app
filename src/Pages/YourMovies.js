import React, {useState, useEffect, useCallback} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MovieCard from "../Components/MovieCard";
import { data } from "../Data/starterData";




const YourMovies = () => {
    
    const [searchMovie, setSearchMovie] = useState({movieSearch: ''});
    const [movieData, setMovieData] = useState(data);
    const [pressed, setPressed] = useState(false);

    function handlePressed() {
        setPressed(true);
    }

    const handleSearchMovie = (e) => {
        const value = e.target.value;
        setSearchMovie({ ...searchMovie, [e.target.name]: value });
        console.log(searchMovie);
    };

    
        const getMovie = useCallback(async (title) => {
            title = searchMovie.movieSearch;
            let response = await fetch(`https://www.omdbapi.com/?apikey=11448ed6&t=${title}}`);  
            let movieData = await response.json();
            console.log(movieData, 'test movieData');
            let movieDataArr = [];
            movieDataArr.push(movieData)
            console.log(movieDataArr, 'test movie data array');
            setMovieData(movieDataArr);
            handlePressed();
        }, [searchMovie.movieSearch]);

    


  useEffect(() => {
    if (pressed === true) {
    getMovie();
    }
  }, [getMovie, pressed]);

    return ( 
        <div id="body">
            <Header title1 = "Your " title2="Movies" />
            <div id="search-section">
                <label htmlFor="search" id="search-label" >Search</label><br/>
                <input type="search" name="movieSearch" id="movie"  value={searchMovie.movieSearch}  onChange={e => handleSearchMovie(e)} /><br/>
                <button type="submit" id="search-btn" onClick={getMovie} >Search</button>
            </div>
            <div id="movie-card-section">
                {
                    movieData[0].Title ? (
                        movieData.map((obj, id) => (
                            <MovieCard poster={obj.Poster} title={obj.Title} plot={obj.Plot} released={obj.Released} year={obj.Year} key={obj.Title + id} />
                )) 
                    ) : (
                        data.map((obj, id) => (
                            <MovieCard poster={obj.Poster} title={obj.Title} plot={obj.Plot} released={obj.Released} year={obj.Year} key={obj.Title + id} />
                ))
                    )
                        }    
            </div>
            <div id="footer-section">
                <Footer title="Your Movies" />
            </div>
        </div>
    );
}

export default YourMovies;