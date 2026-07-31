import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/content";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="mt-16">
      <div className="px-2">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Testimonials</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Waiting for your real reviews</h2>
      </div>

      <Card className="mt-6 rounded-[32px] p-8">
        {testimonials.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-950/60">
            <div className="text-lg font-semibold">No testimonials added yet</div>
            <p className="mt-2 text-sm text-slate-500">This section is ready to be populated from the database once you provide the real reviews.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-slate-200 p-5 dark:border-slate-800">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.review}</p>
                <div className="mt-4 text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-slate-500">{item.location}</div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}
