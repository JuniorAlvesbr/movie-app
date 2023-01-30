export default function Hero() {
  return (
    <div
      className="bg-[url('https://image.tmdb.org/t/p/original/evaFLqtswezLosllRZtJNMiO1UR.jpg')] h-[650px] w-screen bg-no-repeat bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-hero-degrade"
    >
      <div className="absolute w-1/3 top-1/2 left-10 z-50">
        <h1 className="text-6xl">Avatar</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero nostrum ipsa quo quis enim eum doloremque? Sint amet nesciunt consectetur, perferendis, similique quis eveniet laudantium velit rem obcaecati odio!
        </p>
      </div>
    </div >
  )
}