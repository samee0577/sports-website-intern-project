import { players } from "@/data/players";
import Image from "next/image";
import Link from "next/link";

export default function PlayerDetail({ params }) {
  const player = players.find((p) => p.slug === params.slug);

  if (!player) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Player Not Found</h1>
        <Link href="/players" className="btn mt-4">Back to Players</Link>
      </div>
    );
  }

  return (
    <div className="mx-12 py-12 px-4 flex flex-col items-left">
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-700 p-8">
        {/* Back button at the top right inside the card */}
        <Link
          href="/players"
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition-all duration-200 border border-blue-300"
        >
          <span className="text-base">←</span>
          <span>Back</span>
        </Link>
        <div className="w-100 h-auto mb-6 md:mb-0 md:mr-8 flex-shrink-0 rounded-lg overflow-hidden border-1 border-blue-400 shadow-lg">
          <Image
            src={player.image || "/file.svg"}
            alt={player.name}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 text-white">
          <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
          <p className="text-blue-300 text-lg mb-2">{player.sport}</p>
          <p className="mb-4 text-gray-200">{player.about}</p>
          {/* Add Wikipedia Link */}
          <a
            href={player.wikiUrl}
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
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-200">Achievements</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {player.achievements?.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}