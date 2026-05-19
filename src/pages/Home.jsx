import ButtonLink from '../components/ButtonLink.jsx';
import CTASection from '../components/CTASection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SystemVisual from '../components/SystemVisual.jsx';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';
import { bookingUrl, trustSignals } from '../data/site.js';

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="container relative grid min-h-[calc(92vh-4rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="eyebrow">Backend & ML Engineer</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-normal text-bone sm:text-5xl lg:text-6xl">
              I build backend systems and AI architectures that do not fail in production.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel sm:text-xl">
              I help teams turn complex product ideas into reliable APIs, data flows, AI workflows, and automation layers that are built to survive real usage.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={bookingUrl}>Book a Call</ButtonLink>
              <ButtonLink to="/projects" variant="secondary">
                View Work
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {['Correctness', 'Scalability', 'Reliability'].map((item) => (
                <div key={item}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-steel">Designed into the system before the first deployment.</p>
                </div>
              ))}
            </div>
          </div>
          <SystemVisual />
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Engineering leverage for serious products."
            description="I work across the places where products usually break: backend contracts, AI behavior, data consistency, and operational workflows."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div className="bg-ink p-6" key={service.title}>
                <h3 className="text-lg font-semibold text-bone">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Featured work"
              title="Case studies, not thumbnails."
              description="Selected systems with problems, architecture choices, and the product reason behind the engineering."
            />
            <ButtonLink to="/projects" variant="secondary" className="sm:mb-1">
              All projects
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard compact key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <div className="bg-panel p-7" key={signal.metric}>
                <p className="text-xl font-semibold text-bone">{signal.metric}</p>
                <p className="mt-4 text-sm leading-7 text-steel">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
