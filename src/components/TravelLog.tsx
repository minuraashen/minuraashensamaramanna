import { useState } from "react";
import { Compass, MapPin, Camera, Star, Sunset, Landmark, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const TravelLog = () => {
  const [activeTab, setActiveTab] = useState("polonnaruwa");

  const destinations = {
    polonnaruwa: {
      title: "Historical Kingdom of Polonnaruwa",
      subtitle: "The Medieval Capital of Sri Lanka",
      description: "Exploring the historic ruins of the second ancient kingdom of Sri Lanka. Witnessing the majestic stone-cut Buddha statues, colossal brick stupas, and the advanced irrigation engineering of the Parakrama Samudra.",
      icon: <Landmark className="h-6 w-6" />,
      highlights: ["Gal Vihara Stone Sculptures", "The Sacred Quadrangle (Vatadage)", "Parakrama Samudra Reservoir", "Ancient Royal Palace Ruins"],
      gradient: "from-amber-500/20 to-yellow-600/5",
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    sigiriya: {
      title: "The Fortress of Sigiriya",
      subtitle: "The Lion Rock Capital & 8th Wonder",
      description: "Scaling the majestic 200-meter-high rock fortress built by King Kashyapa in the 5th century. Admiring the ancient frescoes, the Mirror Wall graffiti, and the symmetrical royal water gardens.",
      icon: <Sunset className="h-6 w-6" />,
      highlights: ["Lion's Paw Gatehouse", "Sigiriya Maidens Frescoes", "Mirror Wall Mirroring", "Symmetrical Water Gardens"],
      gradient: "from-rose-500/20 to-orange-600/5",
      badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20"
    },
    haputale: {
      title: "Misty Heights of Haputale",
      subtitle: "Tea Estates & Panoramic Mountain Ridges",
      description: "Hiking through the emerald-green tea plantations of the southern hill country. Traversing misty railway tracks, discovering historic stone monasteries, and gazing at vistas from Lipton's Seat.",
      icon: <Trees className="h-6 w-6" />,
      highlights: ["Lipton's Seat Viewpoint", "Adisham Benedictine Monastery", "Idalgashinna Train Track Hike", "Dambatenne Tea Fields"],
      gradient: "from-emerald-500/20 to-teal-600/5",
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    }
  };

  const travelTabs = [
    { label: "Polonnaruwa", value: "polonnaruwa" },
    { label: "Sigiriya", value: "sigiriya" },
    { label: "Haputale", value: "haputale" }
  ];

  const current = destinations[activeTab as keyof typeof destinations];

  return (
    <section id="travel" className="py-20 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="hsl(var(--primary))" d="M37.9,-53C51.5,-45.5,66.6,-38.3,73.1,-26.4C79.6,-14.4,77.5,2.4,72.4,18C67.3,33.5,59.3,47.8,47.3,57.1C35.2,66.4,19.2,70.7,3.3,66.1C-12.6,61.6,-28.4,48.2,-41.8,36.5C-55.2,24.8,-66.2,14.8,-70.7,1.8C-75.1,-11.2,-72.9,-27.2,-64.1,-38.9C-55.4,-50.5,-40.1,-57.8,-26.1,-64.8C-12,-71.8,0.7,-78.6,11.4,-77.2C22.2,-75.7,30.9,-66,37.9,-53Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Travel <span className="bg-gradient-primary bg-clip-text text-transparent">Log</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I'm passionate about exploring Sri Lanka's landmarks, capturing photos, and collecting memories from the places I've visited. Here are some of my travel highlights.
            </p>
          </motion.div>
        </div>

        {/* Tab switch controller */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-muted border border-border/40 relative z-10">
            {travelTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 z-10 ${
                  activeTab === tab.value
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTravelIndicator"
                    className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Presentation Area */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="glass-card border border-border/30 overflow-hidden rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Decorative Gradient visual column */}
                  <div className={`lg:col-span-4 bg-gradient-to-br ${current.gradient} relative flex items-center justify-center p-8 min-h-[200px] lg:min-h-[350px] border-b lg:border-b-0 lg:border-r border-border/30`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <motion.div 
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 10 }}
                      className="w-16 h-16 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center text-primary shadow-xl"
                    >
                      {current.icon}
                    </motion.div>
                  </div>

                  {/* Information Details column */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className={`rounded-full px-3 py-1 text-xs font-semibold border ${current.badgeColor}`}>
                          <MapPin className="w-3.5 h-3.5 mr-1 inline" />
                          Sri Lanka
                        </Badge>
                        <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                          <Camera className="w-3.5 h-3.5" />
                          Adventure Log
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-heading font-semibold text-foreground leading-tight">
                          {current.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mt-1">
                          {current.subtitle}
                        </p>
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {current.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border/20">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                        Explore Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {current.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TravelLog;
