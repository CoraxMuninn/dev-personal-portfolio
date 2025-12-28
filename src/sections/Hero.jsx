import { useMemo } from "react";
import Button from "../components/Button";
import { ArrowRight, Download, Github, Instagram, Send } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

export default function Hero() {
  const dots = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="hero-bg.jpg"
          alt="Hero section"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* {Content} */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex text-sm text-primary items-center gap-2 px-4 py-2 glass rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Front-End Developer . React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Amir Muhammad Jafari — a frontend developer focused on
                building modern web experiences with React, Next.js, and
                TypeScript. I create scalable, high-performance applications
                that are intuitive, reliable, and enjoyable to use.
              </p>
            </div>

            {/* {CTAs} */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />{" "}
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* {Social link} */}
            <div>
              <span>Follow :</span>
              {[
                {
                  icon: Github,
                  href: "#",
                },
                {
                  icon: Send,
                  href: "#",
                },
                {
                  icon: Instagram,
                  href: "#",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a href={social.href} key={index}>
                    {<Icon />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
