import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <Image
        src="/brand/kryden-logo-black.png"
        alt="KRYDEN"
        width={compact ? 52 : 140}
        height={compact ? 52 : 140}
        className={compact ? "h-10 w-10 object-contain" : "h-11 w-auto object-contain"}
        priority
      />
      {!compact && (
        <div className="leading-tight">
          <div className="text-[0.95rem] font-semibold tracking-[0.28em] text-slate-950">KRYDEN</div>
          <div className="text-[0.72rem] text-slate-500">Explore More. Pay Less.</div>
        </div>
      )}
    </Link>
  );
}
