import { NextResponse } from "next/server";
import { CurrencyCode } from "@/lib/currency";

const baseRates: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
  SGD: 0.016,
  AED: 0.044,
  JPY: 1.9,
  KRW: 16.2,
  THB: 0.43,
  MYR: 0.056,
  AUD: 0.018,
  CAD: 0.0165
};

export async function GET() {
  return NextResponse.json({ base: "INR", updatedAt: new Date().toISOString(), rates: baseRates });
}
