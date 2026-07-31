import type { BlogPost, DestinationCard, FAQItem, HeroSlide, PackageCard, Testimonial } from "@/types/content";

const fallback = {
  heroSlides: [
    {
      title: "Discover the World with KRYDEN",
      subtitle: "Handpicked travel experiences built with premium design, clean booking flows, and high-trust service architecture.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
      price: "From ₹24,999",
      duration: "4 Days / 3 Nights",
      discount: "Up to 40% OFF"
    },
    {
      title: "Japan, Singapore, Dubai and Beyond",
      subtitle: "Curated itineraries for leisure, family, honeymoon, student and business travel.",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
      price: "From ₹39,999",
      duration: "6 Days / 5 Nights",
      discount: "Seasonal fares"
    },
    {
      title: "Luxury holidays, the calm way",
      subtitle: "Elegant stays, smarter packaging, and a layout that does not look like a cheap template wearing a tie.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
      price: "From ₹59,999",
      duration: "7 Days / 6 Nights",
      discount: "Best price"
    }
  ] satisfies HeroSlide[],
  destinations: [
    { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80", price: "From ₹24,999" },
    { name: "Europe", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=500&q=80", price: "From ₹59,999" },
    { name: "Japan", image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=500&q=80", price: "From ₹39,999" },
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80", price: "From ₹31,999" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80", price: "From ₹49,999" },
    { name: "Italy", image: "https://images.unsplash.com/photo-1533670808417-b7c4e6b4c5c2?auto=format&fit=crop&w=500&q=80", price: "From ₹54,999" }
  ] satisfies DestinationCard[],
  featuredPackages: [
    {
      id: "pkg-1",
      image: "https://images.unsplash.com/photo-1496568816309-c0e4b80d8f19?auto=format&fit=crop&w=1000&q=80",
      title: "Singapore Signature Escape",
      duration: "5 Days / 3 Nights",
      rating: "4.7",
      cancellation: "Free cancellation",
      originalPrice: "₹34,999",
      discountedPrice: "₹24,999",
      saveLabel: "Save 29%",
      tag: "Best Seller",
      highlights: ["Marina Bay", "Sentosa", "City tour"]
    },
    {
      id: "pkg-2",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1000&q=80",
      title: "Japan Blossom Journey",
      duration: "6 Days / 5 Nights",
      rating: "4.8",
      cancellation: "Flexible policy",
      originalPrice: "₹56,999",
      discountedPrice: "₹39,999",
      saveLabel: "Save 30%",
      tag: "Popular",
      highlights: ["Tokyo", "Kyoto", "Shinkansen"]
    },
    {
      id: "pkg-3",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80",
      title: "Thailand Paradise",
      duration: "4 Days / 3 Nights",
      rating: "4.6",
      cancellation: "Free cancellation",
      originalPrice: "₹31,999",
      discountedPrice: "₹21,999",
      saveLabel: "Save 31%",
      tag: "Hot Deal",
      highlights: ["Phuket", "Krabi", "Island hopping"]
    }
  ] satisfies PackageCard[],
  testimonials: [] satisfies Testimonial[],
  posts: [
    {
      slug: "best-time-to-visit-japan",
      image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2a?auto=format&fit=crop&w=1000&q=80",
      title: "Best time to visit Japan without overpaying",
      category: "Travel Tips",
      excerpt: "Seasonal planning for flights, hotels, and weather so the trip feels premium without the premium tax."
    },
    {
      slug: "singapore-family-travel",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=80",
      title: "Singapore family travel made simple",
      category: "Guides",
      excerpt: "Useful ideas for city planning, attractions, and easier itineraries for families."
    },
    {
      slug: "maldives-honeymoon-plan",
      image: "https://images.unsplash.com/photo-1514282411047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
      title: "How to structure a Maldives honeymoon",
      category: "Honeymoon",
      excerpt: "A clean travel plan with smooth transfers, sunsets, and fewer logistics headaches."
    }
  ] satisfies BlogPost[],
  faqs: [
    {
      question: "Can I change currency without leaving the page?",
      answer: "Yes. The currency selector lives in the navbar and updates display values through the backend rate layer."
    },
    {
      question: "Can admins edit everything without code?",
      answer: "The model and dashboard structure are ready for database-driven editing of content, packages, banners, blogs, FAQs, and pricing."
    },
    {
      question: "Can the testimonials stay empty until I send real reviews?",
      answer: "Yes. The testimonials block is intentionally empty until you provide actual reviews."
    }
  ] satisfies FAQItem[]
};

export async function getHomeContent() {
  return fallback;
}
