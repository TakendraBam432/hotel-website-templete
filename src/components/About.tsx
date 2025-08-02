import { Award, Heart, Star } from "lucide-react";
const About = () => {
  return <section id="about" className="bg-secondary mx-0 my-0 py-[34px] px-0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              About Hotelify
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since 1985, we've been dedicated to providing exceptional hospitality 
              and creating unforgettable experiences for our guests from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <h3 className="text-3xl font-playfair font-semibold text-foreground mb-6">
                Our Story of Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to redefine luxury hospitality, Hotelify has evolved 
                into a beacon of elegance and comfort. Our commitment to excellence is 
                reflected in every aspect of your stay, from our meticulously designed 
                rooms to our world-class amenities.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that true luxury lies in the details – the warmth of our 
                service, the comfort of our accommodations, and the memories we help 
                you create during your time with us.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-4 mx-auto">
                    <Award className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-4 mx-auto">
                    <Star className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-sm text-muted-foreground">Guest Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-4 mx-auto">
                    <Heart className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Guests</div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 fade-in-up">
              <div className="space-y-4">
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">Premium Service</h4>
                  <p className="text-sm text-muted-foreground">24/7 concierge and personalized attention</p>
                </div>
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">Luxury Amenities</h4>
                  <p className="text-sm text-muted-foreground">World-class facilities and comfort</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">Memorable Experiences</h4>
                  <p className="text-sm text-muted-foreground">Creating lasting memories for every guest</p>
                </div>
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized for excellence globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;