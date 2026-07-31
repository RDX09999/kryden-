import { ShieldCheck, Globe2, LockKeyhole, Headphones, PlaneTakeoff, BadgeCheck, BadgeDollarSign, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  { icon: ShieldCheck, title: "Best Price Guarantee", desc: "Transparent fares and fair pricing." },
  { icon: Globe2, title: "Worldwide Coverage", desc: "Destinations across every major region." },
  { icon: LockKeyhole, title: "Secure Payments", desc: "Encrypted checkout and safe booking flows." },
  { icon: Headphones, title: "24/7 Support", desc: "Real people, not a dead-end chatbot maze." },
  { icon: PlaneTakeoff, title: "Handpicked Packages", desc: "Curated combinations for better value." },
  { icon: BadgeCheck, title: "Instant Confirmation", desc: "Fast booking validation when available." },
  { icon: BadgeDollarSign, title: "Flexible Booking", desc: "Reschedules and policy-aware options." },
  { icon: Sparkles, title: "Trusted Travel Experts", desc: "Operational oversight and itinerary support." }
];

export function WhyChoose() {
  return (
    <section className="mt-16">
      <div className="max-w-2xl px-2">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Why choose KRYDEN</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Designed like a premium travel brand</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Elegant, fast, and operationally ready for real bookings instead of decorative nonsense.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="rounded-[28px] p-6 transition hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
