
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ThoughtPreservation from '@/components/ThoughtPreservation';
import TechStack from '@/components/TechStack';
import Tokenomics from '@/components/Tokenomics';
import Footer from '@/components/Footer';
import NFTGallerySection from '@/components/NFTGallerySection';

const Index = () => {
  return (
    <div className="bg-mesh min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ThoughtPreservation />
      <NFTGallerySection />
      <TechStack />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Index;
