// Portfolio company data
export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryColor: string;
  url?: string;
  status: 'active' | 'building' | 'acquired';
  features?: string[];
}

export const companies: Company[] = [
  {
    id: 'cut-to-the-case',
    name: 'Cut to the Case',
    tagline: 'Master the case interview',
    description: 'A specialized case prep course designed to help candidates ace top-tier consulting interviews. We distill years of consulting wisdom into actionable frameworks and practice.',
    category: 'EdTech',
    categoryColor: 'from-emerald-500/20 to-emerald-500/5',
    status: 'active',
    features: ['Interactive case simulations', 'Framework library', 'Expert feedback sessions']
  },
  {
    id: 'voxresume',
    name: 'voxresume',
    tagline: 'Your story, voiced',
    description: 'Building resumes by talking to a voice agent that extracts the hidden gold nuggets not listed on your standard CV. We capture the narrative behind your achievements.',
    category: 'AI / HR Tech',
    categoryColor: 'from-violet-500/20 to-violet-500/5',
    status: 'building',
    features: ['Voice-first experience', 'AI-powered extraction', 'ATS-optimized output']
  },
  {
    id: 'sabborah',
    name: 'Sabborah',
    tagline: 'Stories that move',
    description: 'A platform for generating hand-animated explainer videos in Arabic instantly via AI. Bringing visual storytelling to the Arabic-speaking world at scale.',
    category: 'Gen AI',
    categoryColor: 'from-amber-500/20 to-amber-500/5',
    status: 'active',
    features: ['Arabic-first design', 'Custom animation styles', 'Enterprise-ready']
  },
  {
    id: '5njoom',
    name: '5njoom',
    tagline: 'Every review counts',
    description: 'The premier feedback and rating collection tool for Saudi e-commerce businesses. We help merchants build trust and improve through authentic customer voices.',
    category: 'E-Commerce Tool',
    categoryColor: 'from-rose-500/20 to-rose-500/5',
    status: 'active',
    features: ['Automated collection', 'Arabic sentiment analysis', 'Integration-ready']
  },
  {
    id: 'darajat',
    name: 'darajat',
    tagline: 'Your path to excellence',
    description: 'Comprehensive preparation website for the Qiyas exam in Saudi Arabia. Empowering students with the tools and practice they need to succeed.',
    category: 'EdTech KSA',
    categoryColor: 'from-sky-500/20 to-sky-500/5',
    status: 'active',
    features: ['Adaptive learning', 'Practice exams', 'Progress tracking']
  },
  {
    id: 'sha3r',
    name: "sha3r",
    tagline: 'Poetry reimagined',
    description: 'A unique SaaS platform producing and structuring high-quality Arabic poems. Preserving the art of Arabic poetry while making it accessible to modern creators.',
    category: 'SaaS / Creative',
    categoryColor: 'from-fuchsia-500/20 to-fuchsia-500/5',
    status: 'building',
    features: ['Classical meters', 'AI composition', 'Cultural preservation']
  }
];

export const philosophyPillars = [
  {
    title: 'Lean Development',
    description: 'We build MVPs, not shelf-ware. Launch fast to learn fast. Resources go where they create value.',
    icon: 'rocket'
  },
  {
    title: 'Fast Iterations',
    description: 'Data drives decisions. Tight feedback loops let us pivot or persevere based on real user needs.',
    icon: 'cycle'
  },
  {
    title: 'Profitable Growth',
    description: 'Sustainable unit economics from day one. We build long-term assets that generate real value.',
    icon: 'chart'
  }
];

export const stats = [
  { value: '6', label: 'Active Ventures' },
  { value: '3', label: 'Markets' },
  { value: '50K+', label: 'Users Served' }
];
