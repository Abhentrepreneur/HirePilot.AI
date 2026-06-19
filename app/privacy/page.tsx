import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for HirePilot AI",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding pt-24">
        <div className="container-max mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: June 19, 2026</p>
            <p>
              HirePilot AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our website and services.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly, including your name,
              email address, current role, and years of experience when you join
              our waitlist. If you use our platform, we may also collect your
              resume, interview practice data, and usage analytics.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p>
              We use your information to provide and improve our services,
              communicate with you about early access, and personalize your
              interview preparation experience. We never sell your personal data
              to third parties.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Data Security
            </h2>
            <p>
              We implement industry-standard encryption and security measures to
              protect your data. Your resume and interview data are stored securely
              and are never shared without your explicit consent.
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal data
              at any time. Contact us at{" "}
              <a
                href="mailto:hello@hirepilot.ai"
                className="text-primary hover:underline"
              >
                hello@hirepilot.ai
              </a>{" "}
              to exercise these rights.
            </p>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
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
