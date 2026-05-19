import CTASection from '../components/CTASection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const principles = [
  {
    title: 'Systems over scripts',
    body: 'A script can prove an idea. A system has boundaries, failure behavior, observability, and a path to being maintained by someone other than its original author.',
  },
  {
    title: 'Correctness over speed',
    body: 'Shipping fast only matters when the thing shipped can be trusted. I care about data integrity, explicit contracts, idempotency, and code paths that are easy to reason about.',
  },
  {
    title: 'Architecture that earns its complexity',
    body: 'I prefer simple primitives until the problem demands more. When complexity is necessary, it should buy reliability, clarity, or scale.',
  },
  {
    title: 'AI as infrastructure, not decoration',
    body: 'LLM features need evaluation, versioning, retrieval quality, and fallbacks. The model is only one part of the production system.',
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            eyebrow="About"
            title="I think in systems, constraints, and failure modes."
            description="I am Ayush Kumar Dubey, a Backend & ML Engineer focused on production-grade backend systems and AI architectures. My work starts where demo code stops: with reliability, scale, and the parts of software that have to keep working when usage gets messy."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow">Engineering philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold text-bone">
              Useful software is not just built. It is made dependable.
            </h2>
          </div>
          <div className="grid gap-5">
            {principles.map((principle) => (
              <article className="border border-white/10 bg-white/[0.025] p-6" key={principle.title}>
                <h3 className="text-xl font-semibold text-bone">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="border-y border-white/10 py-12">
            <p className="eyebrow">How I work</p>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <p className="text-lg leading-8 text-bone">
                I ask what can go wrong before deciding what to build.
              </p>
              <p className="text-lg leading-8 text-bone">
                I make technical tradeoffs visible so teams can make better decisions.
              </p>
              <p className="text-lg leading-8 text-bone">
                I value ownership, clean interfaces, and systems that can be operated under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
