import React from 'react'

import { useState, useEffect } from 'react'

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
    
    <div>{topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}</div>
    
  )
}

export default Home