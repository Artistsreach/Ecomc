
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const StoreFooter = ({ store }) => {
  const { name, theme } = store;
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="rounded-full p-1.5 text-white"
                style={{ backgroundColor: theme.primaryColor }}
              >
                <span className="text-sm font-bold">{name.charAt(0)}</span>
              </div>
              <span className="font-bold text-xl">{name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your one-stop destination for high-quality products and exceptional shopping experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">All Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Best Sellers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Special Offers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
