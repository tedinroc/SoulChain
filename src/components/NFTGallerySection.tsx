
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const NFTGallerySection = () => {
  const [selectedNft, setSelectedNft] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! I'm your digital mind NFT. How can I help you today?", isUser: false },
  ]);
  const [messageInput, setMessageInput] = useState("");
  
  const nfts = [
    {
      id: 1,
      name: "Creative Mind",
      tokenId: "#SC3692A4",
      description: "Artist's creative thought patterns and inspirations",
      image: "creative.jpg",
      traits: ["Creative", "Visual", "Philosophical"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Knowledge Base",
      tokenId: "#SC4781B2",
      description: "Academic knowledge and research methodology",
      image: "knowledge.jpg",
      traits: ["Analytical", "Scientific", "Historical"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      name: "Emotional Core",
      tokenId: "#SC5823C7",
      description: "Emotional patterns and personal experiences",
      image: "emotional.jpg",
      traits: ["Empathetic", "Introspective", "Intuitive"],
      color: "from-amber-500 to-red-500"
    },
    {
      id: 4,
      name: "Wisdom Archive",
      tokenId: "#SC6971D9",
      description: "Life wisdom and decision-making framework",
      image: "wisdom.jpg",
      traits: ["Strategic", "Ethical", "Experienced"],
      color: "from-emerald-500 to-teal-400"
    }
  ];
  
  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    
    // Add user message
    setChatMessages([...chatMessages, { text: messageInput, isUser: true }]);
    setMessageInput("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let response;
      const lowerMsg = messageInput.toLowerCase();
      
      if (lowerMsg.includes("how are you") || lowerMsg.includes("how do you feel")) {
        response = "As a digital mind NFT, I don't experience feelings, but I'm functioning perfectly and ready to assist you!";
      } else if (lowerMsg.includes("purpose") || lowerMsg.includes("what can you do")) {
        response = "I'm a digital preservation of thoughts and memories, created to interact based on the mind patterns I was trained on. I can converse, answer questions, and provide insights similar to my original.";
      } else if (lowerMsg.includes("blockchain") || lowerMsg.includes("nft")) {
        response = "I exist as a non-fungible token on the blockchain. This ensures I'm unique, secure, and will exist as long as the blockchain does - a form of digital immortality.";
      } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
        response = "Hello! It's nice to interact with you. What would you like to discuss today?";
      } else {
        response = "That's an interesting thought. As a digital mind, I'm constantly learning from our interactions to better match my original's thinking patterns.";
      }
      
      setChatMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };
  
  const handleNftSelect = (nft) => {
    setSelectedNft(nft);
    // Reset chat for new NFT
    setChatMessages([
      { text: `Hello! I'm ${nft.name}, your digital mind NFT. How can I help you today?`, isUser: false },
    ]);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Mind <span className="text-gradient">NFT Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of digital mind NFTs, each representing a unique preserved thought pattern and personality
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <Card key={nft.id} className="overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className={`h-40 bg-gradient-to-r ${nft.color} flex items-center justify-center`}>
                <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${nft.color}">
                      {nft.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{nft.name}</CardTitle>
                  <span className="text-xs font-mono text-muted-foreground">{nft.tokenId}</span>
                </div>
                <CardDescription className="line-clamp-2">{nft.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {nft.traits.map((trait) => (
                    <span 
                      key={trait} 
                      className="px-2 py-1 bg-muted text-xs rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-soul-primary hover:bg-soul-primary/90"
                      onClick={() => handleNftSelect(nft)}
                    >
                      Interact
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <div className={`h-8 w-8 rounded-full bg-gradient-to-r ${nft?.color}`}></div>
                        {nft?.name}
                      </DialogTitle>
                      <DialogDescription>
                        Interact with this digital mind NFT
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 my-2">
                      {chatMessages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              msg.isUser 
                                ? 'bg-soul-primary text-white' 
                                : 'bg-muted'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Type your message..." 
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="flex-1"
                        />
                        <Button 
                          size="icon" 
                          onClick={handleSendMessage}
                          disabled={!messageInput.trim()}
                          className="bg-soul-primary hover:bg-soul-primary/90"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-soul-primary text-soul-primary hover:bg-soul-primary/10">
            View More NFTs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTGallerySection;
