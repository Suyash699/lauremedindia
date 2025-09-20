import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full" data-testid={`card-product-${product.id}`}>
        <CardContent className="p-3 sm:p-4">
          <div className="aspect-square bg-gray-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-product-${product.id}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-3xl sm:text-4xl">🌿</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            
            <h3 className="font-semibold text-gray-800 group-hover:text-organic-green transition-colors line-clamp-2 text-sm sm:text-base" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
              {product.description}
            </p>
            
            <div className="flex items-center justify-between pt-2">
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-3 sm:p-4 pt-0">
          Read More
        </CardFooter>
      </Card>
    </Link>
  );
}
