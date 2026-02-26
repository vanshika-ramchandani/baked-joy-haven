import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="font-display text-2xl font-bold text-primary">
        La Petite Boulangerie
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#products" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Menu</a>
        <a href="#about" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">About</a>
        <a href="#bestsellers" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Best Sellers</a>
        <a href="#testimonials" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Reviews</a>
        <a href="#contact" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Contact</a>
      </div>
      <Button variant="default" size="sm" className="hidden md:inline-flex">
        Order Now
      </Button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img
        src="/images/hero-bakery.jpg"
        alt="Fresh bread and pastries at our bakery"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <span className="inline-block text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
          Artisan Bakery
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
          Freshly Baked Happiness Every Day
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
          Handcrafted with love using the finest ingredients. No preservatives, just pure homemade goodness delivered to your doorstep.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="xl">Order Now</Button>
          <Button variant="hero-outline" size="xl">View Menu</Button>
        </div>
      </div>
    </div>
  </section>
);

const products = [
  { name: "Artisan Cakes", description: "Layered perfection for every celebration", image: "/images/cake.jpg" },
  { name: "Sourdough Breads", description: "Slow-fermented with wild yeast cultures", image: "/images/bread.jpg" },
  { name: "Butter Cookies", description: "Crisp, golden & irresistibly delicious", image: "/images/cookies.jpg" },
];

const FeaturedProducts = () => (
  <section id="products" className="section-padding bg-warm-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Our Specialties</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Featured Products</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="group bg-card rounded-2xl overflow-hidden bakery-shadow hover:bakery-shadow-lg transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-square overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="rounded-2xl overflow-hidden bakery-shadow-lg">
        <img src="/images/about-bakery.jpg" alt="Inside our bakery" className="w-full h-full object-cover" />
      </div>
      <div>
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Our Story</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">Baked with Love Since 2010</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          What started as a small family kitchen has grown into a beloved neighborhood bakery. Every morning at 4 AM, our bakers begin crafting each item by hand using recipes passed down through generations.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We source the finest organic flour, farm-fresh eggs, and real butter — because great taste starts with great ingredients. No preservatives, no shortcuts, just honest baking.
        </p>
        <Button variant="hero-outline" size="lg">Learn More</Button>
      </div>
    </div>
  </section>
);

const bestSellers = [
  { name: "Butter Croissant", price: "$3.50", image: "/images/croissant.jpg", badge: "Best Seller" },
  { name: "Chocolate Cake", price: "$28.00", image: "/images/cake.jpg", badge: "Popular" },
  { name: "French Macarons", price: "$12.00", image: "/images/macarons.jpg", badge: "New" },
  { name: "Cinnamon Rolls", price: "$4.50", image: "/images/cinnamon-rolls.jpg", badge: "Fan Favorite" },
];

const BestSellers = () => (
  <section id="bestsellers" className="section-padding bg-secondary">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Most Loved</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Best Sellers</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((item) => (
          <div key={item.name} className="group bg-card rounded-2xl overflow-hidden bakery-shadow hover:bakery-shadow-lg transition-all duration-500 hover:-translate-y-2">
            <div className="relative aspect-square overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
                {item.badge}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-accent font-bold text-lg">{item.price}</span>
                <Button variant="default" size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Sarah M.", text: "The best croissants I've ever had outside of Paris! Flaky, buttery perfection.", rating: 5 },
  { name: "James L.", text: "Their sourdough bread is incredible. My family can't get enough of it. We order every week!", rating: 5 },
  { name: "Emily R.", text: "The cinnamon rolls are to die for. Warm, gooey, and the frosting is heavenly.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-warm-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 bakery-shadow">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-golden text-lg">★</span>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 italic font-light">"{t.text}"</p>
            <p className="font-display font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const instagramImages = [
  "/images/croissant.jpg",
  "/images/cake.jpg",
  "/images/macarons.jpg",
  "/images/bread.jpg",
  "/images/cinnamon-rolls.jpg",
  "/images/cookies.jpg",
];

const InstagramSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">@lapetiteboulangerie</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Follow Us on Instagram</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {instagramImages.map((img, i) => (
          <div key={i} className="group aspect-square rounded-xl overflow-hidden cursor-pointer">
            <img src={img} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Get in Touch</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Visit Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-card rounded-2xl p-8 bakery-shadow text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Location</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">123 Baker Street<br />Downtown, NY 10001</p>
        </div>
        <div className="bg-card rounded-2xl p-8 bakery-shadow text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Opening Hours</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mon – Fri: 6:00 AM – 8:00 PM<br />
            Sat – Sun: 7:00 AM – 6:00 PM
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 bakery-shadow text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Contact</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            (555) 123-4567<br />
            hello@lapetiteboulangerie.com
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold">La Petite Boulangerie</h3>
          <p className="text-primary-foreground/70 text-sm mt-1">Freshly baked happiness, every day.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
        <p className="text-primary-foreground/50 text-sm">© 2026 La Petite Boulangerie. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <BestSellers />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
