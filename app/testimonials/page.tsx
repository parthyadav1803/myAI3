import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AI_NAME } from "@/config";
import { 
  Star, 
  Quote,
  ArrowRight,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "TrendyFashions",
    industry: "Fashion",
    image: null,
    quote: "Before Delivera, we were losing lakhs on returns from the North East. Their AI flagged high-risk pincodes and suggested alternate partners. Our RTO rate dropped from 18% to just 7% in three months.",
    stats: "62% RTO Reduction",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "TechGadgets India",
    industry: "Electronics",
    image: null,
    quote: "The weather prediction feature saved us during last monsoon. We got alerts about flooding on the Mumbai-Pune route and rerouted our electronics shipments. Zero damage claims that season.",
    stats: "100% Damage Prevention",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Logistics Manager",
    company: "FreshBite Foods",
    industry: "Perishables",
    image: null,
    quote: "Shipping perishables across India is a nightmare. Delivera's partner recommendations for cold chain logistics have been spot on. We now ship paneer to Chennai with 99% success rate.",
    stats: "99% Delivery Success",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Co-Founder",
    company: "CraftHeritage",
    industry: "Handicrafts",
    image: null,
    quote: "Switching to Delivera for our fragile shipments in the North East reduced breakage by 40%. The AI recommended specialized packaging and the right partners for hilly terrain.",
    stats: "40% Less Breakage",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    role: "Supply Chain Director",
    company: "StyleBox",
    industry: "Fashion",
    image: null,
    quote: "The expansion modeling feature helped us test 15 new tier-2 cities before launching. We knew exactly which pincodes to target and which to avoid. Saved us months of trial and error.",
    stats: "15 New Markets",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "Operations Manager",
    company: "ElectroMart",
    industry: "Electronics",
    image: null,
    quote: "The real-time rate comparison across Delhivery, Blue Dart, and others saves us hours daily. Plus the API integration with our Shopify store was seamless. Best ₹999 we spend each month.",
    stats: "₹2.5L Monthly Savings",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "MSMEs Trust Us" },
  { value: "30%", label: "Avg Cost Reduction" },
  { value: "40%", label: "Lower RTO Rate" },
  { value: "4.9/5", label: "Customer Rating" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e3a8a]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Customer Stories
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Trusted by India's Fastest Growing Brands
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how businesses across industries are transforming their logistics with {AI_NAME}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f97316] fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#1e3a8a]/10 absolute -top-2 -left-2" />
                  <p className="text-gray-600 relative z-10 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="inline-block bg-[#f97316]/10 text-[#f97316] text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.stats}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/70 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-xs text-[#1e3a8a]">{testimonial.company} • {testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 mb-8">
            From fashion to food, electronics to handicrafts — {AI_NAME} understands the unique logistics challenges of every industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Fashion & Apparel", "Electronics", "Food & Perishables", "Handicrafts", "Health & Beauty", "Home & Furniture", "Books & Stationery", "Sports & Fitness"].map((industry) => (
              <span
                key={industry}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-gray-300 mb-8">
            Start your free trial today and see why 500+ MSMEs trust {AI_NAME} for their logistics intelligence.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8">
              Try {AI_NAME} Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
