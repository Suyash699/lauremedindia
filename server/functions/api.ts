import { storage } from "../storage";

function jsonResponse(body: unknown, status = 200) {
  return {
    statusCode: status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

type MinimalEvent = {
  rawPath?: string;
  path?: string;
  httpMethod?: string;
  body?: string | null;
  queryStringParameters?: Record<string, string | undefined> | null;
};

const handler = async (event: MinimalEvent) => {
  const originalPath = event.rawPath || event.path || "";
  // attempt to extract the part after /api
  const apiIndex = originalPath.indexOf("/api");
  const subpath = apiIndex >= 0 ? originalPath.slice(apiIndex) : originalPath;
  const method = event.httpMethod;

  try {
    // Products
    if (method === "GET" && /^\/api\/products$/.test(subpath)) {
      const products = await storage.getProducts();
      return jsonResponse(products);
    }

    if (method === "GET" && /^\/api\/products\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop()!;
      const product = await storage.getProduct(id);
      if (!product) return jsonResponse({ error: "Product not found" }, 404);
      return jsonResponse(product);
    }

    if (method === "GET" && /^\/api\/products\/category\/[^/]+$/.test(subpath)) {
      const category = decodeURIComponent(subpath.split("/").pop()!);
      const products = await storage.getProductsByCategory(category);
      return jsonResponse(products);
    }

    if (method === "GET" && /^\/api\/products\/specialty\/[^/]+$/.test(subpath)) {
      const specialty = decodeURIComponent(subpath.split("/").pop()!);
      const products = await storage.getProductsBySpecialty(specialty);
      return jsonResponse(products);
    }

    if (method === "GET" && /^\/api\/search$/.test(subpath)) {
      const q = event.queryStringParameters?.q;
      if (!q) return jsonResponse({ error: "Search query is required" }, 400);
      const products = await storage.searchProducts(q);
      return jsonResponse(products);
    }

    // Categories
    if (method === "GET" && /^\/api\/categories$/.test(subpath)) {
      const categories = await storage.getCategories();
      return jsonResponse(categories);
    }

    if (method === "GET" && /^\/api\/categories\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop()!;
      const category = await storage.getCategory(id);
      if (!category) return jsonResponse({ error: "Category not found" }, 404);
      return jsonResponse(category);
    }

    // Specialties
    if (method === "GET" && /^\/api\/specialties$/.test(subpath)) {
      const specialties = await storage.getSpecialties();
      return jsonResponse(specialties);
    }

    if (method === "GET" && /^\/api\/specialties\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop()!;
      const specialty = await storage.getSpecialty(id);
      if (!specialty) return jsonResponse({ error: "Specialty not found" }, 404);
      return jsonResponse(specialty);
    }

    // Cart
    if (method === "GET" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const userId = subpath.split("/").pop()!;
      const items = await storage.getCartItems(userId);
      return jsonResponse(items);
    }

    if (method === "POST" && /^\/api\/cart$/.test(subpath)) {
      const body = event.body ? JSON.parse(event.body) : {};
      const item = await storage.addToCart(body);
      return jsonResponse(item);
    }

    if (method === "PUT" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop()!;
      const body = event.body ? JSON.parse(event.body) : {};
      const item = await storage.updateCartItem(id, body.quantity);
      if (!item) return jsonResponse({ error: "Cart item not found" }, 404);
      return jsonResponse(item);
    }

    if (method === "DELETE" && /^\/api\/cart\/[^/]+$/.test(subpath)) {
      const id = subpath.split("/").pop()!;
      const success = await storage.removeFromCart(id);
      if (!success) return jsonResponse({ error: "Cart item not found" }, 404);
      return jsonResponse({ success: true });
    }

    return jsonResponse({ error: "Not found" }, 404);
  } catch (err: any) {
    return jsonResponse({ error: err?.message || String(err) }, 500);
  }
};

export { handler };
