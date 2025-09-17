import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ProductCard from "@/components/product-card";
import CategoryCard from "@/components/category-card";
import SpecialtyCard from "@/components/specialty-card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, DollarSign, Award } from "lucide-react";
import { Link } from "wouter";
import { companyValues, companyStats } from "@/lib/data";
import { type Product, type Category, type Specialty } from "@shared/schema";
import premiumPhoto from "@assets/premium_photo.png";

export default function Home() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: specialties } = useQuery<Specialty[]>({
    queryKey: ["/api/specialties"],
  });

  const featuredProducts = products?.slice(0, 3) || [];
  const popularCategories = categories?.slice(0, 8) || [];
  const companySpecialties = specialties?.slice(0, 10) || [];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-alt':
        return <Shield className="w-6 h-6 text-white" />;
      case 'lock':
        return <Lock className="w-6 h-6 text-white" />;
      case 'dollar-sign':
        return <DollarSign className="w-6 h-6 text-white" />;
      case 'award':
        return <Award className="w-6 h-6 text-white" />;
      default:
        return <Shield className="w-6 h-6 text-white" />;
    }
  };

  const getValueColor = (iconName: string) => {
    switch (iconName) {
      case 'shield-alt':
        return 'bg-organic-green';
      case 'lock':
        return 'bg-pharma-blue';
      case 'dollar-sign':
        return 'bg-accent-orange';
      case 'award':
        return 'bg-green-600';
      default:
        return 'bg-organic-green';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Partner Logos Carousel */}
      <section className="bg-gray-100 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2" data-testid="text-quality-title">Experience Our Quality Yourself</h3>
            <p className="text-gray-600" data-testid="text-trusted-by">Trusted by healthcare professionals worldwide</p>
          </div>
          
          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {["WHO", "GMP", "FDA", "ISO", "ORGANIC", "AYUSH"].map((cert) => (
              <div 
                key={cert}
                className="flex-shrink-0 w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center border hover:shadow-md transition-shadow"
                data-testid={`certification-${cert.toLowerCase()}`}
              >
                <span className={`text-xs font-bold ${cert === 'ORGANIC' ? 'text-organic-green/80' : 'text-gray-600'}`}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Company */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={premiumPhoto} 
                alt="Lauremed Organic India facility and operations" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-about-company"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-organic-green/80 font-semibold mb-2" data-testid="text-welcome">WELCOME TO Lauremed Organic India</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800" data-testid="text-company-title">
                Lauremed Aims To Be The Fastest Growing Organic Pharmaceutical Company In India
              </h2>
              
              <p className="text-gray-600 leading-relaxed" data-testid="text-company-description-1">
                Incorporated in 2025, Lauremed Organic India aims to be the fastest growing organic pharmaceutical company in India. We are a patient-focused, values-based, Quality driven pharmaceutical company committed to bringing Better Health and a Brighter Future to people worldwide through organic medicine solutions.
              </p>
              
              <p className="text-gray-600 leading-relaxed" data-testid="text-company-description-2">
                Our passion and pursuit of potentially life-changing organic treatments for patients by the means of affordability and Quality. Our focus on sustainable, natural medicine makes us a leader in the organic pharmaceutical industry.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {/* <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-organic-green/80" data-testid="stat-customers-small">{companyStats.customers}</div>
                  <div className="text-sm text-gray-600">Satisfied Customers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-organic-green/80" data-testid="stat-products-small">{companyStats.products}</div>
                  <div className="text-sm text-gray-600">Organic Products</div>
                </div> */}
              </div>
              
              <Button asChild className="bg-organic-green/60 hover:bg-organic-dark/80" data-testid="button-know-more">
                <Link href="/about">Know More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-specialties-title">
              Organic Specialties We Deal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-specialties-description">
              Comprehensive range of organic and natural pharmaceutical solutions across multiple healthcare categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {companySpecialties.map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-featured-products-title">
              Featured Organic Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-featured-products-description">
              Discover our premium range of organic pharmaceutical products, carefully crafted for optimal health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-pharma-blue/60 hover:bg-pharma-dark/80" data-testid="button-view-all-products">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-popular-categories-title">
              Popular Organic Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-popular-categories-description">
              Browse our most sought-after organic pharmaceutical categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      {/* <StatsSection /> */}

      {/* Geographic Presence */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-geographic-title">
              Spreading Wings Across the Globe
            </h2>
            <h3 className="text-2xl font-semibold text-organic-green/80 mb-6" data-testid="text-presence-india">
              Our Presence In INDIA
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-geographic-description">
              Lauremed Organic India is your reliable pharmaceutical distribution company. With pharmacies across the country, we provide convenience, knowledge, and a wide choice of organic healthcare items. As a growing organic pharmaceutical company, we are committed to bringing natural wellness to every corner of India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop" 
                alt="Modern pharmaceutical distribution center with organic medicine storage" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-distribution-center"
              />
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg" data-testid="stat-states">
                  <div className="text-2xl font-bold text-organic-green/80 mb-2">3</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-organic-green/10 to-pharma-blue/10 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3" data-testid="text-key-markets">Key Market Presence</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Maharashtra</div>
                  <div>• Uttar Pradesh</div>
                  <div>• Madhya Pradesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
