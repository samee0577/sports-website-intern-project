export default function SportsCard({ title, image, description, facts }) {
  return (
    <div className="w-auto my-8 p-3 flex flex-col items-start mx-auto bg-blue-400/20 rounded-2xl shadow-xl max-w-sm border border-blue-300 hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-xl bg-gray-100 mb-4 shadow-md"
      />
      <div className="flex flex-col px-3 w-full">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 text-base mb-3">{description}</p>
        <ul className="text-blue-100 text-sm mb-2 list-disc list-inside space-y-1 pl-2">
          {facts && facts.map((fact, i) => <li key={i}>{fact}</li>)}
        </ul>
      </div>
    </div>
  );
}