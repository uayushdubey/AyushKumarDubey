const nodes = [
  ['Client apps', 'REST / events'],
  ['Backend core', 'Auth, domain logic, queues'],
  ['AI layer', 'RAG, agents, evaluation'],
  ['Data layer', 'Postgres, Redis, object storage'],
  ['Operations', 'Logs, metrics, deployment'],
];

export default function SystemVisual() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-panel p-5 shadow-soft">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-signal">system map</p>
          <p className="mt-2 text-sm text-steel">Reliability before reach</p>
        </div>
        <div className="rounded-sm border border-signal/25 px-2 py-1 font-mono text-xs text-signal">
          online
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        {nodes.map(([title, detail], index) => (
          <div
            className="group grid grid-cols-[auto_1fr] gap-4 border border-white/10 bg-white/[0.025] p-4 transition duration-200 hover:border-signal/30 hover:bg-white/[0.045]"
            key={title}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 font-mono text-xs text-copper">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="text-sm font-semibold text-bone">{title}</p>
              <p className="mt-1 text-sm text-steel">{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {['Correct', 'Observable', 'Scalable'].map((item) => (
          <div className="bg-white/[0.03] px-3 py-3 text-center text-xs font-medium text-steel" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
