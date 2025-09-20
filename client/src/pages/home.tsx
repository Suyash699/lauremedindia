import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import SpecialtyCard from "@/components/specialty-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { type Product, type Category, type Specialty } from "@shared/schema";
import premiumPhoto from "@assets/premium_photo.png";

export default function Home() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: specialties, isLoading: specialtiesLoading } = useQuery<Specialty[]>({
    queryKey: ["/api/specialties"],
  });

  const featuredProducts = products?.slice(0, 3) || [];
  const companySpecialties = specialties?.slice(0, 10) || [];

  // Debug logging
  console.log("Specialties data:", specialties);
  console.log("Company specialties:", companySpecialties);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Partner Logos Carousel */}
      <section id="quality-section" className="bg-gray-100 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3
              className="text-lg font-semibold text-gray-700 mb-2"
              data-testid="text-quality-title"
            >
              Experience Our Quality Yourself
            </h3>
            <p className="text-gray-600" data-testid="text-trusted-by">
              Trusted by healthcare professionals worldwide
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {["WHO", "GMP", "FDA", "ISO"].map((cert) => (
              <div
                key={cert}
                className="flex-shrink-0 w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center border hover:shadow-md transition-shadow"
                data-testid={`certification-${cert.toLowerCase()}`}
              >
                <span className="text-xs font-bold text-gray-600">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="bg-green-50 py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Image - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img
              src={premiumPhoto}
              alt="Lauremed Organic India facility and operations"
              className="w-full h-64 sm:h-80 lg:h-fit object-cover"
              data-testid="img-about-company"
            />
          </div>

          {/* Right Content - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-8 lg:px-12 py-8 lg:py-32 space-y-4 lg:space-y-6">
            <p
              className="text-organic-green/80 font-semibold mb-2 text-sm sm:text-base"
              data-testid="text-welcome"
            >
              WELCOME TO Lauremed Organic India
            </p>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800"
              data-testid="text-company-title"
            >
              Lauremed Aims To Be The Fastest Growing Pharmaceutical Company In
              India
            </h2>

            <p
              className="text-gray-600 leading-relaxed text-sm sm:text-base"
              data-testid="text-company-description-1"
            >
              Incorporated in 2025, Lauremed Organic India aims to be the
              fastest growing pharmaceutical company in India. We are a
              patient-focused, values-based, Quality driven pharmaceutical
              company committed to bringing Better Health and a Brighter Future
              to people worldwide through organic medicine solutions.
            </p>

            <p
              className="text-gray-600 leading-relaxed text-sm sm:text-base"
              data-testid="text-company-description-2"
            >
              Our passion and pursuit of potentially life-changing
              medicine-based treatments for patients by the means of
              affordability and Quality. Our focus on sustainable medicines
              makes us a leader in the pharmaceutical industry.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4"></div>

            <Button
              asChild
              className="bg-organic-green/60 hover:bg-organic-dark/80 w-full sm:w-auto"
              data-testid="button-know-more"
            >
              <Link href="/about">Know More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              data-testid="text-specialties-title"
            >
              Specialties We Deal
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
              data-testid="text-specialties-description"
            >
              Comprehensive range of pharmaceutical solutions across multiple
              healthcare categories
            </p>
          </div>

          {specialtiesLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 animate-pulse"
                >
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : companySpecialties.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {companySpecialties.map((specialty) => (
                <SpecialtyCard key={specialty.id} specialty={specialty} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No specialties available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              data-testid="text-featured-products-title"
            >
              Featured Products
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
              data-testid="text-featured-products-description"
            >
              Discover our premium range of our pharmaceutical products,
              carefully crafted for optimal health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-pharma-blue/60 hover:bg-pharma-dark/80 w-full sm:w-auto"
              data-testid="button-view-all-products"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              data-testid="text-geographic-title"
            >
              Spreading Wings Across the Globe
            </h2>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-organic-green/80 mb-4 sm:mb-6"
              data-testid="text-presence-india"
            >
              Our Presence In INDIA
            </h3>
            <p
              className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base"
              data-testid="text-geographic-description"
            >
              Lauremed Organic India is your reliable pharmaceutical
              distribution company. With pharmacies across the country, we
              provide convenience, knowledge, and a wide choice of organic
              healthcare items. As a growing organic pharmaceutical company, we
              are committed to bringing natural wellness to every corner of
              India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop"
                alt="Modern pharmaceutical distribution center with organic medicine storage"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-distribution-center"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="text-center p-4 bg-gray-50 rounded-lg"
                  data-testid="stat-states"
                >
                  <div className="text-2xl font-bold text-organic-green/80 mb-2">
                    3
                  </div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-organic-green/10 to-pharma-blue/10 p-4 sm:p-6 rounded-lg">
                <h4
                  className="font-semibold text-gray-800 mb-3 text-sm sm:text-base"
                  data-testid="text-key-markets"
                >
                  Key Market Presence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
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
