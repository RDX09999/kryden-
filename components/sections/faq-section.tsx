import { Card } from "@/components/ui/card";
import type { FAQItem } from "@/types/content";

export function FaqSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <section className="mt-16">
      <div className="px-2">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">FAQs</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Questions people will actually ask</h2>
      </div>
      <div className="mt-6 grid gap-4">
        {faqs.map((faq) => (
          <Card key={faq.question} className="rounded-[26px] p-6">
            <div className="text-lg font-semibold">{faq.question}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
