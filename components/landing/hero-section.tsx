"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { HeroGradient } from "@/components/shared/gradient-background";
import { DashboardMockup } from "@/components/landing/dashboard-mockup";

const trustIndicators = [
  "ATS-optimized resume analysis",
  "Realistic mock interviews",
  "Personalized skill roadmaps",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <HeroGradient />

      <div className="container-max relative section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Now accepting founding beta users
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.1]">
              Stop Guessing.{" "}
              <span className="text-gradient">Start Landing Interviews.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              HirePilot AI analyzes your resume, simulates real interviews,
              identifies skill gaps, and helps you prepare smarter.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="xl" className="glow-primary w-full sm:w-auto">
                <Link href="#waitlist">
                  Join Early Access
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <Link href="#how-it-works">
                  <Play className="size-4" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="mt-16 lg:mt-20">
          <motion.div
            className="relative mx-auto max-w-5xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-2xl" />
            <DashboardMockup />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
