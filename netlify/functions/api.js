"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server/functions/api.ts
var api_exports = {};
__export(api_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(api_exports);

// server/storage.ts
var import_crypto = require("crypto");
var MemStorage = class {
  users;
  products;
  categories;
  specialties;
  cartItems;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.specialties = /* @__PURE__ */ new Map();
    this.cartItems = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const categories = [
      {
        name: "Prenatal Care",
        description: "Prenatal vitamins and supplements",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        productCount: 4
      },
      {
        name: "Pain Relief",
        description: "Pain management solutions",
        imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
        productCount: 13
      },
      {
        name: "Immunity",
        description: "Immunity boosters",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop",
        productCount: 8
      },
      {
        name: "Calcium Management",
        description: "Calcium supplements",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop",
        productCount: 6
      },
      {
        name: "Vitamin D Management",
        description: "Vitamin D supplements",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        productCount: 5
      },
      {
        name: "Skin Care",
        description: "Dermatology products",
        imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        productCount: 7
      },
      {
        name: "Hair Care",
        description: "Hair care solutions",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        productCount: 4
      },
      {
        name: "Digestive Care",
        description: "Digestive health solutions",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
        productCount: 9
      }
    ];
    categories.forEach((cat) => {
      const id = (0, import_crypto.randomUUID)();
      this.categories.set(id, { ...cat, id });
    });
    const specialties = [
      {
        name: "Gynaecology Care",
        description: "Women's health and wellness",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
      },
      {
        name: "Nutrition Care",
        description: "Nutrition supplements",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop"
      },
      {
        name: "Pain Management",
        description: "Pain relief solutions",
        imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop"
      },
      {
        name: "Respiratory Care",
        description: "Respiratory health solutions",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
      },
      {
        name: "Antibiotics",
        description: "Antimicrobial products",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop"
      },
      {
        name: "Cardiac Care",
        description: "Heart health supplements",
        imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop"
      },
      {
        name: "Dermatology",
        description: "Skin treatments",
        imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop"
      },
      {
        name: "Diabetes Care",
        description: "Blood sugar management",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
      },
      {
        name: "Gastro Care",
        description: "Digestive health solutions",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop"
      },
      {
        name: "Immunity Care",
        description: "Natural immunity boosters",
        imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop"
      }
    ];
    specialties.forEach((spec) => {
      const id = (0, import_crypto.randomUUID)();
      this.specialties.set(id, { ...spec, id });
    });
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
        isOrganic: true
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
        isOrganic: true
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
        isOrganic: true
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
        isOrganic: true
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
        isOrganic: true
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
        isOrganic: true
      }
    ];
    products.forEach((product) => {
      const id = (0, import_crypto.randomUUID)();
      this.products.set(id, {
        ...product,
        id,
        specialty: product.specialty || null,
        createdAt: /* @__PURE__ */ new Date()
      });
    });
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = (0, import_crypto.randomUUID)();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Product methods
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter(
      (p) => p.category === category
    );
  }
  async getProductsBySpecialty(specialty) {
    return Array.from(this.products.values()).filter(
      (p) => p.specialty === specialty
    );
  }
  async createProduct(insertProduct) {
    const id = (0, import_crypto.randomUUID)();
    const product = {
      ...insertProduct,
      id,
      specialty: insertProduct.specialty || null,
      imageUrl: insertProduct.imageUrl || null,
      inStock: insertProduct.inStock ?? true,
      isOrganic: insertProduct.isOrganic ?? true,
      about: insertProduct.about || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.products.set(id, product);
    return product;
  }
  async searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      (p) => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm)
    );
  }
  // Category methods
  async getCategories() {
    return Array.from(this.categories.values());
  }
  async getCategory(id) {
    return this.categories.get(id);
  }
  async createCategory(insertCategory) {
    const id = (0, import_crypto.randomUUID)();
    const category = {
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
  async getSpecialties() {
    return Array.from(this.specialties.values());
  }
  async getSpecialty(id) {
    return this.specialties.get(id);
  }
  async createSpecialty(insertSpecialty) {
    const id = (0, import_crypto.randomUUID)();
    const specialty = {
      ...insertSpecialty,
      id,
      description: insertSpecialty.description || null,
      imageUrl: insertSpecialty.imageUrl || null
    };
    this.specialties.set(id, specialty);
    return specialty;
  }
  // Cart methods
  async getCartItems(userId) {
    return Array.from(this.cartItems.values()).filter(
      (item) => item.userId === userId
    );
  }
  async addToCart(insertItem) {
    const id = (0, import_crypto.randomUUID)();
    const item = {
      ...insertItem,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.cartItems.set(id, item);
    return item;
  }
  async updateCartItem(id, quantity) {
    const existing = this.cartItems.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, quantity };
    this.cartItems.set(id, updated);
    return updated;
  }
  async removeFromCart(id) {
    return this.cartItems.delete(id);
  }
};
var storage = new MemStorage();

// server/functions/api.ts
function jsonResponse(body, status = 200) {
  return {
    statusCode: status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
}
var handler = async (event) => {
  const originalPath = event.rawPath || event.path || "";
  const apiIndex = originalPath.indexOf("/api");
  const subpath = apiIndex >= 0 ? originalPath.slice(apiIndex) : originalPath;
  const method = event.httpMethod;
  try {
    if (method === "GET" && /^\/api\/products$/.test(subpath)) {
      const products = await storage.getProducts();
      return jsonResponse(products);
    }
    if (method === "GET" && /^\/api\/products\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop();
      const product = await storage.getProduct(id);
      if (!product) return jsonResponse({ error: "Product not found" }, 404);
      return jsonResponse(product);
    }
    if (method === "GET" && /^\/api\/products\/category\/[^/]+$/.test(subpath)) {
      const category = decodeURIComponent(subpath.split("/").pop());
      const products = await storage.getProductsByCategory(category);
      return jsonResponse(products);
    }
    if (method === "GET" && /^\/api\/products\/specialty\/[^/]+$/.test(subpath)) {
      const specialty = decodeURIComponent(subpath.split("/").pop());
      const products = await storage.getProductsBySpecialty(specialty);
      return jsonResponse(products);
    }
    if (method === "GET" && /^\/api\/search$/.test(subpath)) {
      const q = event.queryStringParameters?.q;
      if (!q) return jsonResponse({ error: "Search query is required" }, 400);
      const products = await storage.searchProducts(q);
      return jsonResponse(products);
    }
    if (method === "GET" && /^\/api\/categories$/.test(subpath)) {
      const categories = await storage.getCategories();
      return jsonResponse(categories);
    }
    if (method === "GET" && /^\/api\/categories\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop();
      const category = await storage.getCategory(id);
      if (!category) return jsonResponse({ error: "Category not found" }, 404);
      return jsonResponse(category);
    }
    if (method === "GET" && /^\/api\/specialties$/.test(subpath)) {
      const specialties = await storage.getSpecialties();
      return jsonResponse(specialties);
    }
    if (method === "GET" && /^\/api\/specialties\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop();
      const specialty = await storage.getSpecialty(id);
      if (!specialty) return jsonResponse({ error: "Specialty not found" }, 404);
      return jsonResponse(specialty);
    }
    if (method === "GET" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const userId = subpath.split("/").pop();
      const items = await storage.getCartItems(userId);
      return jsonResponse(items);
    }
    if (method === "POST" && /^\/api\/cart$/.test(subpath)) {
      const body = event.body ? JSON.parse(event.body) : {};
      const item = await storage.addToCart(body);
      return jsonResponse(item);
    }
    if (method === "PUT" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop();
      const body = event.body ? JSON.parse(event.body) : {};
      const item = await storage.updateCartItem(id, body.quantity);
      if (!item) return jsonResponse({ error: "Cart item not found" }, 404);
      return jsonResponse(item);
    }
    if (method === "DELETE" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop();
      const success = await storage.removeFromCart(id);
      if (!success) return jsonResponse({ error: "Cart item not found" }, 404);
      return jsonResponse({ success: true });
    }
    return jsonResponse({ error: "Not found" }, 404);
  } catch (err) {
    return jsonResponse({ error: err?.message || String(err) }, 500);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
