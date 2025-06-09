import { players } from "@/data/players";
import PlayerCard from "@/components/PlayerCard";
import Link from "next/link";

export default function PlayersPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Players</h1>
      <p className="text-gray-300 mb-8">Welcome to the Players page!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/players/${player.slug}`}
            className="hover:scale-110 transition-transform duration-300"
          >
            <PlayerCard
              name={player.name}
              sport={player.sport}
              image={player.image}
              about={player.about}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}