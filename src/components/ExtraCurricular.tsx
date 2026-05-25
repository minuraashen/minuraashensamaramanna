import { Award, Calendar, MapPin, Users, Flame } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ExtraCurricular = () => {
  const activities = [
    {
      title: "Tronic Premier League (TPL) Cricket Tournament",
      category: "Sports & Community",
      description: "Represented the team who are the 1st runner up in the TPL cricket tournament organized by the ENTC department.",
      date: "Annual Event",
      location: "University Grounds",
      icon: <Flame className="h-6 w-6" />,
      gradient: "from-orange-500 to-rose-500"
    },
    {
      title: "Sillicon Pulse Analog Electronics Competition",
      category: "Technical Competition",
      description: "Secured 2nd place in the Sillicon Pulse Analog Electronics Competition, showcasing strong circuit design and problem-solving skills.",
      date: "2024",
      location: "SLTC University",
      icon: <Flame className="h-6 w-6" />,
      gradient: "from-orange-500 to-rose-500"
    },
    {
      title: "Intern Events at WSO2",
      category: "Intern Event",
      description: "Futsal tournament and News paper fashion show organized by WSO2 for their interns. That was filled with fun and bonding with fellow interns.",
      date: "April 2026",
      location: "WSO2 Premises",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "ENTC Batch Trip",
      category: "Batch Event",
      description: "ENTC 1st year batch trip to Riverston, a great experience filled with fun, bonding, and unforgettable memories.",
      date: "2024",
      location: "Riverston",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Extra-Curricular <span className="bg-gradient-primary bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Life beyond engineering: fostering teamwork, sportsmanship, and student community bonding.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="glass-card border border-border/30 hover:border-primary/25 hover:shadow-glow transition-all duration-500 group flex flex-col justify-between overflow-hidden rounded-3xl w-full">
                
                {/* Visual Header */}
                <div className={`relative h-40 w-full bg-gradient-to-br ${activity.gradient} opacity-80 flex-shrink-0 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    {activity.icon}
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/40 backdrop-blur-md border-none text-white text-[10px] uppercase font-bold tracking-wider rounded-full px-2.5 py-1">
                      {activity.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {activity.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {activity.location}
                      </span>
                    </div>

                    <CardTitle className="text-lg font-heading leading-tight group-hover:text-primary transition-colors font-semibold">
                      {activity.title}
                    </CardTitle>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
