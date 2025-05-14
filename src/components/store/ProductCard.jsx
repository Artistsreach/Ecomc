
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product, theme, index }) => {
  const { name, price, rating, description, image } = product;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="product-card"
    >
      <Card className="h-full overflow-hidden border hover:border-primary/50 transition-all duration-300">
        <div className="aspect-square relative overflow-hidden bg-muted">
          <img 
            alt={image.alt || `${name} product image`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
           src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
          
          <div 
            className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded-full"
            style={{ backgroundColor: theme.primaryColor }}
          >
            New
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <span className="font-bold text-lg" style={{ color: theme.primaryColor }}>
              ${price.toFixed(2)}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {description}
          </p>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`} 
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({rating})</span>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full"
            style={{ 
              backgroundColor: theme.primaryColor,
              color: 'white',
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
