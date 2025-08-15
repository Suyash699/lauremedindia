import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications, navigationItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-organic-green to-organic-dark rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold" data-testid="text-company-name">LAUREMED</h3>
                <p className="text-organic-green font-medium">ORGANIC INDIA</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed" data-testid="text-company-description">
              Leading the way in organic pharmaceutical solutions, Lauremed Organic India is committed to providing natural, safe, and effective healthcare products that promote wellness and healing through the power of nature.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                className="bg-organic-green hover:bg-organic-dark p-3 rounded-full"
                data-testid="button-social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green hover:bg-organic-dark p-3 rounded-full"
                data-testid="button-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green hover:bg-organic-dark p-3 rounded-full"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-organic-green hover:bg-organic-dark p-3 rounded-full"
                data-testid="button-social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" data-testid="text-quick-links-title">Quick Links</h4>
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-organic-green transition-colors"
                  data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quality"
                className="block text-gray-300 hover:text-organic-green transition-colors"
                data-testid="link-footer-quality"
              >
                Quality Assurance
              </Link>
              <Link
                href="/certifications"
                className="block text-gray-300 hover:text-organic-green transition-colors"
                data-testid="link-footer-certifications"
              >
                Certifications
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6" data-testid="text-contact-title">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-organic-green mt-1" />
                <div data-testid="text-address">
                  <p className="text-gray-300">Industrial Zone, Navi Mumbai,</p>
                  <p className="text-gray-300">Maharashtra 400708, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-organic-green" />
                <a 
                  href="tel:+918355963959" 
                  className="text-gray-300 hover:text-organic-green transition-colors"
                  data-testid="link-phone"
                >
                  +91 8355963959
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-organic-green" />
                <a 
                  href="mailto:info@lauremedorganic.com" 
                  className="text-gray-300 hover:text-organic-green transition-colors"
                  data-testid="link-email-footer"
                >
                  info@lauremedorganic.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-organic-green" />
                <span className="text-gray-300" data-testid="text-business-hours">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4" data-testid="text-certifications-title">Our Certifications & Quality Standards</h4>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="bg-gray-800 px-4 py-2 rounded-lg" data-testid={`badge-certification-${cert.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="font-bold text-organic-green">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="text-copyright">
            © 2024 Lauremed Organic India. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-organic-green transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-organic-green transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
