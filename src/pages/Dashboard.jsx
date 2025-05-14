
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import StoreGenerator from '@/components/StoreGenerator';
import StoreList from '@/components/StoreList';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 container mx-auto px-4 py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Create Your E-commerce Store with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Describe your dream store and watch as AI generates a complete e-commerce experience in seconds.
          </p>
        </motion.div>
        
        <StoreGenerator />
        <StoreList />
      </motion.div>
      
      <footer className="mt-auto py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 StoreGen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
