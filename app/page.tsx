import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <section className="text-center py-20 text-white">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400 drop-shadow-lg ">Welcome to the world of Sports</h1>
        <p className="text-gray-300 mb-8">Your one-stop destination for all things sports</p>
        <a
          href="/sports"
          className="bg-gradient-to-r from-blue-700/60 to-blue-400/30 border border-blue-500/30 hover:border-blue-400 text-blue-200 font-semibold py-4 px-6 rounded-full hover:shadow-[0_6px_24px_0_rgba(59,130,246,0.25)] transition-shadow duration-200"
        >
          Explore Categories
        </a>
      </section>

      <section className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-lg mb-8 text-gray-200">
          SportsHub is your gateway to everything sports — explore legendary games,
          know the great players, and understand the history that shaped them.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 py-8 bg-gray-800/50 w-full max-w-6xl rounded-xl shadow-lg">
        {/* Card 1 */}
        <Link
          href="/about"
          className="relative shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-200 border border-gray-700 overflow-hidden flex flex-col justify-end min-h-[320px] group"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmBtgfoGrlN5BqorgYoFDVdGs-97xbqLSkg&s')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-xl z-0 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-blue-300">About Sports</h3>
            <p className="mb-4 text-gray-300">History, culture, and why sports matter.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/sports"
          className="relative shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-200 border border-gray-700 overflow-hidden flex flex-col justify-end min-h-[320px] group"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/045/658/844/non_2x/athlete-sport-design-illustration-art-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-xl z-0 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Explore Sports</h3>
            <p className="mb-4 text-gray-300">Dive into different sports categories.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          href="/players"
          className="relative shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-200 border border-gray-700 overflow-hidden flex flex-col justify-end min-h-[320px] group"
          style={{
            backgroundImage:
              "url('https://static0.givemesportimages.com/wordpress/wp-content/uploads/2025/01/epl_most-famous-athletes.jpg?q=70&fit=contain&w=1200&h=628&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-xl z-0 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Famous Players</h3>
            <p className="mb-4 text-gray-300">Legends who changed the game forever.</p>
          </div>
        </Link>
      </section>

      <section className="text-center mt-16 mb-12 text-gray-400 italic">
        "The only way to prove that you’re a good sport is to lose." — Ernie Banks
      </section>
    </div>
  );
}
