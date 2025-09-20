import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { type Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" data-testid={`card-category-${category.id}`}>
      <Link href={`/products?category=${encodeURIComponent(category.name)}`}>
        <CardContent className="p-0">
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            {category.imageUrl ? (
              <img 
                src={category.imageUrl} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-category-${category.id}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-organic-green/20 to-pharma-blue/20">
                <span className="text-3xl sm:text-4xl">🌿</span>
              </div>
            )}
          </div>
          
          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-gray-800 group-hover:text-organic-green transition-colors mb-2 text-sm sm:text-base line-clamp-2" data-testid={`text-category-name-${category.id}`}>
              {category.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3" data-testid={`text-category-count-${category.id}`}>
              ({category.productCount} Products)
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-organic-green hover:text-organic-dark font-medium p-0 text-xs sm:text-sm"
              data-testid={`button-shop-category-${category.id}`}
            >
              Shop Now →
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
