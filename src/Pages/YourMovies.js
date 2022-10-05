import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MovieCard from "../Components/MovieCard";
import { data } from "../Data/starterData";




const YourMovies = () => {
    
    const [searchMovie, setSearchMovie] = useState({movieSearch: ''});
    const [movieData, setMovieData] = useState(data);

    const handleSearchMovie = (e) => {
        const value = e.target.value;
        setSearchMovie({ ...searchMovie, [e.target.name]: value });
        console.log(searchMovie);
    };

    async function getMovie(title, i) {
        title = searchMovie.movieSearch;
         let response = await fetch(`http://www.omdbapi.com/?apikey=11448ed6&t=${title}}`);  
        let movieData = await response.json();
        console.log(movieData, 'test movieData');
        let movieDataArr = [];
        movieDataArr.push(movieData)
        console.log(movieDataArr, 'test movie data array');
        setMovieData(movieDataArr);
    }
  useEffect(() => {
    getMovie(searchMovie.movieSearch)
  }, [searchMovie]);

    return ( 
        <div id="body">
            <Header title1 = "Your " title2="Movies" />
            <div id="search-section">
                <label htmlFor="search" id="search-label" >Search</label><br/>
                <input type="search" name="movieSearch" id="movie"  value={searchMovie.movieSearch} onChange={e => handleSearchMovie(e)} /><br/>
                <button type="submit" id="search-btn">Search</button>
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