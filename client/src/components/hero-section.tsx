import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroTaglines } from "@/lib/data";
import { useLocation } from "wouter";

const badgeDetails = {
  "badge-high-quality": "High Quality Production",
  "badge-fastest-growing": "Fastest Growing Organic Pharma",
  "badge-patient-focused": "Patient Focused",
  "badge-quality-first": "Quality First",
  "badge-organic": "100% Organic"
}

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTaglineIndex((prevIndex) => 
  //       (prevIndex + 1) % heroTaglines.length
  //     );
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  
  useEffect(() => {
    const currentTagline = heroTaglines[currentTaglineIndex];

    if (charIndex < currentTagline.length) {
      // keep typing
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTagline[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // finished typing → wait, then move to next tagline
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
      }, 2000); // pause before next tagline
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTaglineIndex]);

  const handleExploreProducts = () => {
    setLocation("/products");
  };

  const handleContactUs = () => {
    setLocation("/contact");
  };

  return (
    <section className="relative bg-gradient-to-r from-organic-green/50 to-pharma-blue/50 text-white h-3/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-1">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1671721439325-d79f4bdd30ca?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover"
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
            <div className="h-15 flex items-center">
              <h1
                className="text-4xl lg:text-5xl font-bold flex items-center"
              >
                {displayedText}
              </h1>
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
                className="bg-white text-organic-green/80 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="button-explore-products"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactUs}
                className="border-2 border-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-organic-green/80 transition-colors"
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-gradient-to-b from-organic-green/10 to-pharma-blue/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💊</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Organic Supplements</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-gradient-to-b from-organic-green/10 to-pharma-blue/10 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🧪</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-center font-medium">Natural Remedies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
