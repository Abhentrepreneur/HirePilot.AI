import type { Metadata } from "next";
import { siteConfig } from "./constants";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — AI Interview Coach for Software Engineers`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: `${siteConfig.name} — Stop Guessing. Start Landing Interviews.`,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — Stop Guessing. Start Landing Interviews.`,
      description: siteConfig.description,
      creator: "@hirepilotai",
    },
    alternates: {
      canonical: siteConfig.url,
    },
    category: "technology",
  };
}

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.svg`,
        },
        sameAs: [siteConfig.links.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.links.email,
          contactType: "customer support",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free early access for founding beta users",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "127",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is HirePilot AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "HirePilot AI is an AI-powered career platform built exclusively for software engineers.",
            },
          },
          {
            "@type": "Question",
            name: "How does it work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Upload your resume, select a target role, practice AI-powered mock interviews, and receive detailed feedback.",
            },
          },
        ],
      },
    ],
  };
}
