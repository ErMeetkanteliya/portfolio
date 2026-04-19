import React from "react";
import { Layers } from "lucide-react";
import { GradientCard } from "@/components/ui/GradientCard";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <GradientCard animated hoverEffect className="rounded-xl w-full max-w-xl">
    <div className="p-8 h-full border border-dark-border/60 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-400/20 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-primary-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-primary-400">{company}</span>
          <span className="text-sm font-mono bg-primary-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-primary-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </GradientCard>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Layers,
      title: "Junior Frontend Developer",
      company: "Sera Programmer",
      period: "15 days",
      description:
        "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
    },
  ];

  return (
    <div
      id="main-content"
      className="min-h-screen bg-gradient-to-b relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-dark-bg" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content container (centered) */}
      <div className="relative container mx-auto px-6 flex flex-col items-center justify-center">
        {/* Section header */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-accent-400 to-primary-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-400/20 to-primary-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent-400/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default ExperienceSection;
