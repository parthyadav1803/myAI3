"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Target, Users, CreditCard, MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Section 1: Hero & Vision */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Target className="w-5 h-5 text-[#f97316]" />
              <span className="text-sm font-medium">Our Vision</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Intelligence Behind Your Logistics
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Democratizing enterprise-grade supply chain intelligence for India's 63 million MSMEs.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                At Delivera, we believe that data shouldn't be a luxury reserved for logistics giants. We are the <strong className="text-[#1e3a8a]">First AI Logistics Strategist</strong> built specifically for the Indian market. Born from the chaos of unorganized last-mile delivery, we exist to bring order, transparency, and predictability to small businesses.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We are not a courier company; we are your <strong className="text-[#1e3a8a]">Intelligence Partner</strong>. We sit between you and the logistics provider, using a brain of 25,000+ data points to answer the critical questions that make or break your profit margins: "Is this route safe?", "Is this price fair?", and "Will this package arrive on time?"
              </p>
              <div className="bg-[#f97316]/10 border-l-4 border-[#f97316] p-6 rounded-r-lg">
                <p className="text-[#1e3a8a] font-semibold text-lg mb-0">
                  Core Intent: To turn your logistics from a cost center into a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 px-4 py-2 rounded-full mb-4">
                <Users className="w-5 h-5 text-[#1e3a8a]" />
                <span className="text-sm font-medium text-[#1e3a8a]">Who We Serve</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-3">
                Built for the Builders
              </h2>
              <p className="text-gray-600 text-lg">
                Focusing on B2C & D2C Brands, Independent Sellers, and Small Manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  We serve the <strong className="text-[#1e3a8a]">B2C brands and D2C disruptors</strong> who drive India's economy.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Imagine a founder in Jaipur shipping handicrafts to Assam. Every package is a risk—fog delays, hidden costs, and the dreaded RTO. For too long, small businesses have flown blind.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#f97316] font-semibold">
                  Delivera exists to change this story.
                </p>
                <p className="text-lg leading-relaxed">
                  We replace "gut feeling" with enterprise-grade data. We give you the power to negotiate like a giant, predict delays before they happen, and ship with absolute confidence. We handle the complexity of the last mile, so you can focus on building the next big thing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 px-4 py-2 rounded-full mb-4">
              <CreditCard className="w-5 h-5 text-[#f97316]" />
              <span className="text-sm font-medium text-[#f97316]">Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              We believe in accessible intelligence. Whether you are just starting out with 10 shipments a month or scaling a D2C brand with 10,000, we have a plan that fits your journey. No hidden fees, just pure ROI.
            </p>
            <Link href="/pricing">
              <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8 py-6 text-lg">
                Check Our Pricing Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 4: Our Presence */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5 text-[#f97316]" />
              <span className="text-sm font-medium">Our Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Covering Every Mile
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              We operate a <strong>Pan-India Intelligence Network</strong> covering everything from Tier-1 Metros to Tier-3 Hinterlands. We are rapidly expanding our predictive models to cover <strong>Global Cross-Border Trade</strong>, ensuring that wherever your package goes, our intelligence goes with it.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#f97316] mb-2">25K+</div>
                <div className="text-sm text-white/80">Data Points</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#f97316] mb-2">Pan-India</div>
                <div className="text-sm text-white/80">Coverage</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#f97316] mb-2">Tier 1-3</div>
                <div className="text-sm text-white/80">Cities Covered</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#f97316] mb-2">Global</div>
                <div className="text-sm text-white/80">Expansion</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
