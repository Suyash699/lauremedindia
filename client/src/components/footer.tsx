import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications, navigationItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-organic-green/70 to-organic-dark/80 rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">L</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold" data-testid="text-company-name">LAUREMED</h3>
                <p className="text-organic-green font-medium text-sm sm:text-base">ORGANIC INDIA</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" data-testid="text-company-description">
              Leading the way in pharmaceutical solutions, Lauremed Organic India is committed to providing natural, safe, and effective healthcare products that promote wellness and healing through the power of nature.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button 
                size="sm" 
                className="bg-organic-green/80 hover:bg-organic-dark/80 p-2 sm:p-3 rounded-full"
                data-testid="button-social-facebook"
              >
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green/80 hover:bg-organic-dark/80 p-2 sm:p-3 rounded-full"
                data-testid="button-social-twitter"
              >
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green/80 hover:bg-organic-dark/80 p-2 sm:p-3 rounded-full"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green/80 hover:bg-organic-dark/80 p-2 sm:p-3 rounded-full"
                data-testid="button-social-instagram"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6" data-testid="text-quick-links-title">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-organic-green/80 transition-colors text-sm sm:text-base"
                  data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quality"
                className="block text-gray-300 hover:text-organic-green/80 transition-colors text-sm sm:text-base"
                data-testid="link-footer-quality"
              >
                Quality Assurance
              </Link>
              <Link
                href="/certifications"
                className="block text-gray-300 hover:text-organic-green/80 transition-colors text-sm sm:text-base"
                data-testid="link-footer-certifications"
              >
                Certifications
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6" data-testid="text-contact-title">Contact Information</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-organic-green/80 mt-1 flex-shrink-0" />
                <div data-testid="text-address">
                  <p className="text-gray-300 text-sm sm:text-base">Steel Market, Kalamboli, Navi Mumbai,</p>
                  <p className="text-gray-300 text-sm sm:text-base">Maharashtra 410218, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-organic-green/80 flex-shrink-0" />
                <a 
                  href="tel:+917400077781" 
                  className="text-gray-300 hover:text-organic-green/80 transition-colors text-sm sm:text-base"
                  data-testid="link-phone"
                >
                  +91 7400077781
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-organic-green/80 flex-shrink-0" />
                <a 
                  href="lauremedorganic@gmail.com" 
                  className="text-gray-300 hover:text-organic-green/80 transition-colors text-sm sm:text-base break-all"
                  data-testid="link-email-footer"
                >
                  lauremedorganic@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-organic-green/80 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base" data-testid="text-business-hours">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" data-testid="text-certifications-title">Our Certifications & Quality Standards</h4>
            <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg" data-testid={`badge-certification-${cert.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="font-bold text-white text-xs sm:text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm" data-testid="text-copyright">
            © 2024 Lauremed Organic India. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            <Link href="/privacy" className="hover:text-organic-green/80 transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-organic-green/80 transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
