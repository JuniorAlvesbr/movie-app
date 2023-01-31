export default function Hero({ hero }) {
  if (hero) {
    return (
      <div
        className="h-[650px] w-full bg-no-repeat bg-cover bg-top relative after:content-[''] after:absolute after:inset-0 after:bg-hero-degrade overflow-hidden"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${hero.backdrop_path})` }}
      >
        <div className="absolute w-1/3 top-1/2 left-10 z-50">
          <h1 className="text-6xl">{hero.title}</h1>
          <p>
            {hero.overview}
          </p>
        </div>
      </div >
    )
  }
}