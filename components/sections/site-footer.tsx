import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/shared/logo";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-12 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-[1520px] gap-10 px-4 lg:px-6 xl:grid-cols-[1.2fr_.9fr_.9fr_.9fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Premium international travel booking with a clean white interface, editor-controlled content, and booking-ready infrastructure.
          </p>
          <div className="mt-5 flex gap-3 text-slate-600 dark:text-slate-300">
            {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <span key={i} className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 dark:border-slate-800">
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>
        <FooterCol title="Company" items={["About Us", "Contact", "Careers", "Press"]} />
        <FooterCol title="Support" items={["Help Center", "Manage Booking", "Refund Policy", "Travel Alerts"]} />
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2"><Phone size={15} /> +91 00000 00000</div>
            <div className="flex items-center gap-2"><Mail size={15} /> hello@kryden.travel</div>
            <div className="flex items-center gap-2"><Image src="/favicon.png" alt="" width={16} height={16} /> India</div>
          </div>
          <div className="mt-6 text-xs text-slate-500">Accepted payments: Visa, Mastercard, Amex, UPI, NetBanking.</div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1520px] border-t border-slate-200 px-4 pt-6 text-sm text-slate-500 lg:px-6 dark:border-slate-800">
        © {new Date().getFullYear()} KRYDEN Travel. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{title}</div>
      <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => <Link href="/" key={item} className="block hover:text-slate-950 dark:hover:text-white">{item}</Link>)}
      </div>
    </div>
  );
}
