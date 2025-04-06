
import React from 'react';

const TechStack = () => {
  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Architecture</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            SoulChain combines cutting-edge AI and blockchain technologies to achieve reliable thought preservation and digital legacy
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Technology */}
          <div>
            <div className="bg-card shadow-lg rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-8 h-8 mr-2 text-soul-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                AI Technology Layer
              </h3>
              
              <div className="space-y-4">
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Voice Synthesis & Cloning (TTS)</h4>
                  <p className="text-sm">Using advanced APIs like ElevenLabs and Google Cloud TTS to train and simulate user's unique voice from small samples.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Natural Language Processing (NLP)</h4>
                  <p className="text-sm">Employing sentiment analysis, topic modeling, and semantic understanding to deeply analyze thought content and nuances.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Large Language Models (LLM)</h4>
                  <p className="text-sm">Fine-tuning GPT-series or open-source LLMs based on personal data to achieve intelligent, coherent, and personality-matching responses.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Brain-Computer Interface Potential (Future)</h4>
                  <p className="text-sm">Exploring integration of non-invasive BCI technology as a more direct thought input method, breaking expression limitations.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blockchain Technology */}
          <div>
            <div className="bg-card shadow-lg rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-8 h-8 mr-2 text-soul-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                Blockchain Technology Layer
              </h3>
              
              <div className="space-y-4">
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Blockchain Platform</h4>
                  <p className="text-sm">Based on established platforms (like Ethereum, Solana, Polygon) or a dedicated chain, ensuring speed, cost-efficiency, and security.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">NFTs & Smart Contracts</h4>
                  <p className="text-sm">Using smart contracts to define NFT standards, recording ownership, metadata, access permissions, and royalty rules.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Decentralized Storage</h4>
                  <p className="text-sm">Combining protocols like IPFS and Arweave to ensure thought data permanence and censorship resistance, with only key metadata on-chain.</p>
                </div>
                
                <div className="bg-background rounded-md p-4">
                  <h4 className="font-bold mb-1 text-soul-primary">Encryption & Privacy Controls</h4>
                  <p className="text-sm">Employing advanced encryption to protect data privacy, enabling granular access control to ensure users fully control their thought data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
