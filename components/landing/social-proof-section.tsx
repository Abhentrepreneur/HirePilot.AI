"use client";

import { Brain, Code2, Terminal, type LucideIcon } from "lucide-react";
import { trustBadges, trustStats } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Terminal,
};

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, { enabled: isInView });

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        <span className="text-gradient">
          {count}
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <FadeIn>
          <SectionHeader
            badge="Why HirePilot"
            title="Built for Engineers, By Engineers"
            subtitle="We understand the interview grind because we've lived it. Every feature is designed to solve real problems developers face."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-card mb-12 grid grid-cols-2 gap-8 p-8 lg:grid-cols-4 lg:gap-4">
            {trustStats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon];
            return (
              <FadeIn key={badge.title} delay={0.15 + index * 0.08}>
                <div className="glass-card flex h-full flex-col items-center p-8 text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{badge.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {badge.description}
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
