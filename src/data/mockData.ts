import type { Customer, Product, Bill } from "../types";

export const products: Product[] = [
  { id: 1, barcode: "8901030890012", name: "Tata Salt 1 kg", category: "Staples", brand: "Tata", price: 28, cost: 22, unit: "piece", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442f?w=240", active: true },
  { id: 2, barcode: "8901491101212", name: "Aashirvaad Atta 5 kg", category: "Staples", brand: "ITC", price: 285, cost: 245, unit: "bag", image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=240", active: true },
  { id: 3, barcode: "8901058001234", name: "Amul Butter 500 g", category: "Dairy", brand: "Amul", price: 285, cost: 258, unit: "pack", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=240", active: true },
  { id: 4, barcode: "8901725182010", name: "Parle-G Biscuits", category: "Snacks", brand: "Parle", price: 10, cost: 8, unit: "pack", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=240", active: true },
  { id: 5, barcode: "8901262010018", name: "Fortune Sunflower Oil 1 L", category: "Oils", brand: "Fortune", price: 160, cost: 137, unit: "bottle", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=240", active: true },
  { id: 6, barcode: "8904004400123", name: "Red Label Tea 500 g", category: "Beverages", brand: "Brooke Bond", price: 245, cost: 215, unit: "pack", image: "https://images.unsplash.com/photo-1544787219-7f47a6b9d9e?auto=format&w=240", active: true }
];

export const customers: Customer[] = [
  { id: 1, name: "Priya Sharma", phone: "9876543210", visits: 12, spent: 6840 },
  { id: 2, name: "Rahul Verma", phone: "9811122233", visits: 8, spent: 4320 },
  { id: 3, name: "Ananya Singh", phone: "9898989898", visits: 5, spent: 2180 },
  { id: 4, name: "Amit Kumar", phone: "9870011223", visits: 3, spent: 1540 }
];

export const bills: Bill[] = [
  { id: "BILL-00241", customer: "Priya Sharma", counter: "Counter 1", date: "Today, 06:42 PM", total: 842, method: "UPI" },
  { id: "BILL-00240", customer: "Walk-in customer", counter: "Counter 2", date: "Today, 06:31 PM", total: 365, method: "Cash" },
  { id: "BILL-00239", customer: "Rahul Verma", counter: "Counter 1", date: "Today, 06:18 PM", total: 1240, method: "UPI" },
  { id: "BILL-00238", customer: "Walk-in customer", counter: "Counter 2", date: "Today, 05:55 PM", total: 520, method: "Cash" }
];