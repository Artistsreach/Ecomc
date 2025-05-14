
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { fetchPexelsImages } from '@/lib/utils';

const StoreContext = createContext(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [currentStore, setCurrentStore] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedStores = localStorage.getItem('ecommerce-stores');
    if (savedStores) {
      try {
        setStores(JSON.parse(savedStores));
      } catch (error) {
        console.error('Failed to parse stored stores:', error);
        toast({
          title: 'Error',
          description: 'Failed to load your saved stores',
          variant: 'destructive',
        });
      }
    }
  }, [toast]);

  useEffect(() => {
    if (stores.length > 0) {
      localStorage.setItem('ecommerce-stores', JSON.stringify(stores));
    }
  }, [stores]);

  const generateStore = async (prompt) => {
    setIsGenerating(true);
    
    try {
      const storeId = `store-${Date.now()}`;
      const keywords = prompt.toLowerCase().split(' ');
      
      let storeType = 'general';
      if (keywords.some(word => ['clothing', 'fashion', 'apparel', 'wear'].includes(word))) {
        storeType = 'fashion';
      } else if (keywords.some(word => ['tech', 'electronics', 'gadget', 'digital'].includes(word))) {
        storeType = 'electronics';
      } else if (keywords.some(word => ['food', 'grocery', 'meal', 'organic'].includes(word))) {
        storeType = 'food';
      } else if (keywords.some(word => ['jewelry', 'accessory', 'watch', 'luxury'].includes(word))) {
        storeType = 'jewelry';
      }
      
      const brandWords = prompt.split(' ').filter(word => word.charAt(0) === word.charAt(0).toUpperCase());
      const brandName = brandWords.length > 0 ? brandWords[0] : `Brand${Math.floor(Math.random() * 1000)}`;
      
      const products = await generateProductsByType(storeType, 6);
      const heroImage = await fetchPexelsImages(`${storeType} store hero`, 1, 'landscape');
      
      const newStore = {
        id: storeId,
        name: brandName,
        type: storeType,
        description: `${brandName} - ${storeType.charAt(0).toUpperCase() + storeType.slice(1)} Store`,
        prompt,
        products,
        heroImage: heroImage[0] || { src: { large: 'https://via.placeholder.com/1200x800.png?text=Hero+Image' }, alt: 'Placeholder Hero Image' },
        createdAt: new Date().toISOString(),
        theme: {
          primaryColor: getRandomColor(),
          secondaryColor: getRandomColor(),
          fontFamily: getRandomFont(),
          layout: getRandomLayout(),
        }
      };
      
      setStores(prevStores => [...prevStores, newStore]);
      setCurrentStore(newStore);
      
      toast({
        title: 'Store Generated!',
        description: `Your ${storeType} store "${brandName}" has been created successfully.`,
      });
      
      return newStore;
    } catch (error) {
      console.error('Error generating store:', error);
      toast({
        title: 'Generation Failed',
        description: 'Failed to generate your store. Please try again.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  const getStoreById = (id) => {
    return stores.find(store => store.id === id) || null;
  };

  const updateStore = (storeId, updates) => {
    setStores(prevStores => 
      prevStores.map(store => 
        store.id === storeId ? { ...store, ...updates } : store
      )
    );
    
    if (currentStore && currentStore.id === storeId) {
      setCurrentStore(prev => ({ ...prev, ...updates }));
    }
    
    toast({
      title: 'Store Updated',
      description: 'Your store has been updated successfully.',
    });
  };

  const deleteStore = (storeId) => {
    setStores(prevStores => prevStores.filter(store => store.id !== storeId));
    
    if (currentStore && currentStore.id === storeId) {
      setCurrentStore(null);
    }
    
    toast({
      title: 'Store Deleted',
      description: 'Your store has been deleted successfully.',
    });
  };

  const getRandomColor = () => {
    const colors = [
      '#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', 
      '#EF4444', '#6366F1', '#14B8A6', '#F97316', '#8B5CF6'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomFont = () => {
    const fonts = ['Inter', 'Roboto', 'Poppins', 'Montserrat', 'Open Sans'];
    return fonts[Math.floor(Math.random() * fonts.length)];
  };

  const getRandomLayout = () => {
    const layouts = ['grid', 'list', 'masonry', 'carousel'];
    return layouts[Math.floor(Math.random() * layouts.length)];
  };

  const generateProductsByType = async (type, count) => {
    const products = [];
    
    const priceRanges = {
      fashion: { min: 19.99, max: 199.99 },
      electronics: { min: 49.99, max: 1299.99 },
      food: { min: 4.99, max: 49.99 },
      jewelry: { min: 99.99, max: 999.99 },
      general: { min: 9.99, max: 299.99 }
    };
    
    const range = priceRanges[type] || priceRanges.general;
    
    const productNames = {
      fashion: [
        'Classic T-Shirt', 'Slim Fit Jeans', 'Cotton Hoodie', 'Summer Dress',
        'Leather Jacket', 'Casual Shorts', 'Wool Sweater', 'Formal Shirt'
      ],
      electronics: [
        'Wireless Headphones', 'Smart Watch', 'Bluetooth Speaker', 'Gaming Mouse',
        'Ultra HD Monitor', 'Mechanical Keyboard', 'Wireless Charger', 'Portable SSD'
      ],
      food: [
        'Organic Pasta', 'Gourmet Coffee', 'Artisan Chocolate', 'Premium Olive Oil',
        'Aged Cheese', 'Organic Honey', 'Specialty Tea', 'Craft Beer Selection'
      ],
      jewelry: [
        'Silver Necklace', 'Gold Bracelet', 'Diamond Earrings', 'Luxury Watch',
        'Pearl Set', 'Gemstone Ring', 'Titanium Band', 'Sapphire Pendant'
      ],
      general: [
        'Premium Product', 'Essential Item', 'Bestseller', 'New Arrival',
        'Limited Edition', 'Customer Favorite', 'Seasonal Special', 'Exclusive Item'
      ]
    };
    
    const names = productNames[type] || productNames.general;
    const imageQueries = names.map(name => `${type} ${name}`);
    const productImages = await fetchPexelsImages(imageQueries.join(','), count, 'square');

    for (let i = 0; i < count; i++) {
      const randomPrice = (Math.random() * (range.max - range.min) + range.min).toFixed(2);
      const image = productImages[i] || { src: { medium: `https://via.placeholder.com/400x400.png?text=${names[i % names.length]}` }, alt: `Placeholder for ${names[i % names.length]}` };
      
      products.push({
        id: `product-${Date.now()}-${i}`,
        name: names[i % names.length],
        price: parseFloat(randomPrice),
        description: `High-quality ${type} product for your collection.`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        stock: Math.floor(Math.random() * 100) + 1,
        image: image
      });
    }
    
    return products;
  };

  const value = {
    stores,
    currentStore,
    isGenerating,
    generateStore,
    getStoreById,
    updateStore,
    deleteStore,
    setCurrentStore
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
