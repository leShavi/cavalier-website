import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  ventures: [
    { label: 'Cut to the Case', href: '/portfolio/cut-to-the-case' },
    { label: 'voxresume', href: '/portfolio/voxresume' },
    { label: 'Sabborah', href: '/portfolio/sabborah' },
    { label: '5njoom', href: '/portfolio/5njoom' },
    { label: 'darajat', href: '/portfolio/darajat' },
    { label: "sha3r", href: '/portfolio/sha3r' }
  ],
  company: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 border-t border-navy-800/50 pt-16 pb-12 lg:pt-20 lg:pb-16">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-3 lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpeg"
                  alt="Cavalier Ventures"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-50 font-semibold tracking-wide uppercase">
                  Cavalier
                </span>
                <span className="text-gold-500 text-xs tracking-[0.2em] uppercase">
                  Ventures
                </span>
              </div>
            </Link>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-navy-700 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-navy-700 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Ventures Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-slate-50 font-semibold mb-6 text-sm tracking-wide uppercase">
              Ventures
            </h4>
            <ul className="space-y-3">
              {footerLinks.ventures.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-slate-50 font-semibold mb-6 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800/50">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Cavalier Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
