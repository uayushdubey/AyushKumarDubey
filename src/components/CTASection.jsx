import { bookingUrl } from '../data/site.js';
import ButtonLink from './ButtonLink.jsx';

export default function CTASection({
  eyebrow = 'Limited availability for new projects',
  title = "If you're building something serious, we should talk.",
  description = 'I work best with teams that care about correctness, reliability, and long-term product leverage.',
}) {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="border-y border-white/10 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold text-bone sm:text-5xl">{title}</h2>
              <p className="mt-5 text-base leading-8 text-steel sm:text-lg">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={bookingUrl}>Book a 30-min call</ButtonLink>
              <ButtonLink to="/projects" variant="secondary">
                View work
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
