"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Globe, Heart, Menu, MoonStar, Search, SunMedium, UserCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { currencies, CurrencyCode } from "@/lib/currency";

export function SiteHeader() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setCurrencyOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = useMemo(() => currencies[currency], [currency]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/82">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {["Home","Packages","Destinations","Hotels","Flights","Deals","About Us","Contact"].map((item) => (
            <Link key={item} href="/" className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            onClick={() => setCurrencyOpen((v) => !v)}
          >
            <Globe size={16} />
            <span>{current.code}</span>
            <ChevronDown size={15} className={cn("transition", currencyOpen && "rotate-180")} />
          </button>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>

          <button className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm md:inline-flex dark:border-slate-800 dark:bg-slate-950" aria-label="Wishlist">
            <Heart size={18} />
          </button>
          <button className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm md:inline-flex dark:border-slate-800 dark:bg-slate-950" aria-label="Account">
            <UserCircle2 size={18} />
          </button>

          <Button className="hidden rounded-2xl bg-blue-600 px-5 shadow-blue-600/15 hover:bg-blue-700 md:inline-flex">
            <Search size={16} /> Book Now
          </Button>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm lg:hidden dark:border-slate-800 dark:bg-slate-950" onClick={() => setMenuOpen((v) => !v)}>
            <Menu size={18} />
          </button>
        </div>
      </div>

      {currencyOpen && (
        <div ref={ref} className="absolute right-4 top-[72px] w-[310px] rounded-[24px] border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
          <div className="px-3 py-2 text-sm font-semibold">Select currency</div>
          <div className="max-h-[370px] overflow-auto">
            {Object.values(currencies).map((item) => (
              <button
                key={item.code}
                onClick={() => { setCurrency(item.code); setCurrencyOpen(false); }}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-900",
                  currency === item.code && "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                )}
              >
                <div>
                  <div className="font-medium">{item.code}</div>
                  <div className="text-xs text-slate-500">{item.name}</div>
                </div>
                <span>{item.symbol}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="grid grid-cols-2 gap-3">
            {["Home","Packages","Destinations","Hotels","Flights","Deals","About Us","Contact"].map((item) => (
              <Link key={item} href="/" className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium dark:bg-slate-900">{item}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
