import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Experience
            <span className="block text-luxury-gold">Luxury</span>
            Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-light">
            Discover unparalleled comfort and sophistication at our premium hotel, 
            where every detail is crafted for your perfect stay.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-luxury text-lg px-8 py-4">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Explore Rooms
            </Button>
          </div>

          {/* Quick Booking Panel */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Check In</label>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-3">
                  <Calendar className="w-5 h-5 text-white/80" />
                  <span className="text-white">Select Date</span>
                </div>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Check Out</label>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-3">
                  <Calendar className="w-5 h-5 text-white/80" />
                  <span className="text-white">Select Date</span>
                </div>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Guests</label>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-3">
                  <Users className="w-5 h-5 text-white/80" />
                  <span className="text-white">2 Adults</span>
                </div>
              </div>
              <Button className="btn-luxury h-12">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;