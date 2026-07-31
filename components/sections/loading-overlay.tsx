"use client";

import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setMounted(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] grid place-items-center bg-white/95 transition-opacity dark:bg-slate-950/95">
      <div className="kryden-card rounded-[28px] px-8 py-7 text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-pulse rounded-2xl bg-slate-900" />
        <div className="mx-auto h-1.5 w-56 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="animate-shimmer h-full w-full" />
        </div>
      </div>
    </div>
  );
}
