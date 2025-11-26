import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AI_NAME } from "@/config";
import { 
  Truck, 
  Cloud, 
  MapPin, 
  TrendingDown, 
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Globe,
  Thermometer,
  Droplets,
  Wind,
  Target,
  DollarSign,
  RotateCcw,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e3a8a]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Powerful Features
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
              Intelligence Across Every Mile
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {AI_NAME} combines AI, real-time data, and deep logistics expertise to give you an unfair advantage in shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Feature 01
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Smart Partner Selection
              </h2>
              <p className="text-gray-600 mb-6">
                Not all logistics partners are created equal. {AI_NAME} analyzes historical performance data, regional strengths, and vehicle capabilities to recommend the perfect partner for every shipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Regional Expertise Mapping</h4>
                    <p className="text-gray-600 text-sm">Delhivery excels in North India metros, while Blue Dart dominates South India tier-2 cities. We know who delivers best where.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Vehicle Type Optimization</h4>
                    <p className="text-gray-600 text-sm">Fragile goods need specific handling. Heavy shipments need the right trucks. We match your cargo to the right fleet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Real-Time Rate Comparison</h4>
                    <p className="text-gray-600 text-sm">Get instant quotes from multiple partners and choose based on cost, speed, or reliability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a]/5 to-[#f97316]/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Partner Recommendation</div>
                    <div className="text-sm text-gray-500">Delhi to Bangalore | 5kg Electronics</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Delhivery</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Best Match 95%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-medium text-gray-900">Blue Dart</span>
                    </div>
                    <span className="text-sm text-gray-600">Match 82%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="font-medium text-gray-900">DTDC</span>
                    </div>
                    <span className="text-sm text-gray-600">Match 71%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-[#f97316]/5 to-[#1e3a8a]/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Weather Alert</div>
                    <div className="text-sm text-gray-500">Route: Mumbai → Pune</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Dense Fog Warning</span>
                    </div>
                    <p className="text-sm text-yellow-700">Expected 6 AM - 10 AM. Recommend delayed dispatch or alternate route.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Thermometer className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">28°C</div>
                      <div className="text-xs text-gray-500">Temp</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Droplets className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">85%</div>
                      <div className="text-xs text-gray-500">Humidity</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Wind className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">12 km/h</div>
                      <div className="text-xs text-gray-500">Wind</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Cloud className="w-4 h-4" />
                Feature 02
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Weather Guard Technology
              </h2>
              <p className="text-gray-600 mb-6">
                India's diverse climate creates unique logistics challenges. From monsoon flooding in Mumbai to winter fog in Delhi, {AI_NAME} predicts weather-related delays before they happen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Fog Prediction for North India</h4>
                    <p className="text-gray-600 text-sm">December-February visibility alerts for Delhi NCR, Punjab, and UP routes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Monsoon Route Intelligence</h4>
                    <p className="text-gray-600 text-sm">Real-time flood alerts and alternate route suggestions during heavy rains.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Heat Wave Alerts</h4>
                    <p className="text-gray-600 text-sm">Protect perishable and temperature-sensitive goods with proactive warnings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-[#1e3a8a] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Feature 03
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Expansion Modeling
              </h2>
              <p className="text-gray-600 mb-6">
                Thinking of expanding to new cities? {AI_NAME}'s Market Viability feature helps you test the waters before diving in. Analyze logistics feasibility, partner availability, and cost projections.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Pincode-Level Analysis</h4>
                    <p className="text-gray-600 text-sm">Know which pincodes are serviceable and at what cost before you start marketing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Partner Coverage Mapping</h4>
                    <p className="text-gray-600 text-sm">Visualize which logistics partners service your target regions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Delivery Time Estimates</h4>
                    <p className="text-gray-600 text-sm">Set realistic customer expectations with accurate delivery windows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a]/5 to-[#f97316]/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Market Viability Report</div>
                    <div className="text-sm text-gray-500">Expansion: North East India</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Guwahati</span>
                      <span className="text-green-600 font-medium">High Viability</span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>4 Partners</span>
                      <span>2-3 Days</span>
                      <span>₹85 avg</span>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Shillong</span>
                      <span className="text-yellow-600 font-medium">Medium Viability</span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>2 Partners</span>
                      <span>4-5 Days</span>
                      <span>₹120 avg</span>
                    </div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Aizawl</span>
                      <span className="text-red-600 font-medium">Low Viability</span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>1 Partner</span>
                      <span>7+ Days</span>
                      <span>₹180 avg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-[#f97316]/5 to-[#1e3a8a]/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">RTO Risk Analysis</div>
                    <div className="text-sm text-gray-500">Order #ORD-2024-1847</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span className="font-medium text-red-800">High RTO Risk Detected</span>
                    </div>
                    <ul className="text-sm text-red-700 space-y-1 ml-6 list-disc">
                      <li>Incomplete address (missing landmark)</li>
                      <li>First-time COD customer</li>
                      <li>High-RTO pincode history</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-800">Recommended Actions</span>
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1 ml-6 list-disc">
                      <li>Request address confirmation via SMS</li>
                      <li>Suggest prepaid with 5% discount</li>
                      <li>Enable delivery slot selection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <TrendingDown className="w-4 h-4" />
                Feature 04
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Cost Optimization & RTO Reduction
              </h2>
              <p className="text-gray-600 mb-6">
                Return to Origin (RTO) shipments cost Indian e-commerce brands crores every year. {AI_NAME} uses predictive analytics to flag risky orders and suggest interventions before dispatch.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Pre-Dispatch Risk Scoring</h4>
                    <p className="text-gray-600 text-sm">Every order gets an RTO risk score based on address quality, customer history, and pincode data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address Verification</h4>
                    <p className="text-gray-600 text-sm">AI-powered address validation catches incomplete or incorrect addresses before they become NDRs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">COD to Prepaid Conversion</h4>
                    <p className="text-gray-600 text-sm">Smart incentives to convert high-risk COD orders to prepaid, reducing RTO by up to 40%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience {AI_NAME}?
          </h2>
          <p className="text-gray-300 mb-8">
            Try our AI-powered logistics assistant and see the difference intelligence makes.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8">
              Try Demo Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
