import ButtonLink from '../components/ButtonLink.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { bookingUrl, email } from '../data/site.js';

export default function Contact() {
  return (
    <section className="page-hero min-h-[calc(100vh-4rem)]">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="Contact"
          title="Book a 30-min call."
          description="For backend systems, AI architecture, consulting, or automation work. Send the context, the constraint, and what needs to be true after the project is done."
        />

        <div className="border border-white/10 bg-panel p-6 shadow-soft sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
            Limited availability for new projects
          </p>
          <h2 className="mt-5 text-2xl font-semibold text-bone">
            I work with teams building serious systems.
          </h2>
          <p className="mt-4 text-sm leading-7 text-steel">
            The best conversations start with a clear problem: what is being built, where the current system is weak, and what reliability or automation would unlock.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={bookingUrl}>Book a 30-min call</ButtonLink>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-bone transition hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.06]"
              href={`mailto:${email}`}
            >
              Email me
            </a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-steel">Email</p>
            <a className="mt-2 block break-words text-lg font-semibold text-bone transition hover:text-signal" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-sm text-steel">Booking</p>
            <a className="mt-2 block break-words text-lg font-semibold text-bone transition hover:text-signal" href={bookingUrl} target="_blank" rel="noreferrer">
              cal.com/ayush-kumar-dubey-gnwwiv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
