export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP" | "SGD" | "AED" | "JPY" | "KRW" | "THB" | "MYR" | "AUD" | "CAD";

export const currencies: Record<CurrencyCode, { code: CurrencyCode; name: string; symbol: string }> = {
  INR: { code: "INR", name: "Indian Rupee", symbol: "₹" },
  USD: { code: "USD", name: "US Dollar", symbol: "$" },
  EUR: { code: "EUR", name: "Euro", symbol: "€" },
  GBP: { code: "GBP", name: "British Pound", symbol: "£" },
  SGD: { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  AED: { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  JPY: { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  KRW: { code: "KRW", name: "South Korean Won", symbol: "₩" },
  THB: { code: "THB", name: "Thai Baht", symbol: "฿" },
  MYR: { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  AUD: { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  CAD: { code: "CAD", name: "Canadian Dollar", symbol: "C$" }
};

export function formatCurrency(amountINR: number, currency: CurrencyCode, rate = 1) {
  const value = amountINR * rate;
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "JPY" || currency === "KRW" ? 0 : 0
  }).format(value);
}
