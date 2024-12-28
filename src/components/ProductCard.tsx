import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ title, price, image, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span className="absolute top-2 right-2 bg-ocean-light/90 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex justify-between items-center w-full">
          <span className="text-xl font-bold text-ocean-dark">${price}</span>
          <Button variant="outline" className="hover:bg-ocean hover:text-white">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};