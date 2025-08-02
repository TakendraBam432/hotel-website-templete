import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Wifi, Coffee, Car, Utensils } from "lucide-react";
import suiteRoom from "@/assets/suite-room.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";

// Add hotelInfo object before the handleWhatsAppBooking function
const hotelInfo = {
  name: "Hotel Dev Inn", // Replace with your hotel name
  whatsappNumber: "+9779709153772", // Replace with your WhatsApp number (with country code, no + sign)
};
// WhatsApp booking function
const handleWhats = () => {
    const message = encodeURIComponent("Hi! i need a room at" + hotelInfo.name);
    window.open(`https://wa.me/${hotelInfo.whatsappNumber}?text=${message}`, '_blank');
  };
 // WhatsApp booking function
const handleSuiteBooking = () => {
    const message = encodeURIComponent("Hi! I'd like to make a reservation at " + hotelInfo.name);
    window.open(`https://wa.me/${hotelInfo.whatsappNumber}?text=${message}`, '_blank');
  };
const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      description: "Experience ultimate luxury in our spacious presidential suite with panoramic city views.",
      price: "Rs 1899",
      period: "per night",
      image: suiteRoom,
      size: "85 m²",
      features: ["King Bed", "Private Balcony", "Jacuzzi", "Butler Service"],
      amenities: [
        { icon: Bed, label: "King Bed" },
        { icon: Bath, label: "Luxury Bath" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Coffee, label: "Coffee Bar" },
        { icon: Car, label: "Valet Parking" },
        { icon: Utensils, label: "Room Service" },
      ],
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Elegantly appointed room with modern amenities and stunning garden views.",
      price: "Rs 1299",
      period: "per night",
      image: deluxeRoom,
      size: "45 m²",
      features: ["Queen Bed", "Garden View", "Work Desk", "Mini Bar"],
      amenities: [
        { icon: Bed, label: "Queen Bed" },
        { icon: Bath, label: "Modern Bath" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Coffee, label: "Coffee Maker" },
      ],
    },
    {
      id: 3,
      name: "Standard Room",
      description: "Comfortable and well-appointed room perfect for both business and leisure travelers.",
      price: "Rs 1199",
      period: "per night",
      image: standardRoom,
      size: "35 m²",
      features: ["Double Bed", "City View", "Work Area", "Safe"],
      amenities: [
        { icon: Bed, label: "Double Bed" },
        { icon: Bath, label: "Private Bath" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Coffee, label: "Tea & Coffee" },
      ],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Luxurious Accommodations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully curated selection of rooms and suites, 
              each designed to provide the perfect blend of comfort and elegance.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={room.id} className={`card-luxury p-0 overflow-hidden fade-in-up ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                {/* Room Image */}
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className={`w-full object-cover ${index === 0 ? 'h-80' : 'h-64'}`}
                  />
                  {room.badge && (
                    <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-gold-foreground">
                      {room.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {room.size}
                  </div>
                </div>

                {/* Room Content */}
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`font-playfair font-semibold text-foreground ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <div className={`font-bold text-luxury-gold ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {room.price}
                      </div>
                      <div className="text-sm text-muted-foreground">{room.period}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Room Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Amenities</h4>
                    <div className={`grid ${index === 0 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                      {room.amenities.map((amenity) => (
                        <div key={amenity.label} className="flex items-center space-x-2">
                          <amenity.icon className="w-4 h-4 text-luxury-gold" />
                          <span className="text-sm text-muted-foreground">{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button onClick={handleSuiteBooking} className="w-full btn-elegant">
                    Book This Room
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 fade-in-up">
            <p className="text-muted-foreground mb-6">
              Can't find the perfect room? Contact our reservations team for personalized recommendations.
            </p>
            <Button onClick={handleWhats} size="lg" className="btn-luxury">
              Contact Reservations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
