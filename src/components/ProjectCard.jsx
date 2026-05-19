export default function ProjectCard({ project, compact = false }) {
  return (
    <article className="group border border-white/10 bg-white/[0.025] p-6 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-sm border border-copper/30 bg-copper/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-copper">
          {project.type}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-bone">{project.title}</h3>
      <div className={compact ? 'mt-5 space-y-4' : 'mt-6 grid gap-5 lg:grid-cols-2'}>
        <CaseStudyBlock label="Problem" value={project.problem} />
        <CaseStudyBlock label="Built" value={project.built} />
        {!compact ? <CaseStudyBlock label="Architecture" value={project.architecture} /> : null}
        {!compact ? <CaseStudyBlock label="Outcome" value={project.outcome} /> : null}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span className="rounded-sm border border-white/10 px-2.5 py-1 text-xs text-steel" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function CaseStudyBlock({ label, value }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{label}</p>
      <p className="mt-2 text-sm leading-7 text-steel">{value}</p>
    </div>
  );
}
