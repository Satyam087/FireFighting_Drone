import React from 'react';

export function TwoDroneSection() {
  return (
    <section id="two-drone" className="py-20 bg-gradient-to-b from-white/60 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">The World’s First Dual-Drone Fire Rescue System</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Two purpose-built drones working in coordinated missions — indoor rescue and outdoor fire-combat — to detect victims, map escape routes, and contain flames before firefighters arrive.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-6">
            <article className="p-6 border rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-xl">Indoor Rescue Drone</h3>
              <p className="text-sm text-muted-foreground mt-2">Purpose: Enter buildings, find victims fast</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
                <li>Thermal imaging + LiDAR mapping</li>
                <li>Life-signal detection (movement, heat signatures, future cry detection)</li>
                <li>Delivers heat-resistant jackets or breathing masks</li>
                <li>Maps safe routes and sends them to victims + firefighters</li>
                <li>Navigates smoke and debris autonomously</li>
              </ul>
            </article>

            <article className="p-6 border rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-xl">Outdoor Fire-Combat Drone</h3>
              <p className="text-sm text-muted-foreground mt-2">Purpose: Attack fire from outside</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
                <li>High-pressure water mist / suppressant gel deployment</li>
                <li>AI-controlled targeting to contain flame spread</li>
                <li>Stabilized flight near extreme heat</li>
                <li>Hazard-zone mapping (windows, hotspots, weak structures)</li>
                <li>Real-time coordination with indoor drones</li>
              </ul>
            </article>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="w-full max-w-3xl p-6 bg-gradient-to-b from-slate-50 to-white border rounded-2xl shadow-lg">
              <svg viewBox="0 0 800 360" width="100%" height="100%" aria-hidden="true">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FF6231" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#FF6231" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="360" rx="18" fill="url(#g1)" />

                {/* indoor drone */}
                <g transform="translate(140,120)">
                  <circle cx="0" cy="0" r="34" fill="#0f172a" opacity="0.06" />
                  <rect x="-26" y="-16" width="52" height="32" rx="8" fill="#111827" />
                  <text x="0" y="6" fontSize="10" textAnchor="middle" fill="#fff">INDOOR</text>
                  <circle cx="-80" cy="-80" r="6" fill="#FF6231" />
                </g>

                {/* outdoor drone */}
                <g transform="translate(560,120)">
                  <circle cx="0" cy="0" r="34" fill="#0f172a" opacity="0.06" />
                  <rect x="-26" y="-16" width="52" height="32" rx="8" fill="#111827" />
                  <text x="0" y="6" fontSize="10" textAnchor="middle" fill="#fff">OUTDOOR</text>
                  <circle cx="80" cy="-80" r="6" fill="#FF6231" />
                </g>

                {/* coordination arrows */}
                <g stroke="#FF6231" strokeWidth="2" fill="none" opacity="0.9">
                  <path d="M200 120 C300 80, 400 80, 500 120" strokeDasharray="6 6" />
                  <path d="M200 140 C300 180, 400 180, 500 140" strokeDasharray="6 6" />
                </g>

                {/* building / flame icons */}
                <g transform="translate(350,220)">
                  <rect x="-60" y="-40" width="120" height="80" rx="8" fill="#fff" stroke="#e6e7eb" />
                  <path d="M-10 -10 C-6 -20, 6 -20, 10 -10 C6 4, -6 4, -10 -10 Z" fill="#FF6231" />
                </g>
              </svg>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-xl text-center">Diagram: Indoor and Outdoor drones coordinate in real-time — indoor maps victims and routes while outdoor contains fire and secures perimeter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoDroneSection;
