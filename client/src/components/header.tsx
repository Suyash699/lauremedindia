import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Phone, MessageCircle, Menu, X, ShoppingCart, MapPin, Clock, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { navigationItems } from "@/lib/data";

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
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="flex items-center" data-testid="location-indicator">
              <MapPin className="w-4 h-4 mr-2 text-organic-green" />
              INDIA
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <a 
              href="mailto:info@lauremedorganic.com" 
              className="flex items-center hover:text-organic-green transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@lauremedorganic.com
            </a>
            <span className="flex items-center" data-testid="text-hours">
              <Clock className="w-4 h-4 mr-2 text-organic-green" />
              9:00 am to 7:00pm
            </span>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-organic-green" />
              <select className="bg-transparent text-gray-600 text-sm cursor-pointer" data-testid="select-language">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="w-12 h-12 bg-gradient-to-br from-organic-green to-organic-dark rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">L</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">LAUREMED</h1>
              <p className="text-sm text-organic-green font-medium">ORGANIC INDIA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-organic-green ${
                  location === item.href ? "text-organic-green" : "text-gray-700"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Contact */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative hidden lg:block">
              <Input
                type="text"
                placeholder="What are you looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-4 pr-10"
                data-testid="input-search"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 p-0 bg-organic-green hover:bg-organic-dark"
                data-testid="button-search"
              >
                <Search className="w-4 h-4" />
              </Button>
            </form>

            {/* Cart */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleCart}
              className="relative"
              data-testid="button-cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-organic-green">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-2 text-sm">
              <div className="text-right">
                <p className="font-semibold text-gray-800" data-testid="text-support-title">Sales & Service Support</p>
                <p className="text-gray-600" data-testid="text-phone-number">+91 8355963959</p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  className="bg-pharma-blue hover:bg-pharma-dark"
                  asChild
                  data-testid="button-phone"
                >
                  <a href="tel:+918355963959">
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-green-500 hover:bg-green-600"
                  asChild
                  data-testid="button-whatsapp"
                >
                  <a href="https://wa.me/918355963959" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden" data-testid="button-menu">
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
                      className={`text-lg font-medium transition-colors hover:text-organic-green ${
                        location === item.href ? "text-organic-green" : "text-gray-700"
                      }`}
                      data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
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
                      <Button type="submit" size="sm" className="bg-organic-green hover:bg-organic-dark" data-testid="button-mobile-search">
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>

                  {/* Mobile Contact */}
                  <div className="mt-6 pt-6 border-t">
                    <p className="font-semibold text-gray-800 mb-2" data-testid="text-mobile-support">Sales & Service Support</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-pharma-blue hover:bg-pharma-dark" asChild data-testid="button-mobile-phone">
                        <a href="tel:+918355963959">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </a>
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600" asChild data-testid="button-mobile-whatsapp">
                        <a href="https://wa.me/918355963959" target="_blank" rel="noopener noreferrer">
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
