import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "Ocean Wave Resin Art",
    price: 129.99,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "Wall Art",
  },
  {
    id: 2,
    title: "Beach Sunset Scene",
    price: 149.99,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "Wall Art",
  },
  {
    id: 3,
    title: "Tropical Paradise",
    price: 99.99,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "Table Art",
  },
  {
    id: 4,
    title: "Coral Reef Display",
    price: 179.99,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "Table Art",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center space-y-4 animate-fade-up">
          <h1 className="text-5xl font-bold">Ocean-Inspired Resin Art</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover unique pieces that bring the beauty of the ocean into your home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-up">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;