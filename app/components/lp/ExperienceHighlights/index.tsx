import { ImageCarousel } from "./ImageCarousel";
import { FeaturePoints } from "./FeaturePoints";

export function ExperienceHighlights() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="absolute inset-0 bg-[#91bdd6]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 10%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 15%, transparent 15%),
          radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%),
          radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%)
        `,
        backgroundSize: '100px 100px, 160px 160px, 160px 160px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }} />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">体験の魅力</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ImageCarousel />
          <FeaturePoints />
        </div>
      </div>
    </section>
  );
}
