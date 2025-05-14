
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/store/ProductCard';

const ProductGrid = ({ store }) => {
  const { products, theme } = store;
  
  return (
    <section className="py-12 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our handpicked selection of premium products designed to enhance your lifestyle.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
