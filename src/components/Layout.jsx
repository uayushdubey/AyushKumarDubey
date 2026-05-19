import { NavLink, Outlet } from 'react-router-dom';
import { bookingUrl, navItems } from '../data/site.js';
import ButtonLink from './ButtonLink.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between gap-6">
          <NavLink className="group flex items-center gap-3" to="/" aria-label="Ayush Kumar Dubey home">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/12 bg-white/[0.04] font-mono text-xs font-semibold text-signal">
              AK
            </span>
            <span className="hidden text-sm font-semibold text-bone sm:block">Ayush Kumar Dubey</span>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm transition ${
                    isActive ? 'bg-white/[0.06] text-bone' : 'text-steel hover:bg-white/[0.04] hover:text-bone'
                  }`
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a className="hidden text-sm font-medium text-steel transition hover:text-bone sm:inline-flex" href="mailto:work.ayushkumardubey@gmail.com">
              Email
            </a>
            <ButtonLink href={bookingUrl} className="min-h-10 px-4 py-2">
              Book a Call
            </ButtonLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10">
        <div className="container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold text-bone">Ayush Kumar Dubey</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-steel">
              Backend and ML engineering for teams that need reliable systems, not fragile experiments.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-steel">
            {navItems.map((item) => (
              <NavLink className="transition hover:text-bone" key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
