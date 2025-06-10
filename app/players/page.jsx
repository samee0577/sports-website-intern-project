import { players } from "@/data/players";
import PlayerCard from "@/components/PlayerCard";
import Link from "next/link";

export default function PlayersPage() {
  return (

    <div className="min-h-screen mx-6  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-4 text-left">
          Meet the Legends
        </h1>
        <p className="text-blue-100 mb-10 text-left text-lg max-w-2xl ">
          Explore the stories and achievements of the world’s most iconic athletes.
          Click on a player to learn more about their journey and legacy!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {players.map((player) => (
            <Link
              key={player.slug}
              href={`/players/${player.slug}`}
              
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
    </div>
  );
}