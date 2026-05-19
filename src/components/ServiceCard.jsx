export default function ServiceCard({ service, index }) {
  return (
    <article className="border border-white/10 bg-white/[0.025] p-6 transition duration-200 hover:border-white/20 hover:bg-white/[0.045]">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-copper">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-5 text-2xl font-semibold text-bone">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-steel">{service.summary}</p>
      <div className="mt-7">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Client gets</p>
        <ul className="mt-4 space-y-3">
          {service.gets.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-steel" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 border-t border-white/10 pt-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Best for</p>
        <p className="mt-3 text-sm leading-7 text-steel">{service.forWhom}</p>
      </div>
    </article>
  );
}
