import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="mt-16 pb-20">
      <Card className="rounded-[34px] p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
              <MailCheck size={14} /> Newsletter
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Get travel offers, not spam.</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">A premium opt-in block for deals, destination news, and launch updates. No fake urgency, no fabricated nonsense.</p>
          </div>
          <div className="flex gap-3">
            <Input placeholder="Enter your email address" className="h-12" />
            <Button className="h-12 rounded-2xl bg-blue-600 px-6 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
