import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const elementsToObserve = document.querySelectorAll('.fade-in-up');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
