"use client";

import { Leaf } from "lucide-react";

interface GreenBadgeProps {
  savedKg: number;
}

export function GreenBadge({ savedKg }: GreenBadgeProps) {
  return (
    <div className="mt-4 group cursor-default">
      <div className="relative overflow-hidden rounded-xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-green-300/30 blur-xl" />
        
        <div className="relative flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-emerald-200">
            <Leaf className="h-6 w-6 text-emerald-600" />
          </div>
          
          <div className="flex-1 space-y-2">
            <h4 className="text-lg font-bold text-emerald-800">
              Eco-Impact Verified
            </h4>
            <p className="text-sm leading-relaxed text-emerald-700">
              Switching to this route prevents{" "}
              <span className="font-bold text-emerald-900">{savedKg} kg</span>{" "}
              of Carbon Emissions compared to standard diesel trucks.
            </p>
          </div>
        </div>
        
        <div className="relative mt-4 border-t border-emerald-300/50 pt-3">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
            Certified by Delivera Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
