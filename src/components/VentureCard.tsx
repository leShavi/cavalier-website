'use client';

import Link from 'next/link';
import { Company } from '@/lib/data';

interface VentureCardProps {
  company: Company;
  index: number;
}

export default function VentureCard({ company, index }: VentureCardProps) {
  return (
    <Link href={`/portfolio/${company.id}`}>
      <article
        className="group relative bg-white border border-gray-200 rounded-sm overflow-hidden card-hover h-full shadow-sm"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${company.categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Category Tag */}
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-navy-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-navy-primary/50" />
            {company.category}
          </span>

          {/* Company Name */}
          <h3 className="text-slate-900 text-2xl font-serif mb-2 group-hover:text-navy-primary transition-colors duration-300">
            {company.name}
          </h3>

          {/* Tagline */}
          <p className="text-slate-500 text-sm italic mb-4">
            {company.tagline}
          </p>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed flex-grow">
            {company.description}
          </p>

          {/* Bottom Row */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            {/* Status */}
            <span
              className={`text-xs font-medium tracking-wide uppercase ${
                company.status === 'active'
                  ? 'text-emerald-600'
                  : company.status === 'building'
                  ? 'text-amber-600'
                  : 'text-slate-500'
              }`}
            >
              {company.status === 'active' ? 'Live' : company.status === 'building' ? 'In Development' : 'Acquired'}
            </span>

            {/* Arrow */}
            <span className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-navy-primary transition-colors duration-300">
              View
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-navy-primary/10 to-transparent rotate-45 group-hover:from-navy-primary/20 transition-colors duration-500" />
        </div>
      </article>
    </Link>
  );
}
