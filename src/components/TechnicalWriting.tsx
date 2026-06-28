import { BookOpen, Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import semanticBlog1Img from "@/assets/semanticblog1.png";
import semanticBlog2Img from "@/assets/semanticblog2.png";
import vscodeBlogImg from "@/assets/vscodeblog.png";
import vlmBlogImg from "@/assets/vlmblog.png";
import mentalModelImg from "@/assets/mentalmodel.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TechnicalWriting = () => {
  const articles = [
    {
      title: "A Complete Mental Model for Generative AI — Part 1",
      description: "A simple, practical 5-layer mental model (Representation, Architecture, Generation Paradigm, Training Objective, Conditioning). Part 1 explains Representation and Architecture in an approachable way.",
      link: "https://medium.com/@minuraashensamaramanna/a-complete-mental-model-for-generative-ai-part-1-f85b0da2579d",
      date: "June 2026",
      readTime: "15 min read",
      gradient: "from-primary to-accent",
      image: mentalModelImg
    },
    {
      title: "Designing Semantic Code Search Tool for WSO2 MI Copilot—Part 1",
      description: "An in-depth look at implementing structure-aware chunking for XML configurations and the core semantic search vector design for AI assistants.",
      link: "https://medium.com/@minuraashensamaramanna/designing-semantic-code-search-tool-for-wso2-micro-integrator-copilot-part-1-173e26b79635",
      date: "March 2026",
      readTime: "6 min read",
      gradient: "from-primary to-accent",
      image: semanticBlog1Img
    },
    {
      title: "Designing Semantic Code Search Tool for WSO2 MI Copilot—Part 2",
      description: "Details running local ONNX embeddings generators, managing background worker child processes inside VS Code extensions, and designing fault-tolerant fallback agents.",
      link: "https://medium.com/@minuraashensamaramanna/designing-semantic-code-search-tool-for-wso2-micro-integrator-copilot-part-2-faf6fd4b6e83",
      date: "May 2026",
      readTime: "7 min read",
      gradient: "from-accent to-secondary",
      image: semanticBlog2Img
    },
    {
      title: "VS Code Deep Dive: How the World's Most Popular Editor is Built",
      description: "Explores the multi-process architecture of Visual Studio Code, process isolation benefits (Main, Renderer, Extension Host), and the Monaco Editor engine.",
      link: "https://medium.com/@minuraashensamaramanna/vs-code-deep-dive-how-the-worlds-most-popular-editor-is-built-a66a9d451e66",
      date: "December 2025",
      readTime: "5 min read",
      gradient: "from-secondary to-primary",
      image: vscodeBlogImg
    },
        {
      title: "Vision Language Models: The Missing Sensory Layer of Large Language Models.",
      description: "Explored about Vision Language Models (VLMs) and their role in enhancing Large Language Models (LLMs) with visual understanding, enabling multi-modal AI applications.",
      link: "https://medium.com/@minuraashensamaramanna/vision-language-models-the-missing-sensory-layer-of-large-language-models-dff98ee2c15f",
      date: "January 2026",
      readTime: "4 min read",
      gradient: "from-secondary to-primary",
      image: vlmBlogImg
    }
  ];

  return (
    <section id="writing" className="py-20 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Writing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Breaking down complex technical architectures and sharing my learning journey through dev blogs.
            </p>
          </motion.div>
        </div>

        <div className="relative px-6 sm:px-12 max-w-6xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 items-stretch">
              {articles.map((article, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex w-full"
                  >
                    <Card className="glass-card border border-border/30 hover:border-primary/25 hover:shadow-glow transition-all duration-500 group flex flex-col justify-between overflow-hidden rounded-3xl w-full">
                      <div className="relative h-44 w-full overflow-hidden bg-muted/20 flex-shrink-0">
                        {article.image ? (
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${article.gradient} opacity-80 relative flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                              <BookOpen className="h-6 w-6" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>

                          <CardTitle className="text-base sm:text-lg font-heading leading-tight group-hover:text-primary transition-colors font-semibold">
                            {article.title}
                          </CardTitle>

                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {article.description}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-border/20 mt-6">
                          <Button size="sm" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-xs" asChild>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                              Read Article on Medium
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-12 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
            <CarouselNext className="-right-4 sm:-right-12 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechnicalWriting;
