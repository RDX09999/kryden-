import { Card } from "@/components/ui/card";

export function WorldMapSection() {
  return (
    <section className="mt-16">
      <Card className="overflow-hidden rounded-[32px] p-0">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">World map</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Available across major travel corridors</h2>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">This section can be wired to destination availability from the admin dashboard and rendered from the database.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Singapore", "Japan", "Dubai", "Paris", "Maldives", "Australia", "Thailand", "Italy"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">{item}</div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,.15),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,.15),transparent_35%),linear-gradient(180deg,rgba(15,23,42,.02),rgba(15,23,42,.08))]">
            <div className="absolute inset-0 opacity-70">
              <svg viewBox="0 0 900 500" className="h-full w-full">
                <path d="M120 120 C 190 60, 250 70, 320 120 S 470 190, 520 150 S 650 80, 740 130" fill="none" stroke="currentColor" strokeWidth="5" opacity=".15"/>
                <circle cx="220" cy="150" r="10" fill="currentColor" opacity=".18"/>
                <circle cx="360" cy="132" r="10" fill="currentColor" opacity=".18"/>
                <circle cx="520" cy="150" r="10" fill="currentColor" opacity=".18"/>
                <circle cx="690" cy="120" r="10" fill="currentColor" opacity=".18"/>
                <path d="M140 300 C 240 250, 350 270, 420 310 S 580 380, 680 300" fill="none" stroke="currentColor" strokeWidth="5" opacity=".13"/>
                <circle cx="260" cy="275" r="10" fill="currentColor" opacity=".18"/>
                <circle cx="420" cy="307" r="10" fill="currentColor" opacity=".18"/>
                <circle cx="620" cy="325" r="10" fill="currentColor" opacity=".18"/>
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
