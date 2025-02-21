import { points } from "./data";

export function FeaturePoints() {
  return (
    <div className="bg-white rounded-xl p-8 space-y-8">
      {points.map((point) => (
        <div key={point.number} className="transform transition-all duration-200 hover:translate-x-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                POINT.{point.number}
              </span>
              <span className="text-2xl">{point.icon}</span>
            </div>
            <h3 className={`text-2xl font-bold ${point.number === 1 ? 'text-red-500' : 'text-yellow-400'}`}>
              {point.title}
            </h3>
          </div>
          <p className="text-gray-700 pl-4 border-l-4 border-pink-200">{point.description}</p>
        </div>
      ))}
    </div>
  );
}
