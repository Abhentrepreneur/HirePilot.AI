"use client";

import {
  Briefcase,
  Rocket,
  Sparkles,
  Upload,
  Video,
  type LucideIcon,
} from "lucide-react";
import { howItWorksSteps } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientBackground } from "@/components/shared/gradient-background";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Briefcase,
  Video,
  Sparkles,
  Rocket,
};

export function HowItWorksSection() {
  return (
    <section className="relative section-padding" id="how-it-works">
      <GradientBackground />
      <div className="container-max relative">
        <FadeIn>
          <SectionHeader
            badge="How It Works"
            title="From Resume to Offer Letter"
            subtitle="Five simple steps to transform your interview preparation from guesswork to a data-driven strategy."
          />
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={step.step} delay={index * 0.1}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-14 md:pl-0 ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <span className="mb-1 inline-block text-xs font-medium tracking-wider text-primary uppercase">
                        Step {step.step}
                      </span>
                      <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background shadow-lg shadow-primary/20 md:left-1/2">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
