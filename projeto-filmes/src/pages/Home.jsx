import React from 'react'

import { useState, useEffect } from 'react'

import MovieCard from '../components/MovieCard'

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Home = () => {
  
  const [topMovies, setTopMovies] = useState([])

  // (getTopRatedMovies) busca os melhores filmes e coloca-os na variavel (topMovies)

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results)
  }

  useEffect(()=>{
    // (topRateUrl) é uma variavel que possui a url dos melhores filmes e vai substituir o parametro (url)
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
    
  )
}

export default Home