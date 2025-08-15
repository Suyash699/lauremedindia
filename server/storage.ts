import { type User, type InsertUser, type Product, type InsertProduct, type Category, type InsertCategory, type Specialty, type InsertSpecialty, type CartItem, type InsertCartItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductsBySpecialty(specialty: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  searchProducts(query: string): Promise<Product[]>;
  
  // Category methods
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Specialty methods
  getSpecialties(): Promise<Specialty[]>;
  getSpecialty(id: string): Promise<Specialty | undefined>;
  createSpecialty(specialty: InsertSpecialty): Promise<Specialty>;
  
  // Cart methods
  getCartItems(userId: string): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private categories: Map<string, Category>;
  private specialties: Map<string, Specialty>;
  private cartItems: Map<string, CartItem>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.categories = new Map();
    this.specialties = new Map();
    this.cartItems = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const categories = [
      { name: "Organic Prenatal Care", description: "Natural prenatal vitamins and supplements", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop", productCount: 4 },
      { name: "Natural Pain Relief", description: "Organic pain management solutions", imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop", productCount: 13 },
      { name: "Organic Immunity", description: "Natural immunity boosters", imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop", productCount: 8 },
      { name: "Calcium Management", description: "Natural calcium supplements", imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop", productCount: 6 },
      { name: "Vitamin D Management", description: "Organic vitamin D supplements", imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", productCount: 5 },
      { name: "Natural Skin Care", description: "Organic dermatology products", imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop", productCount: 7 },
      { name: "Herbal Hair Care", description: "Natural hair care solutions", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", productCount: 4 },
      { name: "Digestive Care", description: "Natural digestive health", imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop", productCount: 9 },
    ];

    categories.forEach(cat => {
      const id = randomUUID();
      this.categories.set(id, { ...cat, id });
    });

    // Initialize specialties
    const specialties = [
      { name: "Gynaecology Care", description: "Women's health and wellness", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop" },
      { name: "Nutrition Care", description: "Organic nutrition supplements", imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop" },
      { name: "Pain Management", description: "Natural pain relief solutions", imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop" },
      { name: "Respiratory Care", description: "Organic respiratory health", imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" },
      { name: "Natural Antibiotics", description: "Herbal antimicrobial products", imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop" },
      { name: "Cardiac Care", description: "Heart health supplements", imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop" },
      { name: "Dermatology", description: "Natural skin treatments", imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
      { name: "Diabetes Care", description: "Blood sugar management", imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop" },
      { name: "Gastro Care", description: "Digestive health solutions", imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop" },
      { name: "Immunity Care", description: "Natural immunity boosters", imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop" },
    ];

    specialties.forEach(spec => {
      const id = randomUUID();
      this.specialties.set(id, { ...spec, id });
    });

    // Initialize products
    const products = [
      {
        name: "Organic Immunity Plus",
        description: "Natural immunity booster with organic herbs and vitamins",
        price: "299.00",
        category: "Organic Immunity",
        specialty: "Immunity Care",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Organic Pain Relief Gel",
        description: "Fast-acting natural pain relief with organic extracts",
        price: "199.00",
        category: "Natural Pain Relief",
        specialty: "Pain Management",
        imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Organic Multi-Vitamin",
        description: "Complete nutrition with organic vitamins and minerals",
        price: "449.00",
        category: "Calcium Management",
        specialty: "Nutrition Care",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Herbal Digestive Tea",
        description: "Natural digestive support with organic herbs",
        price: "159.00",
        category: "Digestive Care",
        specialty: "Gastro Care",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Organic Prenatal Vitamins",
        description: "Complete prenatal nutrition for expecting mothers",
        price: "599.00",
        category: "Organic Prenatal Care",
        specialty: "Gynaecology Care",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Natural Vitamin D3",
        description: "Organic vitamin D supplement for bone health",
        price: "299.00",
        category: "Vitamin D Management",
        specialty: "Nutrition Care",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        inStock: true,
        isOrganic: true,
      },
    ];

    products.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { 
        ...product, 
        id, 
        specialty: product.specialty || null,
        createdAt: new Date() 
      });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.category === category);
  }

  async getProductsBySpecialty(specialty: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.specialty === specialty);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id, 
      specialty: insertProduct.specialty || null,
      imageUrl: insertProduct.imageUrl || null,
      inStock: insertProduct.inStock ?? true,
      isOrganic: insertProduct.isOrganic ?? true,
      createdAt: new Date() 
    };
    this.products.set(id, product);
    return product;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.products.values()).filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { 
      ...insertCategory, 
      id,
      description: insertCategory.description || null,
      imageUrl: insertCategory.imageUrl || null,
      productCount: insertCategory.productCount || null
    };
    this.categories.set(id, category);
    return category;
  }

  // Specialty methods
  async getSpecialties(): Promise<Specialty[]> {
    return Array.from(this.specialties.values());
  }

  async getSpecialty(id: string): Promise<Specialty | undefined> {
    return this.specialties.get(id);
  }

  async createSpecialty(insertSpecialty: InsertSpecialty): Promise<Specialty> {
    const id = randomUUID();
    const specialty: Specialty = { 
      ...insertSpecialty, 
      id,
      description: insertSpecialty.description || null,
      imageUrl: insertSpecialty.imageUrl || null
    };
    this.specialties.set(id, specialty);
    return specialty;
  }

  // Cart methods
  async getCartItems(userId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(item => item.userId === userId);
  }

  async addToCart(insertItem: InsertCartItem): Promise<CartItem> {
    const id = randomUUID();
    const item: CartItem = { 
      ...insertItem, 
      id,
      userId: insertItem.userId || null,
      productId: insertItem.productId || null,
      quantity: insertItem.quantity || null
    };
    this.cartItems.set(id, item);
    return item;
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (item) {
      const updated = { ...item, quantity };
      this.cartItems.set(id, updated);
      return updated;
    }
    return undefined;
  }

  async removeFromCart(id: string): Promise<boolean> {
    return this.cartItems.delete(id);
  }
}

export const storage = new MemStorage();
