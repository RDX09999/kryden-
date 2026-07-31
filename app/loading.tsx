import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white/95 dark:bg-slate-950/95">
      <div className="kryden-card rounded-[28px] px-8 py-7 text-center">
        <Image src="/brand/kryden-logo-black.png" alt="Kryden" width={120} height={120} className="mx-auto h-16 w-auto" />
        <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="animate-shimmer h-full w-full" />
        </div>
        <p className="mt-3 text-sm text-slate-500">Loading premium travel experience…</p>
      </div>
    </div>
  );
}
