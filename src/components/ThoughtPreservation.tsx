
import React from 'react';
import { Button } from "@/components/ui/button";

const ThoughtPreservation = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Representation */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              {/* Brain visualization */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-soul-primary to-soul-secondary opacity-20 animate-pulse-subtle"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-soul-primary to-soul-secondary opacity-30 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-soul-primary to-soul-secondary opacity-40 animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 5C13.7909 5 12 6.79086 12 9C12 11.2091 13.7909 13 16 13C18.2091 13 20 11.2091 20 9C20 6.79086 18.2091 5 16 5Z" fill="currentColor"/>
                      <path d="M16 15C11.5817 15 8 18.5817 8 23C8 23.5523 8.44772 24 9 24H23C23.5523 24 24 23.5523 24 23C24 18.5817 20.4183 15 16 15Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating data particles */}
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-md bg-white shadow-md animate-float"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 30 + 20}px`,
                    top: `${Math.random() * 70 + 15}%`,
                    left: `${Math.random() * 70 + 15}%`,
                    opacity: 0.6,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `rotate(${Math.random() * 30 - 15}deg)`
                  }}
                >
                  <div className="h-full w-full flex items-center justify-center overflow-hidden">
                    <div className="text-xs text-soul-dark opacity-50 truncate px-2">
                      {[
                        "Memory fragments...", "Thinking patterns...", "Personal experiences...",
                        "Language habits...", "Creative inspirations...", "Decision logic...",
                        "Value systems...", "Professional knowledge...", "Emotional patterns...",
                        "Behavioral traits..."
                      ][i % 10]}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Digital connections */}
              <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
                {[...Array(20)].map((_, i) => (
                  <path 
                    key={i}
                    d={`M${Math.random() * 100},${Math.random() * 100} C${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
                    stroke="rgba(107, 70, 193, 0.2)"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
              </svg>
              
              {/* NFT token representation */}
              <div className="absolute bottom-10 right-10">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-soul-primary to-soul-secondary p-1">
                  <div className="w-full h-full rounded-md bg-white flex items-center justify-center">
                    <svg className="w-12 h-12 text-soul-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digital Mind Preservation 
              <span className="text-gradient block mt-1">Process & Technology</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soul-primary/20 flex items-center justify-center text-soul-primary">1</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Multimodal Data Collection</h3>
                  <p className="text-muted-foreground">Upload text, voice, images and other personal data formats to comprehensively capture your thought patterns.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soul-primary/20 flex items-center justify-center text-soul-primary">2</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">AI Deep Learning</h3>
                  <p className="text-muted-foreground">Utilize cutting-edge AI technologies (NLP, LLM, voice synthesis) to analyze and build your mind model.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soul-primary/20 flex items-center justify-center text-soul-primary">3</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Blockchain Secure Storage</h3>
                  <p className="text-muted-foreground">Ensure data permanence and immutability through blockchain technology and decentralized storage (IPFS).</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soul-primary/20 flex items-center justify-center text-soul-primary">4</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Thought NFT Minting</h3>
                  <p className="text-muted-foreground">Mint your mind model as a unique NFT, serving as proof of ownership and an interaction portal.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-soul-primary hover:bg-soul-primary/90 px-8 py-6 text-lg">
              Start Preserving Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtPreservation;
