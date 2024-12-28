import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const ProductCard = ({ id, title, price, image, category, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <CardContent className="p-0 relative md:w-1/3">
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-1 flex flex-col items-start gap-4 p-6">
          <div className="flex flex-wrap gap-2">
            {category.split(",").map((tag, index) => (
              <span
                key={index}
                className="bg-ocean-light/20 text-ocean-dark px-3 py-1 rounded-full text-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
          <div className="flex justify-between items-center w-full mt-auto">
            <span className="text-2xl font-bold text-ocean-dark">¥{price.toLocaleString()}</span>
            <Link to={`/products/${id}`}>
              <Button className="bg-ocean hover:bg-ocean-dark text-white">
                VIEW MORE
              </Button>
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};