
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, RefreshCw, Clock } from 'lucide-react';

const StoreFeatures = ({ store }) => {
  const { theme } = store;
  
  const features = [
    {
      icon: <Truck />,
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $50'
    },
    {
      icon: <Shield />,
      title: 'Secure Payments',
      description: 'Protected by industry-leading encryption'
    },
    {
      icon: <RefreshCw />,
      title: 'Easy Returns',
      description: '30-day money back guarantee'
    },
    {
      icon: <Clock />,
      title: '24/7 Support',
      description: 'Our team is always here to help'
    }
  ];
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-sm border flex flex-col items-center text-center"
            >
              <div 
                className="h-12 w-12 rounded-full flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: theme.primaryColor }}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreFeatures;
