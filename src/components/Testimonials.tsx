import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely incredible experience! The attention to detail and level of service exceeded all expectations. The staff went above and beyond to make our anniversary celebration perfect.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      text: "The presidential suite was breathtaking, and the concierge team helped us discover the best local experiences. This hotel truly understands luxury hospitality.",
      avatar: "DC"
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "From the moment we arrived, we felt like royalty. The spa services were world-class, and the dining options were exceptional. We'll definitely be returning!",
      avatar: "EW"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued guests 
              have to say about their extraordinary experiences with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card-luxury p-8 relative fade-in-up">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-luxury-gold/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Guest Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <span className="text-luxury-gold-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">2,847</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;