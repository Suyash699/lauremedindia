import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  Phone,
  MessageCircle,
  Menu,
  X,
  ShoppingCart,
  MapPin,
  Clock,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { navigationItems } from "@/lib/data";
import logoIcon from "@assets/logo_icon.png";

export default function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4 text-gray-600">
            <span
              className="flex items-center"
              data-testid="location-indicator"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-organic-green/80" />
              <span className="hidden sm:inline">INDIA</span>
              <span className="sm:hidden">IN</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-600">
            <a
              href="mailto:lauremedorganic@gmail.com"
              className="flex items-center hover:text-organic-green/80 transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="hidden lg:inline">
                lauremedorganic@gmail.com
              </span>
              <span className="lg:hidden">Email</span>
            </a>
            <span className="flex items-center" data-testid="text-hours">
              <Clock className="w-4 h-4 mr-2 text-organic-green/80" />
              <span className="hidden lg:inline">9:00 am to 7:00pm</span>
              <span className="lg:hidden">9AM-7PM</span>
            </span>
          </div>
          <div className="md:hidden flex items-center space-x-2 text-gray-600">
            <a
              href="mailto:lauremedorganic@gmail.com"
              className="flex items-center"
              data-testid="link-mobile-email-top"
            >
              <Mail className="w-3 h-3 text-organic-green/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3"
            data-testid="link-home"
          >
            <div>
              <img src={logoIcon} className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-pharma-blue/80">
                LAUREMED
              </h1>
              <p className="text-xs sm:text-sm text-organic-green/80 font-medium">
                ORGANIC INDIA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-organic-green/80 ${
                  location === item.href
                    ? "text-organic-green/80"
                    : "text-gray-700"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Contact */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative hidden lg:block">
              <Input
                type="text"
                placeholder="What are you looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-4 pr-10"
                data-testid="input-search"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 p-0 bg-organic-green/70 hover:bg-organic-dark/80"
                data-testid="button-search"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>

            {/* Mobile Quick Actions */}
            <div className="flex md:hidden items-center space-x-1">
              <Button
                size="sm"
                className="bg-pharma-blue hover:bg-pharma-dark h-8 w-8 p-0"
                asChild
                data-testid="button-mobile-phone-quick"
              >
                <a href="tel:+917400077781">
                  <Phone className="w-3 h-3" />
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 h-8 w-8 p-0"
                asChild
                data-testid="button-mobile-whatsapp-quick"
              >
                <a
                  href="https://wa.me/917400077781"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3 h-3" />
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-2 text-sm">
              <div className="text-right">
                <p
                  className="font-semibold text-gray-800"
                  data-testid="text-support-title"
                >
                  Sales & Service Support
                </p>
                <p className="text-gray-600" data-testid="text-phone-number">
                  +91 7400077781
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="bg-pharma-blue hover:bg-pharma-dark"
                  asChild
                  data-testid="button-phone"
                >
                  <a href="tel:+917400077781">
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                  asChild
                  data-testid="button-whatsapp"
                >
                  <a
                    href="https://wa.me/917400077781"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  data-testid="button-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-organic-green/80 ${
                        location === item.href
                          ? "text-organic-green/80"
                          : "text-gray-700"
                      }`}
                      data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="mt-6">
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-testid="input-mobile-search"
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="bg-organic-green/80 hover:bg-organic-dark/80"
                        data-testid="button-mobile-search"
                      >
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>

                  {/* Mobile Contact */}
                  <div className="mt-6 pt-6 border-t">
                    <p
                      className="font-semibold text-gray-800 mb-2"
                      data-testid="text-mobile-support"
                    >
                      Sales & Service Support
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-pharma-blue/70 hover:bg-pharma-dark/80"
                        asChild
                        data-testid="button-mobile-phone"
                      >
                        <a href="tel:+917400077781">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600"
                        asChild
                        data-testid="button-mobile-whatsapp"
                      >
                        <a
                          href="https://wa.me/917400077781"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
