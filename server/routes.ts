import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Products routes
  app.get('/api/products', async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });

  app.get('/api/products/:id', async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  });

  app.get('/api/products/category/:category', async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products by category' });
    }
  });

  app.get('/api/products/specialty/:specialty', async (req, res) => {
    try {
      const products = await storage.getProductsBySpecialty(req.params.specialty);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products by specialty' });
    }
  });

  app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
      }
      const products = await storage.searchProducts(query);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Search failed' });
    }
  });

  // Categories routes
  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  });

  app.get('/api/categories/:id', async (req, res) => {
    try {
      const category = await storage.getCategory(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch category' });
    }
  });

  // Specialties routes
  app.get('/api/specialties', async (req, res) => {
    try {
      const specialties = await storage.getSpecialties();
      res.json(specialties);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch specialties' });
    }
  });

  app.get('/api/specialties/:id', async (req, res) => {
    try {
      const specialty = await storage.getSpecialty(req.params.id);
      if (!specialty) {
        return res.status(404).json({ error: 'Specialty not found' });
      }
      res.json(specialty);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch specialty' });
    }
  });

  // Cart routes
  app.get('/api/cart/:userId', async (req, res) => {
    try {
      const items = await storage.getCartItems(req.params.userId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  });

  app.post('/api/cart', async (req, res) => {
    try {
      const item = await storage.addToCart(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  });

  app.put('/api/cart/:id', async (req, res) => {
    try {
      const { quantity } = req.body;
      const item = await storage.updateCartItem(req.params.id, quantity);
      if (!item) {
        return res.status(404).json({ error: 'Cart item not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update cart item' });
    }
  });

  app.delete('/api/cart/:id', async (req, res) => {
    try {
      const success = await storage.removeFromCart(req.params.id);
      if (!success) {
        return res.status(404).json({ error: 'Cart item not found' });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove cart item' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
