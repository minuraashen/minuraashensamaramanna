import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailService";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "samaramannama.22@uom.lk",
      href: "mailto:samaramannama.22@uom.lk"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+94 763129038",
      href: "tel:+94763129038"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "212/C, Weligepola Road, Kirimetithenna, Balangoda",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/minura-ashen",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      href: "https://github.com/minuraashen",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss exciting tech opportunities? I'd love to hear from you!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Panel */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-heading font-medium mb-4 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Whether you're interested in research collaboration, have a software project in mind, or just want to 
                discuss machine learning and hardware engineering, I'm always open to connecting with fellow builders.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 glass-card border border-border/30 rounded-2xl hover:border-primary/20 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">{info.label}</h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm break-all font-medium mt-1 inline-block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Follow My Work</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-muted hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow border border-border/60 ${link.color}`}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message Form Panel */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card border border-border/30 p-6 sm:p-8 rounded-3xl hover:border-primary/15 transition-all duration-500">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-heading text-xl font-semibold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="bg-background/40 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="bg-background/40 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="bg-background/40 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your inquiry..."
                      rows={5}
                      required
                      className="bg-background/40 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-95 text-primary-foreground shadow-lg shadow-primary/20 h-12 rounded-xl text-sm font-semibold tracking-wide border-none mt-2"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;