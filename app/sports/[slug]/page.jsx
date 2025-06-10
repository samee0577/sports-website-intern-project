import { sports } from "@/data/sports";
import Image from "next/image";
import Link from "next/link";

export default function SportDetail({ params }) {
  const sport = sports.find((s) => s.slug === params.slug);

  if (!sport) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Sport Not Found</h1>
        <Link href="/sports" className="btn mt-4">Back to Sports</Link>
      </div>
    );
  }

  return (
    <div className="mx-12 py-12 px-4 flex flex-col items-left">
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-700 p-8">
        {/* Back button */}
        <Link
          href="/sports"
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all duration-200 border border-blue-300"
        >
          <span className="text-base">←</span>
          <span>Back</span>
        </Link>

        {/* Sport Image */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8 flex-shrink-0 rounded-lg overflow-hidden border border-blue-400/30 shadow-lg">
          <Image
            src={sport.image}
            alt={sport.name}
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Sport Details */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold mb-4 text-blue-200">{sport.name}</h1>
          <p className="mb-6 text-gray-200 text-lg leading-relaxed">
            {sport.description}
          </p>
          
          {/* Add Wikipedia Link */}
          <a
            href={sport.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-300 hover:text-blue-200 transition-colors mb-6 border border-blue-500/30"
          >
            <span>Read more on Wikipedia</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>

          <div className="bg-black/20 rounded-xl p-6 border border-blue-400/20">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              Key Facts
            </h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {sport.facts?.map((fact, i) => (
                <li key={i} className="text-lg">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}