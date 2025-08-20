'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Rocket,
  Bot,
  Cpu,
  Wrench,
  Gauge,
  LineChart,
  Shield,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Github,
  Linkedin,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

/**
 * NEXT.JS NOTES
 * - Drop this file in `app/page.tsx` (App Router) and ensure Tailwind + shadcn/ui are set up.
 * - Create `app/layout.tsx` with <html> + Tailwind classes, and import `globals.css` there.
 * - Update BRAND info below, swap WORK items with your real projects.
 */

const BRAND = {
  name: 'KeenSP',
  tagline: 'Senior software + applied AI for founders who move fast.',
  email: 'dave@keensp.com',
  phone: '+1 (703) 881‑8757',
  calendly: 'https://calendly.com/keensp',
  github: 'https://github.com/dmcvicar',
  linkedin: 'https://www.linkedin.com/company/keensp',
};

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Stack', href: '#stack' },
  { label: 'FAQs', href: '#faqs' },
];

const SERVICES = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'AI MVP Sprint (2–4 weeks)',
    points: [
      'Scope to first revenue signal',
      'Ship a clickable or code prototype',
      'User tests + iteration loop',
    ],
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Model Integration',
    points: [
      'OpenAI, Anthropic, local LLMs',
      'Embeddings, RAG, agents, tools',
      'Latency, evals, cost controls',
    ],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'MLOps & Data Pipelines',
    points: [
      'ETL, feature stores, vector DBs',
      'Prompt & model versioning',
      'Observability + safety rails',
    ],
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: 'Performance & Scale',
    points: [
      'Async job queues & streaming',
      'Caching, edge, GPU scheduling',
      'SLOs, monitoring, on-call setup',
    ],
  },
];

const WORK = [
  {
    logo: '🚀',
    name: 'LaunchPilot',
    result: 'From idea to paid pilot in 21 days',
    details:
      'Built a RAG system over niche PDFs with guardrails, delivered a demo that closed a 5-figure pilot.',
    metrics: ['TTV 21d', '<200ms RAG', '82% task success'],
  },
  {
    logo: '🧠',
    name: 'ScribeAI',
    result: 'Cut support handle time by 37%',
    details:
      'Integrated tool-using agent for triage + suggested replies; added eval harness and cost ceilings.',
    metrics: ['-37% AHT', '98.9% safety pass', '-54% LLM spend'],
  },
  {
    logo: '📦',
    name: 'OpsBox',
    result: 'Zero-downtime migration to vector store',
    details:
      'Moved from keyword search to hybrid dense retrieval with fallbacks and freshness weighting.',
    metrics: ['0 downtime', '+46% recall', 'P95 -42%'],
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Scope the smallest win',
    desc: 'We crystallize a narrow user journey that proves value quickly—then build backwards from it.',
  },
  {
    step: '02',
    title: 'Prototype in days',
    desc: 'Clickable Figma or working code within the first week to get real feedback early.',
  },
  {
    step: '03',
    title: 'Ship, measure, iterate',
    desc: "Instrument usage, run evals, and tune prompts/models weekly to move the only metric that matters.",
  },
  {
    step: '04',
    title: 'Harden & handoff',
    desc: 'Add tests, alerts, docs, and lightweight processes so your team can run without me.',
  },
];

const STACK = [
  'TypeScript',
  'Python',
  'Node',
  'Next.js',
  'FastAPI',
  'Postgres',
  'Prisma',
  'Redis',
  'Kafka',
  'Docker',
  'Kubernetes',
  'LangChain',
  'OpenAI/Anthropic',
  'LlamaIndex',
  'Pinecone/Weaviate',
  'Elasticsearch',
  'Airflow/Prefect',
  'dbt',
  'Grafana/Prometheus',
];

const FAQS = [
  {
    q: 'How do you price engagements?',
    a: 'Fixed-price sprints for MVPs, then weekly retainers. Clear scope, no surprises.',
  },
  { q: 'Do you work alongside our team?', a: 'Yes—happy to embed with your engineers, product, and design, or run independently.' },
  { q: 'Can you help with fundraising decks or demos?', a: 'Absolutely. I craft tight demos, live scripts, and metrics slides that resonate with investors.' },
  { q: 'IP & confidentiality?', a: 'Work-for-hire with mutual NDAs. Code repos and infra live in your org from day one.' },
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 md:px-6">{children}</div>
  </section>
);

const FadeIn = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-white text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 py-10">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <Image alt="logo" width="50" height="70" src="/keensp-logo-blue-text.png"/>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-md font-header font-semibold">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className=" text-zinc-700 hover:text-zinc-900 transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 font-content">
            <Button asChild className="rounded-2xl">
              <a href={BRAND.calendly} target="_blank" rel="noreferrer">
                <Calendar className="w-4 h-4 mr-2" /> Book a call
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section id="top" className="pt-14 font-content">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <Badge className="mb-4 w-fit" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" /> Available for {MONTHS[new Date().getMonth()]} starts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Senior software, applied <span className="text-keen-light-blue">AI</span>, real traction.
            </h1>
            <p className="mt-6 text-lg text-zinc-700 max-w-prose">
              I help AI founders ship the right thing fast—MVPs that earn usage, integrations that scale, and MLOps that won’t wake you at 3am.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={BRAND.calendly} target="_blank" rel="noreferrer">
                  <Calendar className="w-4 h-4 mr-2" /> Book intro call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl">
                <a href="#services">
                  See services <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
              <div className="flex items-center gap-1"><Shield className="w-4 h-4" /> Work‑for‑hire</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> NDA friendly</div>
              <div className="flex items-center gap-1"><LineChart className="w-4 h-4" /> Metrics focused</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card className="rounded-2xl shadow-lg border-zinc-200/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Wrench className="w-5 h-5" /> What I build
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                {SERVICES.slice(0, 4).map((s) => (
                  <div key={s.title} className="p-4 rounded-2xl border border-zinc-200/70">
                    <div className="flex items-center gap-2 font-medium mb-2">{s.icon}{s.title}</div>
                    <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* TRUST */}
      <Section className="py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500">
          <span className="text-xs">Trusted by founders from</span>
          <div className="flex gap-6 text-zinc-400">
            <span>YC</span>
            <span>Techstars</span>
            <span>Ex‑FAANG</span>
            <span>Seed–Series B</span>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="bg-zinc-50/60">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight ">Services for AI entrepreneurs</h2>
          <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="text-sm text-indigo-700 hover:text-indigo-900">Book a call →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {s.icon} {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section id="work">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight ">Selected work</h2>
          <a href="#contact" className="text-sm text-indigo-700 hover:text-indigo-900">Start a project →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {WORK.map((w) => (
            <Card key={w.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">{w.logo}</span>
                  {w.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-zinc-900 font-medium">{w.result}</div>
                <p className="text-sm text-zinc-700">{w.details}</p>
                <div className="flex flex-wrap gap-2">
                  {w.metrics.map((m) => (
                    <Badge key={m} variant="secondary" className="rounded-full">{m}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" className="bg-zinc-50/60">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 ">How we’ll work together</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {PROCESS.map((p) => (
            <div key={p.step} className="p-6 rounded-2xl border border-zinc-200/70 bg-white">
              <div className="text-xs text-zinc-500 font-header">{p.step}</div>
              <div className="font-medium mt-1 font-header">{p.title}</div>
              <p className="text-sm text-zinc-700 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Practical, proven stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STACK.map((t) => (
            <div key={t} className="text-sm p-3 rounded-xl border border-zinc-200/70 bg-white flex items-center gap-2">
              <Cpu className="w-4 h-4" /> {t}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-keen-light-blue/20 to-keen-light-blue/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight ">Have an AI product to ship?</h3>
            <p className="text-zinc-700 mt-2 max-w-xl">Let’s scope the smallest high‑leverage bet and get you real user traction in weeks, not quarters.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="rounded-2xl">
              <a href={BRAND.calendly} target="_blank" rel="noreferrer"><Calendar className="w-4 h-4 mr-2"/>Book intro</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl">
              <a href="#contact"><MessageSquare className="w-4 h-4 mr-2"/>Ask a question</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQS */}
      <Section id="faqs" className="bg-zinc-50/60">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 ">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FAQS.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl border border-zinc-200/70 bg-white">
              <div className="font-medium font-header font-semibold">{f.q}</div>
              <p className="text-sm text-zinc-700 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight ">Let’s talk</h2>
            <p className="text-zinc-700 mt-2">Tell me about your users, your wedge, and what you’d like to ship in the next 30 days.</p>

            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-zinc-800 hover:text-indigo-700"><Mail className="w-4 h-4"/> {BRAND.email}</a>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-zinc-800 hover:text-indigo-700"><Phone className="w-4 h-4"/> {BRAND.phone}</a>
              <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-800 hover:text-indigo-700"><Calendar className="w-4 h-4"/> Book Calendly</a>
              <a href={BRAND.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-800 hover:text-indigo-700"><Github className="w-4 h-4"/> GitHub</a>
              <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-800 hover:text-indigo-700"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Project inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace this with your API route or a form service. */}
              <form
                action={`mailto:${BRAND.email}`}
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input required name="name" placeholder="Your name" className="rounded-xl" />
                  <Input required type="email" name="email" placeholder="Email" className="rounded-xl" />
                </div>
                <Input name="company" placeholder="Company (optional)" className="rounded-xl" />
                <Input name="timeline" placeholder="Ideal timeline (e.g. 3–4 weeks)" className="rounded-xl" />
                <Textarea required name="project" placeholder="Brief: users, problem, desired outcome" className="rounded-xl min-h-[130px]" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-zinc-500">Work‑for‑hire • NDA friendly • Remote‑first</div>
                  <Button type="submit" className="rounded-2xl">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200/70 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-600">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#services" className="text-zinc-700 hover:text-zinc-900">Services</a>
            <a href="#work" className="text-zinc-700 hover:text-zinc-900">Work</a>
            <a href="#process" className="text-zinc-700 hover:text-zinc-900">Process</a>
            <a href="#faqs" className="text-zinc-700 hover:text-zinc-900">FAQs</a>
            <a href="#contact" className="text-zinc-700 hover:text-zinc-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * QUICK SETUP (copy into README if useful)
 * 1) Create Next app: `npx create-next-app@latest ai-contracting --ts --eslint --src-dir --app --tailwind`.
 * 2) shadcn/ui: `npx shadcn@latest init -d` then `npx shadcn@latest add button card badge input textarea`.
 * 3) Install deps: `npm i framer-motion lucide-react`.
 * 4) Tailwind already set up by the Next starter. Ensure `globals.css` has base/components/utilities.
 * 5) Add your fonts in `app/layout.tsx` and set `<body className="antialiased">`.
 * 6) Replace mailto form with an API route when ready (e.g. `/app/api/contact/route.ts`).
 */
