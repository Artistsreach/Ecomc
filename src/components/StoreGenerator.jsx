
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2 } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const promptExamples = [
  "Create a luxury jewelry store called 'Elegance' with diamond rings and gold necklaces",
  "Build a tech gadget store with the latest smartphones and accessories",
  "Design an organic food market with fresh produce and healthy snacks",
  "Make a trendy fashion boutique with summer dresses and casual wear"
];

const StoreGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedExample, setSelectedExample] = useState(null);
  const { generateStore, isGenerating } = useStore();
  const navigate = useNavigate();

  const handleExampleClick = (index) => {
    setSelectedExample(index);
    setPrompt(promptExamples[index]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    const newStore = await generateStore(prompt);
    
    if (newStore) {
      navigate(`/preview/${newStore.id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Generate Your Store</CardTitle>
          <CardDescription>
            Describe your dream store and we'll create it for you instantly.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Describe your store (e.g., 'Create a luxury jewelry store with diamond rings and gold necklaces')"
              className="min-h-[120px] text-base resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isGenerating}
            />
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Or try one of these examples:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {promptExamples.map((example, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant={selectedExample === index ? "default" : "outline"}
                    className="h-auto py-2 px-3 justify-start text-left text-sm font-normal"
                    onClick={() => handleExampleClick(index)}
                    disabled={isGenerating}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
        
        <CardFooter>
          <Button 
            onClick={handleSubmit}
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Store...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Store
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StoreGenerator;
