import React from 'react';

export function HowItWorksSection() {
  const steps = [
    'Fire Detected',
    'Drones Launched Instantly',
    'Indoor Drone Scans for Life',
    'Outdoor Drone Contains the Fire',
    'AI Generates Safe Routes',
    'Firefighters Enter With Full Awareness',
  ];

  const goals = [
    '3× faster initial response time',
    'Significant reduction in early fire spread',
    'Higher survival rates for trapped occupants',
    'Zero-risk reconnaissance for firefighters',
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">How IgniraX Works — And the Future Impact We Aim to Create</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF6231]/10 flex items-center justify-center font-bold text-[#FF6231] text-sm border border-[#FF6231]/12">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{s}</h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                      {i === 0 && 'Sensors, CCTV, or manual alerts trigger IgniraX’s rapid-response system.'}
                      {i === 1 && 'Indoor and outdoor drones autonomously deploy within 30–60 seconds.'}
                      {i === 2 && 'Thermal + LiDAR mapping identifies victims, smoke-filled zones, and blocked exits.'}
                      {i === 3 && 'Precision water-mist or suppressant gel slows the spread from outside the building.'}
                      {i === 4 && 'The Command Hub identifies safest evacuation paths and shares them with responders.'}
                      {i === 5 && 'Firefighters receive real-time maps, victim locations, and risk zones before stepping inside.'}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-border shadow-sm">
              <h3 className="font-semibold mb-4 text-lg">Future Impact Goals</h3>
              <ul className="space-y-3 text-sm">
                {goals.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-3 h-3 rounded-full bg-[#00C7A6]" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6">IgniraX is currently in R&D and pilot-phase development. This format is transparent, ethical, and startup-friendly — without making unverified claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;

