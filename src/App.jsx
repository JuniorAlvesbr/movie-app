import Hero from "./components/Hero"
import Slider from "./components/Slider"
import { MovieContext } from "./providers/movie"


function App() {
  const { movieList, hero, setHero } = MovieContext()

  return (
    <>
      <Hero hero={hero} />

      <main className="pt-[440px]">
        <Slider slideList={movieList.trendWeek} setHero={setHero} />
        <Slider slideList={movieList.actions} setHero={setHero} />
        <Slider slideList={movieList.adventure} setHero={setHero} />
        <Slider slideList={movieList.war} setHero={setHero} />
        <Slider slideList={movieList.horror} setHero={setHero} />
        <Slider slideList={movieList.drama} setHero={setHero} />
      </main>
    </>
  )
}

export default App
