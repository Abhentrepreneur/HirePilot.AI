import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for HirePilot AI",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding pt-24">
        <div className="container-max mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: June 19, 2026</p>
            <p>
              By accessing or using HirePilot AI, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our
              services.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Service Description
            </h2>
            <p>
              HirePilot AI provides AI-powered career tools for software
              engineers, including resume analysis, mock interviews, job
              description matching, and personalized learning roadmaps.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Beta Program
            </h2>
            <p>
              During the beta period, services are provided free of charge to
              founding beta users. Features may change, and the service may
              experience downtime as we iterate on the product.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              User Responsibilities
            </h2>
            <p>
              You agree to provide accurate information and use the platform
              responsibly. You retain ownership of your resume and personal data
              uploaded to the platform.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p>
              HirePilot AI is provided &quot;as is&quot; during the beta period. We do not
              guarantee employment outcomes. Our AI feedback is advisory and
              should supplement, not replace, professional career guidance.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:hello@hirepilot.ai"
                className="text-primary hover:underline"
              >
                hello@hirepilot.ai
              </a>
              .
            </p>
          </div>
          <Link
            href="/"
            className="mt-8 inline-block text-sm text-primary hover:underline"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
