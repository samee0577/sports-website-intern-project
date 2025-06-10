export default function SportsCard({ title, image, description, facts }) {
  return (
    <div className="w-80 p-1 border-b flex flex-col items-start mx-auto bg-blue-400/20 rounded-2xl shadow-xl max-w-sm border border-blue-300 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-t-xl border-b border-blue-300 bg-gray-100 mb-4 shadow-md"
      />
      <div className="flex flex-col px-3 w-full">
        <h2 className="text-2xl font-bold text-blue-100 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-black/30 p-2 rounded-lg">
          {title}
        </h2>
        <div className="relative">
          <p className="text-gray-200 text-base mb-8 bg-black/20 p-2 rounded line-clamp-3">
            {description}
          </p>
          <span className="text-blue-300 text-sm font-medium hover:text-blue-200 transition-colors cursor-pointer absolute bottom-1 right-2">
            See more →
          </span>
        </div>
      </div>
    </div>
  );
}