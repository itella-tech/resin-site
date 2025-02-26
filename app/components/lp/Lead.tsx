import { type LPContent } from "./content";

type LeadProps = {
  content: LPContent["lead"];
};

export function Lead({ content }: LeadProps) {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          {content.title}
        </h2>
        <p className="text-base md:text-lg text-center text-gray-600 whitespace-pre-line">
          {content.description}
        </p>
      </div>
    </section>
  );
}
