"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, FileText, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", contactNumber: "", requirements: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg">
              Have questions about Delivera? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                Your message has been received. Our team will get back to you shortly.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-gray-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-gray-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber" className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    Contact Number
                  </Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="h-12 border-gray-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="flex items-center gap-2 text-gray-700">
                    <FileText className="w-4 h-4" />
                    Brief About Your Requirements
                  </Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Tell us about your logistics needs and how we can help..."
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-semibold text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit
                </Button>
              </form>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">support@delivera.in</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-[#f97316]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
