"use client";

import {
  BarChart3,
  FileSearch,
  Map,
  Mic,
  Target,
  Check,
  type LucideIcon,
} from "lucide-react";
import { featureCards } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

const iconMap: Record<string, LucideIcon> = {
  FileSearch,
  Mic,
  Target,
  Map,
  BarChart3,
};

export function SolutionSection() {
  return (
    <section className="section-padding" id="features">
      <div className="container-max">
        <FadeIn>
          <SectionHeader
            badge="The Solution"
            title="Everything You Need To Get Hired"
            subtitle="One platform to analyze, practice, learn, and land your next role — built specifically for software engineers."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <div
                  className={`group glass-card relative h-full overflow-hidden p-6 transition-all duration-300 hover:border-primary/30`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                    <ul className="space-y-2">
                      {card.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-3.5 shrink-0 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
