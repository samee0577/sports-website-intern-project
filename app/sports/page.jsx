import { sports } from "@/data/sports";
import SportCard from "@/components/SportsCard";
import Link from "next/link";
import Image from "next/image";
import Car from "@/public/svg/car.svg";

export default function Sports() {
  return (
    <div className="min-h-screen py-10 px-2 relative">
      {/* Background Car Image */}
      <div className="absolute bottom-20 right-40 scale-200 opacity-40  z-0 pointer-events-none">
        <Image
          src={Car}
          alt="Background Car"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-full m-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-4 text-left drop-shadow-lg">
          Explore Sports
        </h1>
        <p className="text-blue-100 mb-10 text-left text-lg max-w-full">
          Discover the world's most exciting sports, their history, and fascinating
          facts. Click on any card to learn more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              href={`/sports/${sport.slug}`}
              className="hover:scale-105 transition-transform duration-300"
            >
              <SportCard
                title={sport.name}
                image={sport.image}
                description={sport.description}
                facts={sport.facts}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
