export default function AboutPage() {
  return (
    <div className="align-left max-w-full mx-12 py-12 px-4 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">About SportsHub</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-200">Why is Sports Played?</h2>
        <p className="mb-4">
          Sports are played for enjoyment, competition, health, and social connection. They bring people together, foster teamwork, and teach valuable life lessons such as discipline, perseverance, and respect. Whether for fun or at the highest level, sports inspire millions to push their limits and strive for greatness.
        </p>
      </section>

      <section className="mb-8 bg-gray-800/60 rounded-xl shadow-lg p-8 transition-color transition-transform-ease-in  
      duration-300 hover:scale-103 hover:shadow-lg hover:shadow-blue-400/30 hover:text-shadow-[0_1px_4px_rgba(255,255,255,0.5)]">
        <h2 className="text-2xl font-semibold mb-2 text-blue-200 ">Importance of Sports</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-base hover:text-white transition-colors duration-300 ">
          <li>Promotes physical and mental health</li>
          <li>Builds teamwork and leadership skills</li>
          <li>Encourages discipline and time management</li>
          <li>Brings communities and nations together</li>
          <li>Provides entertainment and inspiration</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-200">History & Culture</h2>
        <p className="mb-4">
          Sports have been a part of human civilization for thousands of years, from the ancient Olympic Games in Greece to traditional games in every culture. They reflect the values, struggles, and triumphs of societies, and often serve as a bridge between different cultures and generations.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-200">More Than a Game</h2>
        <p>
          Sports are more than just games—they are a celebration of human potential. They inspire hope, break barriers, and create unforgettable moments. At SportsHub, we celebrate the athletes, the fans, and the stories that make sports a powerful force in our world.
        </p>
      </section>
      <div className="mt-10 text-center italic text-blue-400">
        "Sports do not build character. They reveal it." — Heywood Broun
      </div>
    </div>
  );
}
