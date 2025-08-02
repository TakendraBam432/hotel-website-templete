import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-premium-navy text-premium-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-luxury-gold-foreground font-bold">H</span>
              </div>
              <span className="text-2xl font-playfair font-semibold">Hotelify</span>
            </div>
            <p className="text-premium-navy-foreground/80 mb-6 leading-relaxed">
              Experience luxury redefined. Where every detail matters and every moment 
              becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-luxury-gold hover:text-luxury-gold-foreground">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-luxury-gold hover:text-luxury-gold-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-luxury-gold hover:text-luxury-gold-foreground">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Rooms & Suites", "Dining", "Spa & Wellness", "Events", "Gallery"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-premium-navy-foreground/80 hover:text-luxury-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {["Concierge", "Room Service", "Valet Parking", "Airport Transfer", "Business Center", "Pet Services"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-premium-navy-foreground/80 hover:text-luxury-gold transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div className="text-premium-navy-foreground/80">
                  <div>123 Luxury Avenue</div>
                  <div>Downtown District</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-premium-navy-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-premium-navy-foreground/80">info@hotelify.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Reservations</h4>
              <Button className="btn-luxury w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-premium-navy-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-premium-navy-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Hotelify. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-premium-navy-foreground/60 text-sm">
              Designed with ❤️ for hospitality excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;