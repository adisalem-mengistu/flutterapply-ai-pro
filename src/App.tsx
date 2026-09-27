import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquareText,
  Search,
  Sparkles,
  Star,
  Target,
  UserCircle2,
} from 'lucide-react';
import { jobs, leads, profile } from './data/mockData';

function App() {
  const [searchTerm, setSearchTerm] = useState('Flutter');
  const [activeTab, setActiveTab] = useState<'jobs' | 'leads' | 'profile' | 'composer'>('jobs');

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const term = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-soft backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/40">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">AI job search</p>
              <h1 className="text-xl font-semibold text-white">FlutterApply AI Pro</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ['jobs', 'Job Generator'],
              ['leads', 'Lead Finder'],
              ['profile', 'My Profile'],
              ['composer', 'Email Composer'],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as typeof activeTab)}
                className={`rounded-xl px-3 py-2 text-sm transition ${
                  activeTab === key
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button className="rounded-xl border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200 transition hover:bg-brand-500 hover:text-white">
            Sign in
          </button>
        </header>

        <main className="space-y-6">
          <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 p-6 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-200 ring-1 ring-brand-500/30">
                  Live search grounded in Google data
                </div>
              </div>

              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find hidden Flutter roles and contact the right people faster.
              </h2>

              <p className="mt-4 max-w-xl text-base text-slate-300">
                Discovery, lead generation, and cold-pitch drafting in one powerful workflow.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 px-3 py-3">
                  <Search size={18} className="text-slate-400" />
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="Search roles, skills, companies..."
                  />
                </div>
                <button className="rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                  Generate matches
                </button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Roles found', value: '214' },
                  { label: 'Recruiter leads', value: '46' },
                  { label: 'Reply rate', value: '31%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">AI profile fit</p>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                  Strong match
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
                  <UserCircle2 className="mt-0.5 text-brand-300" size={22} />
                  <div>
                    <p className="font-medium text-white">{profile.name}</p>
                    <p className="text-sm text-slate-400">{profile.yearsExperience}+ years Flutter experience</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
                  <p className="mb-2 text-sm font-medium text-slate-200">Core stack</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.stack.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
                  <p className="mb-2 text-sm font-medium text-slate-200">AI summary</p>
                  <p className="text-sm leading-6 text-slate-300">{profile.bio}</p>
                </div>
              </div>
            </aside>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-brand-300" size={18} />
                  <h3 className="text-lg font-semibold text-white">Direct Job Generator</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <CheckCircle2 size={14} />
                  AI matched
                </div>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <article key={job.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                          <span className="rounded-full bg-brand-500/15 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-200">
                            {job.match}% match
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Building2 size={14} />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {job.location}
                          </div>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
                        Draft email <ArrowRight size={14} />
                      </button>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">{job.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-col gap-3 border-t border-slate-800 pt-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req) => (
                          <span key={req} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
                            {req}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Star size={14} className="text-amber-400" />
                        {job.salary} · {job.source}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="text-brand-300" size={18} />
                  <h3 className="text-lg font-semibold text-white">Lead Prospector</h3>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-300">
                  Infinity Mode
                </span>
              </div>

              <div className="space-y-3">
                {leads.map((lead) => (
                  <div key={lead.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-white">{lead.name}</p>
                        <p className="text-sm text-slate-400">{lead.role}</p>
                      </div>
                      <span className="rounded-full bg-brand-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-200">
                        {lead.strategy}
                      </span>
                    </div>

                    <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300">
                      {lead.snippet}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{lead.company}</span>
                      <span>{lead.source}</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-900 p-2 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5"><Mail size={12} /> {lead.email}</span>
                      <button className="font-medium text-brand-300">Copy</button>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center gap-2">
                <UserCircle2 className="text-brand-300" size={18} />
                <h3 className="text-lg font-semibold text-white">Developer Profile</h3>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Years of experience</label>
                  <input
                    defaultValue={profile.yearsExperience}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Bio</label>
                  <textarea
                    defaultValue={profile.bio}
                    rows={5}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white focus:border-brand-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Technical stack</label>
                  <div className="flex flex-wrap gap-2">
                    {profile.stack.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center gap-2">
                <MessageSquareText className="text-brand-300" size={18} />
                <h3 className="text-lg font-semibold text-white">AI Cold-Pitch Engine</h3>
              </div>

              <div className="mt-4 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">To</p>
                  <p className="text-sm text-white">maya@novastacklabs.com</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Subject</p>
                  <p className="text-sm text-white">Senior Flutter Engineer application</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm leading-7 text-slate-300">
                  Hi Maya, I&apos;m Adebayo and I&apos;ve spent the last 4 years building performant Flutter products with BLoC, Riverpod, and Firebase. I noticed your team is looking for a Senior Flutter Engineer to own mobile architecture and cross-platform experiences. My background in fintech, performance tuning, and product thinking would let me contribute quickly while elevating the app experience for users.
                  <br />
                  <br />
                  I’d love to share a few examples of recent projects and discuss how I can help accelerate the mobile roadmap.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
