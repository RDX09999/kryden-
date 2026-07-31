import { getHomeContent } from "@/lib/content";
import { HeroSlider } from "./hero-slider";
import { PackageSearch } from "./package-search";
import { DestinationCarousel } from "./destination-carousel";
import { WhyChoose } from "./why-choose";
import { FeaturedPackages } from "./featured-packages";
import { CategoryStrip } from "./category-strip";
import { WorldMapSection } from "./world-map-section";
import { TestimonialsSection } from "./testimonials-section";
import { NewsletterSection } from "./newsletter-section";
import { BlogPreviewSection } from "./blog-preview-section";
import { FaqSection } from "./faq-section";

export async function HomePage() {
  const content = await getHomeContent();

  return (
    <div>
      <HeroSlider slides={content.heroSlides} />
      <div className="mx-auto -mt-8 max-w-[1520px] px-4 lg:px-6">
        <PackageSearch />
        <DestinationCarousel items={content.destinations} />
      </div>
      <div className="mx-auto max-w-[1520px] px-4 lg:px-6">
        <WhyChoose />
        <FeaturedPackages packages={content.featuredPackages} />
        <CategoryStrip />
        <WorldMapSection />
        <TestimonialsSection testimonials={content.testimonials} />
        <BlogPreviewSection posts={content.posts} />
        <FaqSection faqs={content.faqs} />
        <NewsletterSection />
      </div>
    </div>
  );
}
