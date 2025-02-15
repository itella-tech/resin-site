import { points } from "./data";

export function FeaturePoints() {
  return (
    <div className="bg-white rounded-xl p-8 space-y-8">
      {points.map((point) => (
        <div key={point.number}>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              POINT.{point.number}
            </span>
            <h3 className="text-2xl font-bold text-yellow-400">{point.title}</h3>
          </div>
          <p className="text-gray-700">{point.description}</p>
        </div>
      ))}
    </div>
  );
}
