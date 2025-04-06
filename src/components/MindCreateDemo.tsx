
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription 
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Upload, Mic, Brain, Image, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MindCreateDemo = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleStartProcess = () => {
    setIsProcessing(true);
    
    // Simulate progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsComplete(true);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const showSuccessToast = () => {
    toast({
      title: "Mind NFT Created Successfully!",
      description: "Your digital mind has been preserved on the blockchain.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-soul-primary to-soul-secondary hover:opacity-90 text-white px-8 py-6 text-lg">
          Create My Mind NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-2">Create Your Digital Mind</DialogTitle>
          <DialogDescription>
            Preserve your thoughts, memories, and personality as an NFT on the blockchain.
          </DialogDescription>
        </DialogHeader>

        {!isComplete ? (
          <div>
            <div className="flex justify-between mb-6">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    step === activeStep 
                      ? 'border-soul-primary bg-soul-primary/20 text-soul-primary' 
                      : step < activeStep 
                        ? 'border-soul-primary bg-soul-primary text-white'
                        : 'border-gray-300 text-gray-400'
                  }`}
                >
                  {step < activeStep ? <CheckCircle className="w-6 h-6" /> : step}
                </div>
              ))}
            </div>

            <Tabs value={`step-${activeStep}`} className="w-full">
              <TabsContent value="step-1" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>
                      Set the name and description for your digital mind
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <FormLabel>Name your Digital Mind</FormLabel>
                      <Input placeholder="e.g. My Creative Self, Professional Knowledge Base" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Description</FormLabel>
                      <Textarea 
                        placeholder="Describe the aspect of your mind you're preserving..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step-2" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Collection</CardTitle>
                    <CardDescription>
                      Upload data sources to build your digital mind model
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Card className="border border-dashed border-gray-300 hover:border-soul-primary transition-colors cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <Upload className="h-8 w-8 text-soul-primary mb-2" />
                          <p className="text-sm font-medium">Text Documents</p>
                          <p className="text-xs text-muted-foreground">PDFs, docs, notes, emails</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed border-gray-300 hover:border-soul-primary transition-colors cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <Mic className="h-8 w-8 text-soul-primary mb-2" />
                          <p className="text-sm font-medium">Voice Samples</p>
                          <p className="text-xs text-muted-foreground">Audio recordings, voice memos</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed border-gray-300 hover:border-soul-primary transition-colors cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <Brain className="h-8 w-8 text-soul-primary mb-2" />
                          <p className="text-sm font-medium">Questionnaire</p>
                          <p className="text-xs text-muted-foreground">Guided questions about yourself</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-dashed border-gray-300 hover:border-soul-primary transition-colors cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <Image className="h-8 w-8 text-soul-primary mb-2" />
                          <p className="text-sm font-medium">Images & Videos</p>
                          <p className="text-xs text-muted-foreground">Photos, video recordings</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step-3" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Model Options</CardTitle>
                    <CardDescription>
                      Configure how your digital mind will work
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <FormLabel>AI Model Type</FormLabel>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="font-medium">Standard</p>
                          <p className="text-xs text-muted-foreground">Base model, great for most users</p>
                        </div>
                        <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="font-medium">Advanced</p>
                          <p className="text-xs text-muted-foreground">Enhanced accuracy, more complex</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Voice Cloning</FormLabel>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="voice-clone" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="voice-clone" className="text-sm">Enable voice synthesis to match my voice patterns</label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Privacy Level</FormLabel>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="font-medium">Private</p>
                          <p className="text-xs text-muted-foreground">Only you can access</p>
                        </div>
                        <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="font-medium">Limited</p>
                          <p className="text-xs text-muted-foreground">Share with select users</p>
                        </div>
                        <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="font-medium">Public</p>
                          <p className="text-xs text-muted-foreground">Anyone can interact</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step-4" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Mint Your Mind NFT</CardTitle>
                    <CardDescription>
                      Review your settings and create your Mind NFT
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-md bg-muted">
                        <p className="font-medium">Summary</p>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li><span className="font-medium">Name:</span> My Creative Mind</li>
                          <li><span className="font-medium">Data Sources:</span> Text (3 files), Voice (2 recordings)</li>
                          <li><span className="font-medium">Model:</span> Advanced with voice synthesis</li>
                          <li><span className="font-medium">Privacy:</span> Limited Access</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <FormLabel>Connect Wallet</FormLabel>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" viewBox="0 0 784 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M392 784C608.2 784 784 608.2 784 392C784 175.8 608.2 0 392 0C175.8 0 0 175.8 0 392C0 608.2 175.8 784 392 784Z" fill="#3B99FC"/>
                            <path d="M392 156.8L391.61 169.06V499.2L392 499.59L545.61 409.02L392 156.8Z" fill="#343434"/>
                            <path d="M392 156.8L238.39 409.02L392 499.59V339.2V156.8Z" fill="#8C8C8C"/>
                            <path d="M392 532.75L391.79 532.99V641.21L392 641.6L545.67 442.18L392 532.75Z" fill="#3C3C3B"/>
                            <path d="M392 641.6V532.75L238.39 442.18L392 641.6Z" fill="#8C8C8C"/>
                            <path d="M392 499.59L545.61 409.02L392 339.2V499.59Z" fill="#141414"/>
                            <path d="M238.39 409.02L392 499.59V339.2L238.39 409.02Z" fill="#393939"/>
                          </svg>
                          Connect to MetaMask
                        </Button>
                      </div>

                      {!isProcessing ? (
                        <Button 
                          className="w-full bg-soul-primary hover:bg-soul-primary/90"
                          onClick={handleStartProcess}
                        >
                          Start Processing
                        </Button>
                      ) : (
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-soul-primary transition-all duration-300 ease-out"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-center text-muted-foreground">
                            Processing and encrypting your data: {uploadProgress}%
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between mt-4">
              <Button 
                variant="outline" 
                onClick={handlePrevStep}
                disabled={activeStep === 1}
              >
                Back
              </Button>
              <Button 
                onClick={activeStep === 4 && isComplete ? showSuccessToast : handleNextStep}
                disabled={isProcessing || (activeStep === 4 && !isComplete)}
                className={activeStep === 4 ? "bg-soul-primary" : ""}
              >
                {activeStep === 4 ? "Complete" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-soul-primary to-soul-secondary p-1 mb-6">
                <div className="w-full h-full rounded-md bg-white flex items-center justify-center">
                  <svg className="w-12 h-12 text-soul-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Mind NFT Created!</h3>
              <p className="text-center text-muted-foreground mb-6">
                Your digital mind has been successfully preserved on the blockchain.
              </p>

              <div className="w-full p-4 bg-muted rounded-md mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">NFT ID:</span>
                  <span className="text-sm font-mono">#SC36291A4D</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium">Blockchain:</span>
                  <span className="text-sm">Ethereum</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium">Transaction:</span>
                  <span className="text-sm font-mono truncate w-32 sm:w-auto">0x71C...9E23</span>
                </div>
              </div>

              <div className="flex gap-4 w-full">
                <Button variant="outline" className="flex-1">
                  View NFT
                </Button>
                <Button onClick={showSuccessToast} className="flex-1 bg-soul-primary hover:bg-soul-primary/90">
                  Start Interaction
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MindCreateDemo;
