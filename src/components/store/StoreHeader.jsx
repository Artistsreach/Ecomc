
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoreHeader = ({ store }) => {
  const { name, theme } = store;
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md border-b"
      style={{ 
        borderColor: `${theme.primaryColor}20`,
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div 
              className="rounded-full p-1.5 text-white"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <ShoppingCart className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl">{name}</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            className="hidden md:flex"
            style={{ 
              backgroundColor: theme.primaryColor,
              color: 'white',
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart (0)
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default StoreHeader;
