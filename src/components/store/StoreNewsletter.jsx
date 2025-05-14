
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const StoreNewsletter = ({ store }) => {
  const { theme } = store;
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, special offers, and exclusive discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button
              style={{ 
                backgroundColor: theme.primaryColor,
                color: 'white',
              }}
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreNewsletter;
