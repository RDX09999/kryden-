"use client";

import Image from "next/image";
import { Bookmark, Plane, Soup, Star, CalendarRange, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PackageCard } from "@/types/content";

export function FeaturedPackages({ packages }: { packages: PackageCard[] }) {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4 px-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Featured packages</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Top journeys built to convert</h2>
        </div>
        <div className="hidden text-sm text-slate-500 md:block">Live pricing is driven by the backend currency layer.</div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg) => (
          <motion.article key={pkg.id} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
            <Card className="overflow-hidden rounded-[30px]">
              <div className="relative h-64">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">{pkg.tag}</div>
                <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900">
                  <Bookmark size={16} />
                </button>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <div className="mt-1 text-sm text-slate-500">{pkg.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 line-through">{pkg.originalPrice}</div>
                    <div className="text-2xl font-bold text-slate-950 dark:text-white">{pkg.discountedPrice}</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <Chip icon={<Star size={12} />} label={`${pkg.rating} hotel rating`} />
                  <Chip icon={<Plane size={12} />} label="Flight included" />
                  <Chip icon={<Soup size={12} />} label="Meals included" />
                  <Chip icon={<CalendarRange size={12} />} label={pkg.cancellation} />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {pkg.highlights.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">{item}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                    <BadgePercent size={12} /> {pkg.saveLabel}
                  </div>
                  <Button className="rounded-2xl bg-blue-600 px-5 hover:bg-blue-700">Book Now</Button>
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
      {icon}
      {label}
    </span>
  );
}
