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
        className="group relative bg-navy-900/50 border border-navy-800/50 rounded-sm overflow-hidden card-hover h-full"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${company.categoryColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Category Tag */}
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-gold-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-500/50" />
            {company.category}
          </span>

          {/* Company Name */}
          <h3 className="text-slate-50 text-2xl font-serif mb-2 group-hover:text-gold-400 transition-colors duration-300">
            {company.name}
          </h3>

          {/* Tagline */}
          <p className="text-slate-400 text-sm italic mb-4">
            {company.tagline}
          </p>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed flex-grow">
            {company.description}
          </p>

          {/* Bottom Row */}
          <div className="mt-6 pt-6 border-t border-navy-700/50 flex items-center justify-between">
            {/* Status */}
            <span
              className={`text-xs font-medium tracking-wide uppercase ${
                company.status === 'active'
                  ? 'text-emerald-400'
                  : company.status === 'building'
                  ? 'text-amber-400'
                  : 'text-slate-500'
              }`}
            >
              {company.status === 'active' ? 'Live' : company.status === 'building' ? 'In Development' : 'Acquired'}
            </span>

            {/* Arrow */}
            <span className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-gold-500 transition-colors duration-300">
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
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-gold-500/10 to-transparent rotate-45 group-hover:from-gold-500/20 transition-colors duration-500" />
        </div>
      </article>
    </Link>
  );
}
