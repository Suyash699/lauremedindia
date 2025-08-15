import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plus, Minus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";
import { type Product } from "@shared/schema";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["/api/products", id],
  });

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
      });
    }
  };

  const handleShare = () => {
    if (navigator.share && product) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Product link has been copied to clipboard.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">❌</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2" data-testid="text-product-not-found">Product Not Found</h1>
                <p className="text-gray-600 mb-4" data-testid="text-product-error">
                  The product you're looking for doesn't exist or has been removed.
                </p>
                <Button asChild data-testid="button-back-to-products">
                  <Link href="/products">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Products
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/products" className="inline-flex items-center text-organic-green hover:text-organic-dark transition-colors" data-testid="link-back-to-products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl shadow-sm overflow-hidden">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-product-detail-${product.id}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <span className="text-8xl">🌿</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.isOrganic && (
                <Badge className="bg-organic-green/10 text-organic-green border-organic-green" data-testid="badge-organic-detail">
                  100% Organic
                </Badge>
              )}
              {product.inStock ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700" data-testid="badge-in-stock-detail">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" data-testid="badge-out-of-stock-detail">Out of Stock</Badge>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800" data-testid="text-product-title">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-3xl font-bold text-organic-green" data-testid="text-product-price-detail">
              ₹{product.price}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed" data-testid="text-product-description-detail">
              {product.description}
            </p>

            <Separator />

            {/* Product Details */}
            <div className="space-y-3">
              {product.category && (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Category:</span>
                  <Badge variant="outline" data-testid="badge-category-detail">{product.category}</Badge>
                </div>
              )}
              {product.specialty && (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Specialty:</span>
                  <Badge variant="outline" data-testid="badge-specialty-detail">{product.specialty}</Badge>
                </div>
              )}
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    data-testid="button-decrease-quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium" data-testid="text-quantity">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleQuantityChange(1)}
                    data-testid="button-increase-quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-organic-green hover:bg-organic-dark"
                  data-testid="button-add-to-cart-detail"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? `Add ${quantity} to Cart` : "Out of Stock"}
                </Button>
                
                <Button variant="outline" size="icon" data-testid="button-wishlist">
                  <Heart className="w-4 h-4" />
                </Button>
                
                <Button variant="outline" size="icon" onClick={handleShare} data-testid="button-share">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-800 mb-4" data-testid="text-features-title">Product Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-organic-green rounded-full"></div>
                    <span className="text-gray-600" data-testid="text-feature-1">100% Natural and Organic ingredients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-organic-green rounded-full"></div>
                    <span className="text-gray-600" data-testid="text-feature-2">WHO GMP certified manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-organic-green rounded-full"></div>
                    <span className="text-gray-600" data-testid="text-feature-3">Third-party tested for purity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-organic-green rounded-full"></div>
                    <span className="text-gray-600" data-testid="text-feature-4">Free from artificial additives</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8" data-testid="text-related-products-title">You may also like</h2>
          <div className="text-center py-8 text-gray-600" data-testid="text-related-products-placeholder">
            Related products will be displayed here
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
