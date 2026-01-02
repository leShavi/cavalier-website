import Link from 'next/link';
import Image from 'next/image';
import { companies } from '@/lib/data';
import VentureCard from '@/components/VentureCard';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 knight-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />

        {/* Decorative Knight Silhouette */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] opacity-[0.03]">
          <Image
            src="/logo.jpeg"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Animated Gradient Orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] animate-pulse-slow" />

        {/* Content */}
        <div className="container-wide relative z-10 flex items-center min-h-[calc(100vh-5rem)]">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-slate-50 mb-6 animate-fade-in-up">
              Building the Future,
              <br />
              <span className="text-gradient">One Venture</span> at a Time.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
              We believe in building profitable SaaS and info products through
              lean development and rapid feedback loops to achieve true product-market fit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/portfolio" className="btn btn-primary">
                View Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="relative py-24 md:py-32 bg-navy-950">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Our Ventures"
              description="A curated collection of products across EdTech, AI, and SaaS."
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors duration-300 group"
            >
              View All
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.slice(0, 3).map((company, index) => (
              <VentureCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 knight-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-transparent to-navy-900" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-slate-50 mb-6">
              Ready to Make Your Move?
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Whether you have an idea to discuss or want to explore partnership opportunities,
              we&apos;re always open to a conversation.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
