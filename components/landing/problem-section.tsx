"use client";

import {
  EyeOff,
  FileX,
  HeartPulse,
  MessageSquareOff,
  Repeat,
  Shuffle,
  type LucideIcon,
} from "lucide-react";
import { problemCards } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientBackground } from "@/components/shared/gradient-background";

const iconMap: Record<string, LucideIcon> = {
  FileX,
  MessageSquareOff,
  Repeat,
  HeartPulse,
  Shuffle,
  EyeOff,
};

export function ProblemSection() {
  return (
    <section className="relative section-padding" id="problems">
      <GradientBackground />
      <div className="container-max relative">
        <FadeIn>
          <SectionHeader
            badge="The Problem"
            title="Interview Preparation Is Broken"
            subtitle="Software engineers face the same frustrating cycle — apply, wait, reject, repeat. The system wasn't built for you."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <div className="group glass-card h-full p-6 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/[0.03]">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
