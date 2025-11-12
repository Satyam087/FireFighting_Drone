import { type NewsHeadline } from "@shared/schema";

import warehouse from "@assets/generated_images/Warehouse_fire_emergency_scene_83cede8d.png";
import highrise from "@assets/generated_images/High-rise_apartment_fire_rescue_e3cd3412.png";
import forest from "@assets/generated_images/Forest_wildfire_spreading_rapidly_fd5176b0.png";
import industrial from "@assets/generated_images/Industrial_facility_fire_scene_a969beb6.png";
import residential from "@assets/generated_images/Residential_house_fire_emergency_3b45ec0c.png";
import commercial from "@assets/generated_images/Urban_commercial_building_fire_37f5a480.png";

export const newsHeadlines: NewsHeadline[] = [
  {
    id: "1",
    image: warehouse,
    headline: "Warehouse Fire Claims 3 Lives - Rescue Delayed by 12 Minutes",
    location: "Industrial District",
  },
  {
    id: "2",
    image: highrise,
    headline: "High-Rise Inferno Traps 47 Residents - Response Time Critical",
    location: "Downtown Metro",
  },
  {
    id: "3",
    image: forest,
    headline: "Wildfire Spreads Faster Than Ground Teams Can Respond",
    location: "Northern Valley",
  },
  {
    id: "4",
    image: industrial,
    headline: "Factory Explosion Leaves Workers Stranded - Minutes Matter",
    location: "Port Industrial Zone",
  },
  {
    id: "5",
    image: residential,
    headline: "Family of 5 Rescued After 8-Minute Wait - Too Close",
    location: "Suburban Area",
  },
  {
    id: "6",
    image: commercial,
    headline: "Commercial Building Fire: Every Second Counted",
    location: "Business District",
  },
];
