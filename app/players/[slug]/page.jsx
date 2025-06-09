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
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-700 p-8">
        <div className="w-40 h-40 mb-6 md:mb-0 md:mr-8 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
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
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-200">Achievements</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {player.achievements?.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
          <Link href="/players" className="btn mt-6 inline-block">← Back to Players</Link>
        </div>
      </div>
    </div>
  );
}