import React from "react";

export function CommandHubSection() {
  return (
    <section id="command-hub" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Central AI That Coordinates the Entire Operation</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">All drones connect through a 5G / mesh network to the IgniraX Command Hub — an AI system that coordinates mapping, detection, prediction and tasking in real time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>maps the building in real time</li>
              <li>identifies victims and safest rescue paths</li>
              <li>predicts fire spread</li>
              <li>assigns tasks dynamically</li>
              <li>improves after every mission</li>
            </ul>

            <div className="mt-4 p-4 bg-white border rounded-lg shadow-sm">
              <strong className="block mb-2">Dashboard mockup</strong>
              <p className="text-xs text-muted-foreground">Compact UI mockup illustrating map, drone positions, telemetry and timeline — placeholder for a high-fidelity design.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border rounded-2xl shadow-lg p-4">
              <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <svg viewBox="0 0 1200 700" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                  </defs>

                  <rect x="20" y="20" width="760" height="560" rx="12" fill="url(#bg)" stroke="#e6e9ef" />

                  {/* hotspots */}
                  <circle cx="420" cy="160" r="18" fill="#FF6231" opacity="0.95" />
                  <circle cx="480" cy="240" r="12" fill="#FF6231" opacity="0.9" />
                  <circle cx="300" cy="360" r="14" fill="#FF6231" opacity="0.9" />

                  {/* victim marker */}
                  <rect x="520" y="300" width="22" height="22" rx="4" fill="#00C7A6" />
                  <text x="550" y="316" fontSize="14" fill="#0f172a">Life-Signal Detected</text>

                  {/* indoor drone */}
                  <g transform="translate(360,220)">
                    <circle r="12" fill="#111827" opacity="0.12" />
                    <circle r="8" fill="#FF6231" />
                    <text x="18" y="6" fontSize="12" fill="#0f172a">Indoor Rescue Drone</text>
                  </g>
                  
                  {/* outdoor drone */}
                  <g transform="translate(640,120)">
                    <circle r="12" fill="#111827" opacity="0.12" />
                    <circle r="8" fill="#00C7A6" />
                    <text x="18" y="6" fontSize="12" fill="#0f172a">Outdoor Fire-Combat Drone</text>
                  </g>
                  {/* coordination path */}
                  <path d="M380 220 C450 200, 550 160, 640 140" stroke="#FF6231" strokeWidth="2" fill="none" strokeDasharray="8 6" />

                  {/* telemetry panel */}
                  <rect x="800" y="40" width="360" height="500" rx="12" fill="#fff" stroke="#e6e9ef" />
                  <text x="820" y="76" fontSize="16" fontWeight="700" fill="#0f172a">Drone Telemetry</text>

                  <text x="820" y="100" fontSize="12" fill="#6b7280">Indoor Drone — Battery 72% • Temp 36°C • Signal 4/5</text>
                  <text x="820" y="132" fontSize="12" fill="#6b7280">Outdoor Drone — Battery 86% • Temp 52°C • Signal 5/5</text>

                  {/* timeline */}
                  <rect x="40" y="600" width="720" height="60" rx="8" fill="#fff" stroke="#e6e9ef" />
                  <text x="60" y="636" fontSize="12" fill="#0f172a">Mission Timeline</text>
                  <rect x="180" y="620" width="120" height="12" rx="6" fill="#FF6231" />
                  <text x="310" y="632" fontSize="11" fill="#6b7280">AI Alert: Fire Spread Prediction</text>
                </svg>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">Labels shown: “Indoor Rescue Drone”, “Outdoor Fire-Combat Drone”, “Life-Signal Detected”, “Fire Spread Prediction”, “Safe Path Generated”.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommandHubSection;
