import { Compass, Crown, Users2, HeartHandshake, MountainSnow, WalletCards, School2, ShieldAlert, Ship, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  ["Trending Destinations", Compass],
  ["Luxury Holidays", Crown],
  ["Family Trips", Users2],
  ["Honeymoon Packages", HeartHandshake],
  ["Adventure Tours", MountainSnow],
  ["Budget Trips", WalletCards],
  ["Student Specials", School2],
  ["Visa Assistance", ShieldAlert],
  ["Cruise Packages", Ship],
  ["Seasonal Deals", Sparkles]
] as const;

export function CategoryStrip() {
  return (
    <section className="mt-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map(([label, Icon]) => (
          <Card key={label} className="rounded-[26px] p-5 transition hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">{label}</div>
                <div className="text-xs text-slate-500">Editorial section</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
