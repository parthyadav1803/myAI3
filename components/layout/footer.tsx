import Link from "next/link";
import { AI_NAME, OWNER_NAME } from "@/config";

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1e3a8a] font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">{AI_NAME}</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              AI-powered logistics intelligence for Indian MSMEs. Make smarter shipping decisions with real-time insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/features" className="hover:text-[#f97316] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#f97316] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#f97316] transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/testimonials" className="hover:text-[#f97316] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f97316] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#f97316] transition-colors">
                  Terms & Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} {OWNER_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
