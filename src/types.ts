export type Product = {
  id: number; barcode: string; name: string; category: string; brand: string;
  price: number; cost: number; unit: string; image: string; active: boolean;
};
export type Customer = { id: number; name: string; phone: string; visits: number; spent: number };
export type CartItem = { product: Product; quantity: number };
export type Bill = { id: string; customer: string; counter: string; date: string; total: number; method: "Cash" | "UPI" };
