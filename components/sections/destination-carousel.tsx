"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DestinationCard } from "@/types/content";
import { Badge } from "@/components/ui/badge";

export function DestinationCarousel({ items }: { items: DestinationCard[] }) {
  return (
    <section className="mt-8">
      <div className="flex items-end justify-between gap-4 px-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Popular destinations</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Circle through the world</h2>
        </div>
      </div>
      <div className="mt-5 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <motion.article
            key={item.name}
            whileHover={{ y: -6 }}
            className="kryden-card min-w-[170px] rounded-[28px] p-4"
          >
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-slate-200 bg-slate-100 dark:border-slate-800">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm font-semibold uppercase tracking-wide">{item.name}</div>
              <Badge className="mt-2 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">{item.price}</Badge>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
