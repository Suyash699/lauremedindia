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
      { name: "Prenatal Care", description: "Prenatal vitamins and supplements", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop", productCount: 4 },
      { name: "Pain Relief", description: "Pain management solutions", imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop", productCount: 13 },
      { name: "Immunity", description: "Immunity boosters", imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop", productCount: 8 },
      { name: "Calcium Management", description: "Calcium supplements", imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop", productCount: 6 },
      { name: "Vitamin D Management", description: "Vitamin D supplements", imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", productCount: 5 },
      { name: "Skin Care", description: "Dermatology products", imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop", productCount: 7 },
      { name: "Hair Care", description: "Hair care solutions", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", productCount: 4 },
      { name: "Digestive Care", description: "Digestive health solutions", imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop", productCount: 9 },
    ];

    categories.forEach(cat => {
      const id = randomUUID();
      this.categories.set(id, { ...cat, id });
    });

        // Initialize products
    const products = [
      {
        name: "Immunity Plus",
        description: "Immunity booster with organic herbs and vitamins",
        price: "299.00",
        category: "Immunity",
        specialty: "Immunity Care",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop",
        about: "Immunity Plus is a comprehensive immunity booster formulated with a blend of formulas and vitamins designed to support your body's natural defense mechanisms. This product is perfect for maintaining overall health and well-being, especially during the changing seasons.",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Pain Relief Gel",
        description: "Fast-acting pain relief with lasting effects",
        price: "199.00",
        category: "Pain Relief",
        specialty: "Pain Management",
        imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
        about: "Pain Relief Gel is a fast-acting, pain reliever that provides immediate relief from minor aches and pains. Its unique formula ensures lasting effects, making it an ideal choice for quick relief from everyday discomforts.",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Multi-Vitamin",
        description: "Complete nutrition with vitamins and minerals",
        price: "449.00",
        category: "Calcium Management",
        specialty: "Nutrition Care",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop",
        about: "Multi-Vitamin is a comprehensive nutritional supplement designed to support overall health and well-being. This product contains a balanced mix of essential vitamins and minerals, ensuring that your body receives the nutrients it needs to function optimally.",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Herbal Digestive Tea",
        description: "Effective and Fast Digestive support",
        price: "159.00",
        category: "Digestive Care",
        specialty: "Gastro Care",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
        about: "Herbal Digestive Tea is a natural remedy designed to support digestive health and provide relief from common digestive issues. This tea is made from a blend of organic herbs and spices, offering a gentle and effective way to maintain a healthy digestive system.",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Prenatal Vitamins",
        description: "Complete prenatal nutrition for expecting mothers",
        price: "599.00",
        category: "Organic Prenatal Care",
        specialty: "Gynaecology Care",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        about: "Prenatal Vitamin is a specialized supplement designed to support the nutritional needs of expecting mothers. This product contains a comprehensive blend of vitamins and minerals, ensuring that both mother and baby receive the essential nutrients required for a healthy pregnancy.",
        inStock: true,
        isOrganic: true,
      },
      {
        name: "Vitamin D3",
        description: "vitamin D supplement for great bone health",
        price: "299.00",
        category: "Vitamin D Management",
        specialty: "Nutrition Care",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        about: "Vitamin D3 is a essential supplement designed to support bone health and overall well-being. This product contains a comprehensive blend of vitamins and minerals, ensuring that both mother and baby receive the essential nutrients required for a healthy pregnancy.",
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
      about: insertProduct.about || null,
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

}

export const storage = new MemStorage();
