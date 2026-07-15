import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailService";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name:    "",
    email:   "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
      console.error("EmailJS error:", error);
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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/minuraashen",
    }
  ];

  /* ── Floating Label Input ── */
  const TerminalInput = ({
    id,
    name,
    type = "text",
    value,
    label,
    required,
    placeholder,
  }: {
    id: string;
    name: string;
    type?: string;
    value: string;
    label: string;
    required?: boolean;
    placeholder?: string;
  }) => {
    const isFocused = focusedField === id;
    const hasValue  = value.length > 0;
    const isActive  = isFocused || hasValue;

    return (
      <div className="relative group">
        {/* Prompt prefix */}
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono-terminal text-sm transition-opacity duration-200 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"}`}>
          &gt;_
        </span>

        {/* Floating label */}
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 pointer-events-none font-mono-terminal text-xs z-10 ${
            isActive
              ? "-top-2.5 text-primary text-[10px] bg-background px-1.5 rounded font-semibold"
              : "top-1/2 -translate-y-1/2 text-muted-foreground text-sm"
          }`}
          style={{ left: isActive ? "0.5rem" : (isFocused || hasValue ? "2rem" : "0.75rem") }}
        >
          {label}
        </label>

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          required={required}
          placeholder={isActive ? (placeholder ?? "") : ""}
          className={`
            w-full h-12 font-mono-terminal text-sm text-foreground
            bg-background/30 border rounded-xl px-3 outline-none
            transition-all duration-250 placeholder:text-muted-foreground/40
            ${isActive ? "pl-8" : "pl-3"}
            ${isFocused
              ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.15),0_0_15px_hsl(var(--primary)/0.12)]"
              : "border-border/40 hover:border-border/70"
            }
          `}
        />

        {/* Animated bottom focus bar */}
        <motion.div
          className="absolute bottom-0 left-3 right-3 h-px bg-gradient-primary rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ originX: 0.5 }}
        />
      </div>
    );
  };

  /* ── Floating Label Textarea ── */
  const TerminalTextarea = ({
    id,
    name,
    value,
    label,
    rows,
    required,
  }: {
    id: string;
    name: string;
    value: string;
    label: string;
    rows?: number;
    required?: boolean;
  }) => {
    const isFocused = focusedField === id;
    const hasValue  = value.length > 0;
    const isActive  = isFocused || hasValue;

    return (
      <div className="relative group">
        <span className={`absolute left-3 top-4 text-primary font-mono-terminal text-sm transition-opacity duration-200 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"}`}>
          &gt;_
        </span>

        <label
          htmlFor={id}
          className={`absolute transition-all duration-200 pointer-events-none font-mono-terminal z-10 ${
            isActive
              ? "-top-2.5 left-2 text-primary text-[10px] bg-background px-1.5 rounded font-semibold"
              : "top-3.5 left-3 text-muted-foreground text-sm"
          }`}
        >
          {label}
        </label>

        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          required={required}
          rows={rows ?? 5}
          className={`
            w-full font-mono-terminal text-sm text-foreground
            bg-background/30 border rounded-xl px-3 py-3.5 outline-none resize-none
            transition-all duration-250 placeholder:text-muted-foreground/40
            ${isActive ? "pl-8 pt-3" : "pl-3"}
            ${isFocused
              ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.15),0_0_15px_hsl(var(--primary)/0.12)]"
              : "border-border/40 hover:border-border/70"
            }
          `}
        />

        {/* Blinking cursor when focused and empty */}
        {isFocused && !hasValue && (
          <span className="absolute top-3.5 left-[2.2rem] text-primary/70 font-mono-terminal text-sm animate-terminal-blink pointer-events-none">
            |
          </span>
        )}

        <motion.div
          className="absolute bottom-0 left-3 right-3 h-px bg-gradient-primary rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ originX: 0.5 }}
        />
      </div>
    );
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">

      {/* Bg blob */}
      <div className="absolute top-0 right-0 w-80 h-80 blob blob-2 opacity-20 pointer-events-none" aria-hidden />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-mono-terminal mb-3">
              Open to opportunities
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              Get In <span className="shimmer-text">Touch</span>
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

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 glass-card border border-border/30 rounded-2xl hover:border-primary/25 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors text-sm break-all font-medium mt-1 inline-block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Follow My Work</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-3 rounded-xl glass-card hover:border-primary/40 hover:text-primary hover:shadow-glow transition-all duration-300"
                    title={link.label}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Terminal-Style Message Form ── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Terminal window chrome */}
            <div className="glass-card border border-border/30 rounded-3xl overflow-hidden hover:border-primary/15 transition-all duration-500 hover:shadow-3d">

              {/* Window title bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border/30 bg-muted/30">
                {/* macOS traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors cursor-default" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-default" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors cursor-default" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 text-xs font-mono-terminal text-muted-foreground bg-background/40 px-3 py-1 rounded-md border border-border/30">
                    <Terminal className="h-3 w-3 text-primary" />
                    <span>~/portfolio/contact</span>
                    <span className="text-primary animate-terminal-blink">|</span>
                  </div>
                </div>
              </div>

              {/* Terminal body with form */}
              <div className="p-6 sm:p-8">
                {/* Header prompt line */}
                <div className="flex items-center gap-2 mb-6 font-mono-terminal text-sm text-muted-foreground">
                  <span className="text-primary font-semibold">$</span>
                  <span className="text-foreground">send_message</span>
                  <span className="text-primary">--interactive</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TerminalInput
                      id="name"
                      name="name"
                      value={formData.name}
                      label="Your Name"
                      placeholder="Enter your name"
                      required
                    />
                    <TerminalInput
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      label="Email Address"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <TerminalInput
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    label="Subject"
                    placeholder="What is this regarding?"
                    required
                  />

                  <TerminalTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    label="Message"
                    rows={5}
                    required
                  />

                  {/* Submit line */}
                  <div className="pt-1">
                    <div className="font-mono-terminal text-xs text-muted-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">$</span>
                      <span>
                        {isSubmitting
                          ? "Sending message..."
                          : "Press Enter or click to send"
                        }
                      </span>
                      {isSubmitting && <span className="animate-terminal-blink text-primary">|</span>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-95 text-primary-foreground h-12 rounded-xl font-mono-terminal text-sm font-semibold tracking-wide border-none hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isSubmitting ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Send className="w-4 h-4" />
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;