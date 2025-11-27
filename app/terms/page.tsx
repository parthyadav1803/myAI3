import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AI_NAME, OWNER_NAME } from "@/config";

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">
            Terms of Service & AI Disclaimer
          </h1>
          <p className="text-gray-500 mb-8">
            Last Updated: {currentDate}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using "{AI_NAME}" (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Nature of the Service (AI Disclaimer)</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">2.1. Artificial Intelligence</h3>
                <p className="text-gray-700 leading-relaxed">
                  {AI_NAME} utilizes Large Language Models (LLMs) and probabilistic data analysis. You acknowledge that the Service is an automated AI system and <strong className="text-gray-900">not a human logistics expert</strong>.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">2.2. Accuracy</h3>
                <p className="text-gray-700 leading-relaxed">
                  While we strive for accuracy based on our dataset of 25,000 records, the Service may produce outputs that are inaccurate, incomplete, or "hallucinated." The Service may make errors in reasoning or math.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">2.3. Verification</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to independently verify all logistics recommendations, shipping rates, and partner capabilities before making any financial or business decisions.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Limitation of Liability (Crucial)</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">3.1. "As-Is" Basis</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The owners and developers of {AI_NAME} make no representations or warranties of any kind, express or implied, regarding the operation of the Service or the information, content, or materials included therein.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">3.2. Exclusion of Damages</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  To the fullest extent permitted by law, the owners of {AI_NAME} shall <strong className="text-gray-900">NOT be liable</strong> for any direct, indirect, incidental, special, or consequential damages resulting from:
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li className="text-gray-700 flex items-start gap-2">
                    <span className="text-[#1e3a8a] font-medium">a)</span>
                    The use or inability to use the Service.
                  </li>
                  <li className="text-gray-700 flex items-start gap-2">
                    <span className="text-[#1e3a8a] font-medium">b)</span>
                    Cost of procurement of substitute goods/services.
                  </li>
                  <li className="text-gray-700 flex items-start gap-2">
                    <span className="text-[#1e3a8a] font-medium">c)</span>
                    Lost shipments, delayed deliveries, or "Return to Origin" (RTO) losses.
                  </li>
                  <li className="text-gray-700 flex items-start gap-2">
                    <span className="text-[#1e3a8a] font-medium">d)</span>
                    Loss of profits, data, or goodwill.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Responsibilities & Prohibited Use</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">4.1. Final Decision</h3>
                <p className="text-gray-700 leading-relaxed">
                  You acknowledge that {AI_NAME} provides <em>recommendations</em> only. The final decision to choose a courier, route, or vehicle lies solely with you.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">4.2. Prohibited Queries</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree not to use the Service to plan the shipment of illegal goods, contraband, hazardous materials, or restricted items under Indian Law.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">4.3. Indemnification</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless the owners of {AI_NAME} from any claims arising out of your use of the AI's advice.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service may use Web Search tools to provide links to third-party courier websites. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} {OWNER_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
