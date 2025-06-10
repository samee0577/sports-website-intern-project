
import rugby from "@/public/svg/rugby.svg";
export default function JoinUsPage() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-gray-200">
      
      {/* Background Rugby Image */}
      <div className="absolute top-100 right-10 scale-200 opacity-40 z-0 pointer-events-none">
        <img
          src={rugby.src}
          alt="Background Rugby"
          className="object-contain"
          width={400}
          height={400}
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-blue-300 text-center">Join SportsHub</h1>
      <p className="mb-8 text-center text-gray-300">
        Become a part of our sports community!
      </p>
      <form className="bg-gray-800/70 rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block mb-2 text-blue-200 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-blue-400/30 focus:outline-none focus:border-blue-400"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-blue-200 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-blue-400/30 focus:outline-none focus:border-blue-400"
            type="email"
            id="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-blue-200 font-semibold" htmlFor="message">
            message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-blue-400/30 focus:outline-none focus:border-blue-400"
            id="message"
            rows={4}
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="btn w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      <p className="mt-10 text-center text-blue-400 italic">
        "Alone we can do so little; together we can do so much." — Helen Keller
      </p>
    </div>
  );
}
