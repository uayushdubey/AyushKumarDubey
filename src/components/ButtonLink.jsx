import { Link } from 'react-router-dom';

const baseClasses =
  'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/70';

const variants = {
  primary:
    'border border-signal/30 bg-bone text-ink hover:-translate-y-0.5 hover:bg-white hover:shadow-soft',
  secondary:
    'border border-white/12 bg-white/[0.03] text-bone hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.06]',
  ghost: 'text-steel hover:text-bone',
};

export default function ButtonLink({ children, to, href, variant = 'primary', className = '' }) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
