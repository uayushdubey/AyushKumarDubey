import CTASection from '../components/CTASection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Focused engineering offers for high-leverage work."
            description="I do not sell hours. I sell clear systems, reliable execution, and architecture decisions that keep paying off after launch."
          />
          <div className="border border-white/10 bg-white/[0.025] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
              Engagement filter
            </p>
            <p className="mt-4 text-lg leading-8 text-bone">
              Best fit: teams building serious software with real users, operational pressure, or AI features that need predictable behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.title} service={service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Have a serious build on the roadmap?"
        description="Limited availability for new projects. I prioritize teams with clear ownership, meaningful constraints, and a need for dependable engineering."
      />
    </>
  );
}
