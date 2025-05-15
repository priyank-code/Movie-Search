import React from 'react'

const SearchBar = ({searchMovie, setSearchMovie, fetchMovieData}) => {
  return (
    <div className='p-5 m-auto justify-center flex'>
      <input type="text" name="search" className='p-2 border-[#414079] bg-gray-200 rounded-l-lg max-w-7xl w-sm border-2 outline-none' placeholder='Search here' value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} autoComplete="off" />
      <button className='bg-[#414079] p-2 rounded-r-lg text-white max-w-7xl' onClick={fetchMovieData}>Search</button>
    </div>
  )
}

export default SearchBar