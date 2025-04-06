
import React from 'react';
import { Button } from "@/components/ui/button";
import MindCreateDemo from './MindCreateDemo';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-soul-primary/20 animate-particles`}
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">SoulChain</span>
            <span className="block mt-2">Eternal Thoughts, Digital Legacy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Preserve your thoughts, memories, and personality forever using AI and blockchain technology,
            creating your unique digital mind asset
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MindCreateDemo />
            <Button variant="outline" className="border-soul-primary text-soul-primary hover:bg-soul-primary/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating orb illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-soul-primary/30 to-soul-secondary/30 blur-3xl animate-pulse-subtle"></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-soul-primary/40 to-soul-secondary/40 blur-2xl animate-pulse-subtle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-soul-primary/50 to-soul-secondary/50 blur-xl animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
