import { companies } from '@/lib/data';
import VentureCard from '@/components/VentureCard';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Portfolio | Cavalier Ventures',
  description: 'Explore our portfolio of SaaS, EdTech, and AI ventures built with precision and purpose.',
};

export default function PortfolioPage() {
  const activeVentures = companies.filter(c => c.status === 'active');
  const buildingVentures = companies.filter(c => c.status === 'building');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gray-50">
        <div className="absolute inset-0 knight-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

        <div className="container-wide relative z-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Our Ventures"
            description="We build products that solve real problems, generate sustainable revenue, and create lasting value."
          />
        </div>
      </section>

      {/* Active Ventures */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-2xl font-serif text-slate-900">Live Products</h2>
            <span className="text-slate-500 text-sm">({activeVentures.length})</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeVentures.map((company, index) => (
              <VentureCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Building */}
      {buildingVentures.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
              <h2 className="text-2xl font-serif text-slate-900">In Development</h2>
              <span className="text-slate-500 text-sm">({buildingVentures.length})</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingVentures.map((company, index) => (
                <VentureCard key={company.id} company={company} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-navy-primary mb-2">6</div>
              <div className="text-slate-500 text-sm tracking-wide">Total Ventures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-navy-primary mb-2">4</div>
              <div className="text-slate-500 text-sm tracking-wide">Live Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-navy-primary mb-2">3</div>
              <div className="text-slate-500 text-sm tracking-wide">Markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-navy-primary mb-2">50K+</div>
              <div className="text-slate-500 text-sm tracking-wide">Users Served</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
