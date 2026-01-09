'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gray-50">
        <div className="absolute inset-0 knight-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

        <div className="container-wide relative z-10">
          <SectionHeader
            eyebrow="Contact"
            title="Let&apos;s Connect"
            description="Have an idea to discuss? Looking for partnership opportunities? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-slate-900 text-2xl font-serif mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-navy-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Email</h4>
                    <a
                      href="mailto:hello@cavalierventures.com"
                      className="text-slate-500 hover:text-navy-primary transition-colors duration-300"
                    >
                      hello@cavalierventures.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-navy-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Location</h4>
                    <p className="text-slate-500">Remote-first, Global Reach</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-navy-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Response Time</h4>
                    <p className="text-slate-500">Usually within 24-48 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h4 className="text-slate-900 font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded border border-gray-300 flex items-center justify-center text-slate-500 hover:text-navy-primary hover:border-navy-primary transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded border border-gray-300 flex items-center justify-center text-slate-500 hover:text-navy-primary hover:border-navy-primary transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 md:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 text-2xl font-serif mb-4">Message Sent</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-navy-primary focus:ring-1 focus:ring-navy-primary transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-navy-primary focus:ring-1 focus:ring-navy-primary transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-700 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 focus:outline-none focus:border-navy-primary focus:ring-1 focus:ring-navy-primary transition-colors duration-300"
                    >
                      <option value="" className="bg-white">Select a topic</option>
                      <option value="partnership" className="bg-white">Partnership Inquiry</option>
                      <option value="investment" className="bg-white">Investment Discussion</option>
                      <option value="product" className="bg-white">Product Inquiry</option>
                      <option value="other" className="bg-white">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-navy-primary focus:ring-1 focus:ring-navy-primary transition-colors duration-300 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
