import {React, useState} from "react";
import SearchBar from '../Components/SearchBar'
import MovieCard from '../Components/MovieCard'
import Navbar from '../Components/Navbar'

const Hero = () => {

  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try{
      setLoading(true);
      const result = await fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=cff72bc9`);
      const data = await result.json();
      setAllMovieData(data.Search);
      console.log(data.Search);
      setLoading(false);
    }
    catch(e){
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <><div className="bd">
      <Navbar />
      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        fetchMovieData={fetchMovieData}
      />
      <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </>
  );
};

export default Hero;
