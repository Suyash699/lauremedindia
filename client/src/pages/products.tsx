import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { type Product, type Category, type Specialty } from "@shared/schema";

export default function Products() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");

  // Parse URL parameters
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const urlSearch = urlParams.get('search') || '';
  const urlCategory = urlParams.get('category') || '';
  const urlSpecialty = urlParams.get('specialty') || '';

  // Set initial filters from URL
  useState(() => {
    if (urlSearch) setSearchQuery(urlSearch);
    if (urlCategory) setSelectedCategory(urlCategory);
    if (urlSpecialty) setSelectedSpecialty(urlSpecialty);
  });

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: specialties } = useQuery<Specialty[]>({
    queryKey: ["/api/specialties"],
  });

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.filter((product) => {
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSpecialty = !selectedSpecialty || product.specialty === selectedSpecialty;

      return matchesSearch && matchesCategory && matchesSpecialty;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'newest':
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedSpecialty, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedSpecialty("");
    setSortBy("name");
    window.history.pushState({}, '', '/products');
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedSpecialty;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-products-title">
            Organic Products
          </h1>
          <p className="text-gray-600 max-w-2xl" data-testid="text-products-description">
            Discover our comprehensive range of organic pharmaceutical products, carefully crafted for optimal health and wellness.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-products"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger data-testid="select-category-filter">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories?.map((category) => (
                  <SelectItem key={category.id} value={category.name} data-testid={`option-category-${category.id}`}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Specialty Filter */}
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger data-testid="select-specialty-filter">
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Specialties</SelectItem>
                {specialties?.map((specialty) => (
                  <SelectItem key={specialty.id} value={specialty.name} data-testid={`option-specialty-${specialty.id}`}>
                    {specialty.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-filter-search">
                  Search: {searchQuery}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => setSearchQuery("")}
                    data-testid="button-clear-search"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              {selectedCategory && (
                <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-filter-category">
                  Category: {selectedCategory}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => setSelectedCategory("")}
                    data-testid="button-clear-category"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              {selectedSpecialty && (
                <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-filter-specialty">
                  Specialty: {selectedSpecialty}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => setSelectedSpecialty("")}
                    data-testid="button-clear-specialty"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearFilters}
                data-testid="button-clear-all-filters"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600" data-testid="text-results-count">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {productsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-4 animate-pulse" data-testid={`skeleton-product-${index}`}>
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredAndSortedProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-testid="text-no-products">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any products matching your criteria. Try adjusting your filters.
            </p>
            <Button onClick={clearFilters} data-testid="button-reset-filters">
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
