const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1";

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `API request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

// Example when the Spring Boot backend is ready:
// const products = await apiRequest<Product[]>("/products?active=true");
