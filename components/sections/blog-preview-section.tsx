import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/types/content";

export function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mt-16">
      <div className="px-2">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Travel blog</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Editorial travel stories</h2>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden rounded-[30px]">
            <div className="relative h-52">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">{post.category}</div>
              <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
