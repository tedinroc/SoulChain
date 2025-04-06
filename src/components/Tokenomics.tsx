
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">SoulCoin Tokenomics</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into SoulChain's economic system - Creating a sustainable digital thought ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Token Utility */}
          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Token Utility</h3>
              <ul className="space-y-3">
                {[
                  "Pay for platform services (AI training, storage expansion, etc.)",
                  "Purchase and trade Thought NFTs",
                  "Buy physical AI interaction devices",
                  "Participate in platform governance voting",
                  "Access exclusive content and features",
                  "Community rewards and incentives"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-soul-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Token Distribution */}
          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Token Distribution</h3>
              <div className="aspect-square max-w-xs mx-auto relative">
                <div className="absolute inset-0 rounded-full border-8 border-soul-primary/20"></div>
                <div className="absolute inset-[10%] rounded-full border-8 border-soul-secondary/30"></div>
                <div className="absolute inset-[20%] rounded-full border-8 border-soul-accent/20"></div>
                
                {/* Labels */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="font-bold">40%</div>
                  <div className="text-xs">Ecosystem</div>
                </div>
                
                <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="font-bold">20%</div>
                  <div className="text-xs">Founding Team</div>
                </div>
                
                <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 text-center">
                  <div className="font-bold">25%</div>
                  <div className="text-xs">Community Rewards</div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-center">
                  <div className="font-bold">15%</div>
                  <div className="text-xs">Investors</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">DAO Governance</h3>
          <p className="text-center mb-6">SoulChain will adopt a Decentralized Autonomous Organization (DAO) model, allowing token holders to participate in important platform decisions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h4 className="font-bold mb-2 text-soul-primary">Proposal Process</h4>
              <p className="text-sm">SoulCoin holders can submit proposals for feature upgrades, fee adjustments, and fund usage, to be collectively discussed by the community.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h4 className="font-bold mb-2 text-soul-primary">Voting Mechanism</h4>
              <p className="text-sm">Using a weighted voting system related to token holdings to ensure democratic and balanced decision-making.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h4 className="font-bold mb-2 text-soul-primary">Transparent Execution</h4>
              <p className="text-sm">All governance decisions and implementation processes are executed through smart contracts, ensuring complete transparency and immutability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
