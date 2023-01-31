import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

const Context = createContext({})

export const MovieContext = () => useContext(Context)

export default function MovieProvider(props) {
  const [hero, setHero] = useState('')
  const [trendWeek, setTrendWeek] = useState([])
  const [actions, setActions] = useState([])
  const [adventure, setAdventure] = useState([])
  const [war, setWar] = useState([])
  const [horror, setHorror] = useState([])
  const [drama, setDrama] = useState([])

  const getTrendWeek = () => {
    api.get('/trending/movie/week')
      .then(Response => {
        setTrendWeek(Response.data.results)
        setHero(Response.data.results[0])
      })
      .catch(error => console.log(error))
  }

  const genreList = [
    {
      name: "Filmes de Ação",
      id: 28,
      setState: setActions
    },
    {
      id: 12,
      setState: setAdventure,
    },
    {
      id: 10752,
      setState: setWar
    },
    {
      id: 27,
      setState: setHorror
    },
    {
      id: 18,
      setState: setDrama
    },
  ]

  const getGenresMovies = (list) => {
    list.forEach(item =>
      api.get('/discover/movie', {
        params: {
          "with_genres": item.id,
          "sort_by": "popularity.desc"
        }
      })
        .then(Response => item.setState(Response.data.results))
        .catch(error => console.log(error))
    )
  }

  useEffect(() => {
    getTrendWeek()
    getGenresMovies(genreList)
  }, [])

  const movieList = {
    trendWeek: {
      name: "Top da Semana",
      genre: trendWeek
    },
    actions: {
      name: "Filmes de Ação",
      genre: actions,
    },
    adventure: {
      name: "Filmes de Aventura",
      genre: adventure,
    },
    war: {
      name: "Filmes de Gerra",
      genre: war,
    },
    horror: {
      name: "Filmes de Terror",
      genre: horror,
    },
    drama: {
      name: "Filmes de Ficção cientifica",
      genre: drama,
    },
  }

  return (
    <Context.Provider value={{ trendWeek, movieList, hero, setHero }}>
      {props.children}
    </Context.Provider>
  )
}