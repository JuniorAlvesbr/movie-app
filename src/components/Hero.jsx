export default function Hero({ hero }) {
  if (hero) {
    return (
      <header className="fixed w-screen h-[440px] z-50 bg-black">
        <div className="absolute w-1/3 top-1/3 left-5 z-50">
          <h1 className="text-5xl">{hero.title}</h1>
          <p>{hero.overview}</p>
        </div>
        <div
          className="w-[70vw] h-full bg-no-repeat bg-cover bg-top ml-auto relative after:content-[''] after:absolute after:inset-0 after:bg-hero-degrade overflow-hidden"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${hero.backdrop_path})` }}
        >
        </div>
      </header>
    )
  }
}