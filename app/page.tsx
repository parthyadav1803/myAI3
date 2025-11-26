import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AI_NAME, OWNER_NAME } from "@/config";
import { 
  Truck, 
  Cloud, 
  MapPin, 
  TrendingDown, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Handshake,
  ShieldAlert,
  Leaf
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Logistics Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Smarter Shipping Decisions for{" "}
              <span className="text-[#f97316]">Indian SMBs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {AI_NAME} uses AI to help you choose the right logistics partner, predict delays before they happen, and reduce shipping costs by up to 30%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8">
                  Try {AI_NAME} Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 px-8">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Why Choose {AI_NAME}?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built specifically for Indian logistics challenges, from weather disruptions to regional partner selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Smart Partner Selection</h3>
              <p className="text-gray-600 text-sm">
                AI recommends the best courier partner based on region, shipment type, and historical performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-[#f97316]" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Weather Guard</h3>
              <p className="text-gray-600 text-sm">
                Predict delays from fog, rain, or extreme heat before they impact your shipments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Expansion Modeling</h3>
              <p className="text-gray-600 text-sm">
                Test market viability in new regions before committing resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-[#f97316]" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">RTO Reduction</h3>
              <p className="text-gray-600 text-sm">
                Minimize Return to Origin costs with predictive address verification and delivery optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Pro Features
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Advanced Intelligence Suite
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock powerful AI capabilities designed to give you a competitive edge in logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a]/40 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1e3a8a]/10 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-[#1e3a8a]" />
              </div>
              <h3 className="font-bold text-xl text-[#1e3a8a] mb-3">Smart Negotiation Engine</h3>
              <p className="text-gray-600">
                Generate data-backed scripts to help you lower courier costs by comparing your current rates against regional competitors. Get leverage with real performance data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#f97316]/20 hover:border-[#f97316]/40 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-7 h-7 text-[#f97316]" />
              </div>
              <h3 className="font-bold text-xl text-[#f97316] mb-3">RTO Risk Shield</h3>
              <p className="text-gray-600">
                Predict returns before shipping by analyzing weather conditions, package sensitivity, and historical route data. Get actionable mitigation recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-bold text-xl text-emerald-700 mb-3">Sustainability Intelligence</h3>
              <p className="text-gray-600">
                Automatically calculate carbon savings for every route and earn a verified "Green Shipper" badge. Make eco-friendly decisions without sacrificing efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Built for Indian Logistics Challenges
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Region-Specific Intelligence</h4>
                    <p className="text-gray-600 text-sm">Understands North vs South India logistics differences, hill station accessibility, and metro vs tier-2 city dynamics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Multi-Partner Integration</h4>
                    <p className="text-gray-600 text-sm">Compare Delhivery, Blue Dart, DTDC, Ecom Express, and more in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Festival Season Ready</h4>
                    <p className="text-gray-600 text-sm">Peak season capacity planning for Diwali, Big Billion Days, and other high-volume periods.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">COD & Prepaid Optimization</h4>
                    <p className="text-gray-600 text-sm">Smart recommendations for Cash on Delivery vs Prepaid based on region and customer behavior.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/80 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Trusted by 500+ SMBs</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-1">30%</div>
                  <div className="text-sm text-gray-300">Average Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">40%</div>
                  <div className="text-sm text-gray-300">Lower RTO Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">2x</div>
                  <div className="text-sm text-gray-300">Faster Decisions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">99%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-gray-300 mb-8">
            Start making smarter shipping decisions today. No credit card required.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
