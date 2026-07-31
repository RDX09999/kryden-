"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { HeroSlide } from "@/types/content";

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = useMemo(() => slides[index], [slides, index]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1520px] px-4 pt-4 lg:px-6">
        <div className="relative h-[720px] overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-950 md:h-[760px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0.1, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.65 }}
              className="absolute inset-0"
            >
              <Image src={current.image} alt={current.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-white/12 dark:from-slate-950/92 dark:via-slate-950/60 dark:to-slate-950/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,.14),transparent_30%)]" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10 lg:p-14">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-3xl pt-8 md:pt-14">
                <div className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-blue-700 backdrop-blur dark:border-blue-500/20 dark:bg-slate-950/50 dark:text-blue-300">
                  KRYDEN GLOBAL JOURNEYS
                </div>
                <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl dark:text-white">
                  {current.title}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {current.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Best Price Guarantee","24/7 Support","Secure Booking"].map((item) => (
                    <div key={item} className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
                      <BadgeCheck size={16} className="text-blue-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden shrink-0 rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-lg lg:block dark:border-slate-800 dark:bg-slate-950/70">
                <div className="text-sm font-semibold text-slate-500">Featured offer</div>
                <div className="mt-2 text-3xl font-black text-blue-600">{current.discount}</div>
                <div className="mt-2 text-sm text-slate-600">Seasonal fares on selected routes.</div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div className="max-w-xl rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-2xl backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/70">
                <div className="text-sm text-slate-500">Starting from</div>
                <div className="mt-1 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">{current.price}</div>
                <div className="mt-1 text-sm text-slate-500">{current.duration}</div>
                <Button className="mt-4 rounded-2xl bg-blue-600 px-5 hover:bg-blue-700">View Package</Button>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setIndex((v) => (v - 1 + slides.length) % slides.length)} className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-white/90 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
                  <ArrowLeft size={18} />
                </button>
                <button onClick={() => setIndex((v) => (v + 1) % slides.length)} className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-white/90 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn("h-2.5 rounded-full transition-all", i === index ? "w-10 bg-blue-600" : "w-2.5 bg-white/80")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
