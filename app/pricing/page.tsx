import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AI_NAME } from "@/config";
import { 
  Check, 
  X, 
  ArrowRight,
  Zap,
  HelpCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/mo",
    description: "Ideal for startups",
    features: [
      "Manual Queries (10/day)",
      "Historical Data Access",
      "Basic Partner Recommendations",
      "Community Support",
      "Email Support (48hr response)",
    ],
    notIncluded: [
      "Real-time Weather Integration",
      "API Access",
      "Priority Support",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/mo",
    description: "For scaling brands",
    features: [
      "Unlimited Queries",
      "Real-time Weather Integration",
      "Full API Access",
      "Priority Support (4hr response)",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Analytics Dashboard",
      "Multi-user Access (up to 5)",
    ],
    notIncluded: [],
    cta: "Start Pro Trial",
    popular: true,
  },
];

const comparisonFeatures = [
  { name: "Daily Query Limit", free: "10 queries", pro: "Unlimited" },
  { name: "Partner Recommendations", free: true, pro: true },
  { name: "Historical Data", free: true, pro: true },
  { name: "Real-time Weather Alerts", free: false, pro: true },
  { name: "API Access", free: false, pro: true },
  { name: "RTO Risk Scoring", free: "Basic", pro: "Advanced" },
  { name: "Market Viability Reports", free: false, pro: true },
  { name: "Custom Integrations", free: false, pro: true },
  { name: "Dedicated Account Manager", free: false, pro: true },
  { name: "Support Response Time", free: "48 hours", pro: "4 hours" },
  { name: "Team Members", free: "1", pro: "Up to 5" },
  { name: "Analytics Dashboard", free: "Basic", pro: "Advanced" },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, absolutely! You can cancel your Pro subscription at any time with no questions asked. Your account will remain active until the end of your current billing period, and you'll automatically be moved to the Free plan. We believe in earning your business every month.",
  },
  {
    question: "Do you support API integration?",
    answer: "Yes, our Pro plan includes full API access. You can integrate Delivera directly into your existing systems, whether it's your Shopify store, custom ERP, or order management system. We provide comprehensive documentation and SDKs for popular languages including Node.js, Python, and PHP.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods popular in India including UPI, Credit/Debit cards (Visa, Mastercard, RuPay), Net Banking, and popular wallets like Paytm and PhonePe. For annual plans, we also offer bank transfer options for businesses.",
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer: "Yes! We offer a 14-day free trial of the Pro plan with no credit card required. You get access to all Pro features during the trial. If you decide not to continue, you'll automatically move to the Free plan with no charges.",
  },
  {
    question: "How does the partner recommendation work?",
    answer: "Our AI analyzes multiple factors including shipment origin/destination, package dimensions, delivery speed requirements, historical performance data, and real-time availability. We then rank logistics partners (Delhivery, Blue Dart, DTDC, etc.) based on what's best for your specific shipment.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e3a8a]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Simple Pricing for Indian SMBs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-[#1e3a8a] text-white ring-4 ring-[#f97316]"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#f97316] text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-[#1e3a8a]"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-gray-300" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-[#f97316]" : "text-green-500"}`} />
                      <span className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 flex-shrink-0 text-gray-400" />
                      <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/demo">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#f97316] hover:bg-[#f97316]/90 text-white"
                        : "bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Feature Comparison
            </h2>
            <p className="text-gray-600">
              See exactly what you get with each plan
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-medium text-gray-900">Feature</div>
              <div className="p-4 font-medium text-gray-900 text-center">Free</div>
              <div className="p-4 font-medium text-[#1e3a8a] text-center bg-[#1e3a8a]/5">Pro</div>
            </div>
            {comparisonFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-3 ${index !== comparisonFeatures.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="p-4 text-sm text-gray-700">{feature.name}</div>
                <div className="p-4 text-center">
                  {typeof feature.free === "boolean" ? (
                    feature.free ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )
                  ) : (
                    <span className="text-sm text-gray-600">{feature.free}</span>
                  )}
                </div>
                <div className="p-4 text-center bg-[#1e3a8a]/5">
                  {typeof feature.pro === "boolean" ? (
                    feature.pro ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )
                  ) : (
                    <span className="text-sm font-medium text-[#1e3a8a]">{feature.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-[#1e3a8a]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-8">
            Our team is here to help you choose the right plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8">
                Try Demo Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
