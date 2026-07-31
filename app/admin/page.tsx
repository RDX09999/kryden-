export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
      <div className="kryden-card rounded-[32px] p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Admin dashboard</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Database-driven editor for destinations, packages, banners, pricing, FAQs, blogs, testimonials, and homepage blocks.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {["Destinations", "Packages", "Banners", "Currencies"].map((item) => (
            <div key={item} className="rounded-[24px] border border-slate-200 p-5 dark:border-slate-800">{item}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
