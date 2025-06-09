export default function PlayerCard({ name, sport, image, about }) {
  return (
    <div className="w-72 my-6 p-1 flex flex-col items-start mx-auto bg-blue-400/15 rounded-lg shadow-md max-w-xs border border-blue-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-md bg-gray-100 mb-3"
      />
      <div className="flex flex-col px-2">
        <h1 className="text-2xl font-semibold text-white">{name}</h1>
        <p className="text-gray-400 text-sm mb-2">Sport: {sport}</p>
        <p className="text-gray-200 mb-2 text-base line-clamp-2">
          {about}
        </p>
      </div>
    </div>
  );
}