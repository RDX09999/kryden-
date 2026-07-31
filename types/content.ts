export type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  duration: string;
  discount: string;
};

export type DestinationCard = {
  name: string;
  image: string;
  price: string;
};

export type PackageCard = {
  id: string;
  image: string;
  title: string;
  duration: string;
  rating: string;
  cancellation: string;
  originalPrice: string;
  discountedPrice: string;
  saveLabel: string;
  tag: string;
  highlights: string[];
};

export type Testimonial = {
  name: string;
  location: string;
  review: string;
};

export type BlogPost = {
  slug: string;
  image: string;
  title: string;
  category: string;
  excerpt: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
