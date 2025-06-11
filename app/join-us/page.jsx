import Image from "next/image";
import rugby from "@/public/svg/rugby.svg";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto py-16 px-6 text-gray-200 relative">
      {/* Background Rugby Image */}
      <div className="fixed top-1/2 -right-20 -translate-y-1/2 opacity-20 z-0 pointer-events-none">
        <Image
          src={rugby}
          alt="Background Rugby"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
            Join SportsHub
          </h1>
          <p className="text-lg text-gray-300">
            Become a part of our sports community!
          </p>
        </div>

        <div className="bg-gray-800 h- auto rounded-xl shadow-lg p-6 border border-gray-700/50">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfQeCIrR-25qYSKQ82NzwM3wb2PdQ9jwC5NgLxV5DCDzVEKEA/viewform?embedded=true"
            className="w-full h-[800px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <p className="text-center text-blue-400 italic">
          "Alone we can do so little; together we can do much." — Helen Keller
        </p>
      </div>
    </div>
  );
}
