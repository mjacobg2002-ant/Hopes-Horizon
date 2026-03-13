import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ResidentialPrograms } from './components/ResidentialPrograms';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { MidPageCTA } from './components/MidPageCTA';
import { AnnouncementBar } from './components/AnnouncementBar';
import { ObjectionHandler } from './components/ObjectionHandler';

export default function App() {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Hope's Horizon | Alcohol & Drug Treatment Center | Nottingham, MD";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Hope's Horizon is a compassionate, family-focused alcohol & drug treatment center in Nottingham, Maryland. Services include detox, IOP, outpatient, MAT, residential housing & DUI education. Call 443-725-4062.";

    // Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': "Hope's Horizon | Alcohol & Drug Treatment | Nottingham, MD",
      'og:description':
        "Family-focused addiction treatment in Nottingham, MD. Detox, IOP, MAT, outpatient & residential programs. No judgment. Affordable. Call 443-725-4062.",
      'og:type': 'website',
      'og:locale': 'en_US',
    };

    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://hopeshorizonmd.com/';

    // JSON-LD LocalBusiness + MedicalOrganization schema
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['MedicalOrganization', 'LocalBusiness'],
          '@id': 'https://hopeshorizonmd.com/#organization',
          name: "Hope's Horizon",
          alternateName: "Hopes Horizon",
          url: 'https://hopeshorizonmd.com',
          telephone: '+14437254062',
          description:
            "Hope's Horizon is a family-focused alcohol and drug treatment center discretely located in Nottingham, Maryland. We offer individualized, affordable treatment for alcohol and drug abuse.",
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nottingham',
            addressRegion: 'MD',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.3918,
            longitude: -76.4822,
          },
          medicalSpecialty: [
            'Addiction Medicine',
            'Psychiatry and Psychology',
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday',
              ],
              opens: '00:00',
              closes: '21:00',
            },
          ],
          foundingDate: '2016-04-25',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Drug & Alcohol Treatment Programs',
            itemListElement: [
              { '@type': 'Offer', 'name': 'Clinical Assessment', description: 'State-certified clinical assessment by a licensed alcohol & drug counselor.' },
              { '@type': 'Offer', 'name': 'Ambulatory Detox', description: 'Medically supervised ambulatory withdrawal management for alcohol, benzodiazepines, and opiates.' },
              { '@type': 'Offer', 'name': 'Medication-Assisted Treatment (MAT)', description: 'Suboxone and Vivitrol maintenance treatment for opiate dependence.' },
              { '@type': 'Offer', 'name': 'Intensive Outpatient Program (IOP)', description: '3-5 day/week intensive outpatient group therapy and individual counseling.' },
              { '@type': 'Offer', 'name': 'Traditional Outpatient', description: 'Flexible outpatient program with morning and evening sessions.' },
              { '@type': 'Offer', 'name': 'DUI Education Program', description: '6-week, 12-hour state-certified MVA-approved DUI education course.' },
              { '@type': 'Offer', 'name': '3.1 Residential Program', description: 'Sober living residential program with clinical treatment and independence-building.' },
            ],
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '6',
            bestRating: '5',
            worstRating: '1',
          },
          review: [
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Gamb. D.' },
              reviewBody: "The staff at Hope's Horizon are loving and caring. They'll go out of their way to help you fight addiction and win.",
              reviewRating: { '@type': 'Rating', ratingValue: '5' },
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Charles B.' },
              reviewBody: "I will always have a special place in my heart for Hope's Horizon. They took me in when no one else would.",
              reviewRating: { '@type': 'Rating', ratingValue: '5' },
            },
          ],
          sameAs: [],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://hopeshorizonmd.com/#website',
          url: 'https://hopeshorizonmd.com',
          name: "Hope's Horizon",
          publisher: { '@id': 'https://hopeshorizonmd.com/#organization' },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://hopeshorizonmd.com/#faqpage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I get started at Hope\'s Horizon?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Call 443-725-4062, option #2 to schedule your free clinical assessment. Lines are open daily until 9 PM.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is my information confidential at Hope\'s Horizon?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. All information is protected under HIPAA and 42 CFR Part 2 federal confidentiality laws.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does Hope\'s Horizon accept insurance?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hope\'s Horizon works with many insurance plans and is committed to making treatment affordable. Call to discuss your coverage.',
              },
            },
          ],
        },
      ],
    };

    let ldScript = document.getElementById('hopes-horizon-ld-json') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'hopes-horizon-ld-json';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.text = JSON.stringify(schema);

    return () => {
      // Cleanup on unmount
      const el = document.getElementById('hopes-horizon-ld-json');
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#2B7A3E] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main-content">
        {/* 1. Hero – Emotional hook, primary CTA, trust signals */}
        <Hero />

        {/* 2. Trust Bar – Social proof through stats and authority */}
        <TrustBar />

        {/* 3. About – Story, values, team, emotional connection */}
        <About />

        {/* 3b. Objection Handler – Dismantle the 5 fears before they leave */}
        <ObjectionHandler />

        {/* 4. Services – Full program detail with tabbed navigation */}
        <Services />

        {/* 5. Gallery – Show don't tell — real facility photos */}
        <Gallery />

        {/* 6. Testimonials – Powerful social proof carousel + grid */}
        <Testimonials />

        {/* 6b. Mid-page CTA – Phone number touchpoint between social proof and programs */}
        <MidPageCTA />

        {/* 7. Residential Programs – Housing detail and what to bring */}
        <ResidentialPrograms />

        {/* 8. FAQ – Objection handling and information clarity */}
        <FAQ />

        {/* 9. Contact CTA – Final conversion point with form + call */}
        <ContactCTA />
      </main>

      <Footer />

      {/* Floating CTA – Always-visible conversion element */}
      <FloatingCTA />

    </div>
  );
}