
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StoreHero = ({ store }) => {
  const { name, type, theme, heroImage } = store;
  
  const getHeroTitle = () => {
    switch (type) {
      case 'fashion':
        return `Discover the Latest ${name} Collection`;
      case 'electronics':
        return `Cutting-Edge Tech at ${name}`;
      case 'food':
        return `Fresh & Organic Products at ${name}`;
      case 'jewelry':
        return `Luxury & Elegance at ${name}`;
      default:
        return `Welcome to ${name}`;
    }
  };
  
  const getHeroDescription = () => {
    switch (type) {
      case 'fashion':
        return 'Explore our curated collection of trendy and stylish clothing for every occasion. From casual to formal, we have everything you need to express your unique style.';
      case 'electronics':
        return 'Discover the latest innovations in technology. Our premium selection of gadgets and devices will enhance your digital lifestyle with cutting-edge features.';
      case 'food':
        return 'Experience the finest selection of organic and locally-sourced products. Our commitment to quality ensures you get the freshest and most nutritious options for your table.';
      case 'jewelry':
        return 'Indulge in exquisite craftsmanship and timeless elegance. Our collection of fine jewelry pieces are designed to make every moment special and memorable.';
      default:
        return 'Discover our exclusive collection of high-quality products designed to enhance your lifestyle. Shop now and experience the difference.';
    }
  };
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-50"></div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: theme.primaryColor }}
            >
              {getHeroTitle()}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              {getHeroDescription()}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="rounded-full"
                style={{ 
                  backgroundColor: theme.primaryColor,
                  color: 'white',
                }}
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full"
                style={{ 
                  borderColor: theme.primaryColor,
                  color: theme.primaryColor,
                }}
              >
                View Collections
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img 
                alt={heroImage.alt || `${name} hero image`}
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1565761427976-00b99e567d7f" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <span className="text-xl font-bold">%</span>
                </div>
                <div>
                  <p className="font-bold">Special Offer</p>
                  <p className="text-sm text-muted-foreground">Up to 40% off</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreHero;
