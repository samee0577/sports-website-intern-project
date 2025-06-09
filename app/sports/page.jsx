import { sports } from "@/data/sports";
import SportCard from "@/components/SportsCard";

export default function Sports() {
  return (
    <div className="min-h-screen py-10 px-2">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-4 text-center drop-shadow-lg">
          Explore Sports
        </h1>
        <p className="text-blue-100 mb-10 text-center text-lg max-w-2xl mx-auto">
          Discover the world’s most exciting sports, their history, and fascinating
          facts. Click on any card to learn more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <SportCard
              key={sport.slug}
              title={sport.name}
              image={sport.image}
              description={sport.description}
              facts={sport.facts}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
