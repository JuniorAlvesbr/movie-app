import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Slider from "./components/Slider"

import api from './services/api'

function App() {
  const [hero, setHero] = useState('')
  const [trendWeek, setTrendWeek] = useState([])

  useEffect(() => {
    api.get('/trending/movie/week')
      .then(Response => {
        setTrendWeek(Response.data.results)
        setHero(Response.data.results[0])
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <header>
        <Hero hero={hero} />
      </header>
      <main>
        <Slider trendWeek={trendWeek} setHero={setHero} />
      </main>
    </>
  )
}

export default App
