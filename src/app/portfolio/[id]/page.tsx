import { notFound } from 'next/navigation';
import Link from 'next/link';
import { companies } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return { title: 'Not Found' };
  }

  return {
    title: `${company.name} | Cavalier Ventures`,
    description: company.description,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  const companyIndex = companies.findIndex((c) => c.id === id);
  const nextCompany = companies[(companyIndex + 1) % companies.length];
  const prevCompany = companies[(companyIndex - 1 + companies.length) % companies.length];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 knight-grid opacity-20" />
        <div className={`absolute inset-0 bg-gradient-to-br ${company.categoryColor} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />

        <div className="container-wide relative z-10">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-500 transition-colors duration-300 mb-12 group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="max-w-3xl">
            {/* Category */}
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-500/50" />
              {company.category}
            </span>

            {/* Company Name */}
            <h1 className="text-slate-50 mb-4">{company.name}</h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-slate-300 font-serif italic mb-8">
              &ldquo;{company.tagline}&rdquo;
            </p>

            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase ${
                  company.status === 'active'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : company.status === 'building'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${
                  company.status === 'active' ? 'bg-emerald-500' :
                  company.status === 'building' ? 'bg-amber-500' : 'bg-slate-500'
                } animate-pulse`} />
                {company.status === 'active' ? 'Live' : company.status === 'building' ? 'In Development' : 'Acquired'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-slate-50 text-2xl font-serif mb-6">About</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                {company.description}
              </p>

              {company.features && (
                <>
                  <h3 className="text-slate-50 text-xl font-serif mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {company.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-8 bg-navy-900/50 border border-navy-800/50 rounded-sm">
                <h4 className="text-slate-50 font-semibold mb-6">Quick Info</h4>

                <div className="space-y-6">
                  <div>
                    <span className="text-slate-500 text-sm block mb-1">Category</span>
                    <span className="text-slate-200">{company.category}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 text-sm block mb-1">Status</span>
                    <span className={`${
                      company.status === 'active' ? 'text-emerald-400' :
                      company.status === 'building' ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      {company.status === 'active' ? 'Live Product' :
                       company.status === 'building' ? 'In Development' : 'Acquired'}
                    </span>
                  </div>

                  {company.url && (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full justify-center"
                    >
                      Visit Website
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-navy-900 border-t border-navy-800/50">
        <div className="container-wide">
          <div className="flex justify-between items-center">
            <Link
              href={`/portfolio/${prevCompany.id}`}
              className="group flex items-center gap-4"
            >
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-gold-500 transform group-hover:-translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wide block">Previous</span>
                <span className="text-slate-200 group-hover:text-gold-500 transition-colors duration-300">
                  {prevCompany.name}
                </span>
              </div>
            </Link>

            <Link
              href={`/portfolio/${nextCompany.id}`}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wide block">Next</span>
                <span className="text-slate-200 group-hover:text-gold-500 transition-colors duration-300">
                  {nextCompany.name}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-gold-500 transform group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
