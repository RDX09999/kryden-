"use client";

import { CalendarDays, MapPin, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PackageSearch() {
  return (
    <section className="relative z-20">
      <div className="kryden-card mx-auto -mt-16 grid max-w-6xl gap-3 rounded-[30px] p-4 md:grid-cols-[1.1fr_1fr_1fr_1fr_auto] md:p-5">
        <Field icon={<MapPin size={16} />} label="Where to?" value="Any destination" />
        <Field icon={<CalendarDays size={16} />} label="Check in" value="25 May, 2025" />
        <Field icon={<CalendarDays size={16} />} label="Check out" value="30 May, 2025" />
        <Field icon={<Users size={16} />} label="Travelers" value="2 travelers" />
        <Button className="h-full rounded-[24px] bg-blue-600 px-8 text-base hover:bg-blue-700">
          <Search size={16} /> Search Packages
        </Button>
      </div>
    </section>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[24px] px-4 py-3 md:border-r md:border-slate-200/70 md:last:border-0 dark:md:border-slate-800">
      <div className="text-slate-500">{icon}</div>
      <div>
        <div className="text-xs font-medium text-slate-500">{label}</div>
        <div className="text-sm font-semibold text-slate-950 dark:text-white">{value}</div>
      </div>
    </div>
  );
}
