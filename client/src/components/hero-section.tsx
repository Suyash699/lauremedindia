import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroTaglines } from "@/lib/data";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => 
        (prevIndex + 1) % heroTaglines.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreProducts = () => {
    setLocation("/products");
  };

  const handleContactUs = () => {
    setLocation("/contact");
  };

  return (
    <section className="relative bg-gradient-to-r from-organic-green to-pharma-blue text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.1'><circle cx='30' cy='30' r='2'/></g></svg>")`,
            backgroundSize: "60px 60px"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-medium opacity-90" data-testid="text-hero-subtitle">
              Leading the Way in Health Transformation Worldwide
            </p>
            
            {/* Rotating Taglines */}
            <div className="h-16 overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentTaglineIndex * 4}rem)` }}
              >
                {heroTaglines.map((tagline, index) => (
                  <h1 
                    key={index}
                    className="text-4xl lg:text-5xl font-bold leading-tight h-16 flex items-center"
                    data-testid={`text-hero-tagline-${index}`}
                  >
                    {tagline}
                  </h1>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 hover:bg-white/30" data-testid="badge-high-quality">
                High Quality Production
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 hover:bg-white/30" data-testid="badge-fastest-growing">
                Fastest Growing Organic Pharma
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 hover:bg-white/30" data-testid="badge-patient-focused">
                Patient Focused
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 hover:bg-white/30" data-testid="badge-quality-first">
                Quality First
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2 hover:bg-white/30" data-testid="badge-organic">
                100% Organic
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleExploreProducts}
                className="bg-white text-organic-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="button-explore-products"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactUs}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-organic-green transition-colors"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Modern pharmaceutical products showcase display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform" data-testid="card-product-supplements">
                  <div className="w-full h-32 bg-gradient-to-b from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💊</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Organic Supplements</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-2 hover:rotate-0 transition-transform" data-testid="card-product-herbal">
                  <div className="w-full h-32 bg-gradient-to-b from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Herbal Medicines</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform" data-testid="card-product-remedies">
                  <div className="w-full h-32 bg-gradient-to-b from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🧪</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Natural Remedies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-2 hover:rotate-0 transition-transform" data-testid="card-product-ayurvedic">
                  <div className="w-full h-32 bg-gradient-to-b from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍃</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Ayurvedic Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
