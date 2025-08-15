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
        <CardContent className="p-4">
          <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-product-${product.id}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-4xl">🌿</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            {product.isOrganic && (
              <Badge variant="secondary" className="bg-organic-green/10 text-organic-green" data-testid={`badge-organic-${product.id}`}>
                100% Organic
              </Badge>
            )}
            
            <h3 className="font-semibold text-gray-800 group-hover:text-organic-green transition-colors line-clamp-2" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
              {product.description}
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-organic-green" data-testid={`text-product-price-${product.id}`}>
                ₹{product.price}
              </span>
              {product.inStock ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700" data-testid={`badge-in-stock-${product.id}`}>
                  In Stock
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-red-100 text-red-700" data-testid={`badge-out-of-stock-${product.id}`}>
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-organic-green hover:bg-organic-dark disabled:bg-gray-300"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
