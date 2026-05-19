export const projects = [
  {
    title: 'Distributed Rate Limiter',
    slug: 'distributed-rate-limiter',
    type: 'Infrastructure',
    featured: true,
    problem:
      'API traffic needs predictable control across instances. Local counters are simple, but they fail when requests are distributed across services.',
    built:
      'A distributed rate-limiting service that keeps request admission consistent across nodes and protects downstream systems from abuse or accidental spikes.',
    architecture:
      'Token bucket and sliding-window strategies backed by shared state, atomic updates, service-level policies, and clear rejection semantics for client applications.',
    stack: ['Backend architecture', 'Redis', 'Atomic counters', 'API middleware', 'Distributed systems'],
    outcome:
      'A reusable infrastructure primitive for enforcing limits at the edge before instability reaches the core application.',
  },
  {
    title: 'EHR System (Oralytics)',
    slug: 'ehr-system-oralytics',
    type: 'Healthcare systems',
    featured: true,
    problem:
      'Clinical workflows need structured records, predictable access patterns, and reliable data capture without making the product feel heavy.',
    built:
      'A healthcare-oriented records system for oral health workflows, with patient data, visit history, and operational views organized around real usage.',
    architecture:
      'Role-aware backend modules, normalized clinical entities, API-first flows, and data structures designed for auditability and future analytics.',
    stack: ['Django/FastAPI patterns', 'Relational data modeling', 'REST APIs', 'Auth', 'Healthcare workflows'],
    outcome:
      'A more dependable foundation for clinical record handling, reporting, and workflow expansion.',
  },
  {
    title: 'Prompt Version Control',
    slug: 'prompt-version-control',
    type: 'AI infrastructure',
    featured: false,
    problem:
      'Prompt changes can silently alter product behavior. Without versioning, teams cannot reliably debug, compare, or roll back LLM outputs.',
    built:
      'A prompt management layer for tracking versions, metadata, evaluation notes, and changes across LLM-powered workflows.',
    architecture:
      'Versioned prompt records, structured change history, environment-aware usage, and a workflow for comparing behavior across iterations.',
    stack: ['LLM systems', 'Prompt operations', 'Versioning', 'Evaluation workflow', 'Developer tooling'],
    outcome:
      'LLM behavior becomes easier to inspect, reproduce, and improve without relying on memory or scattered documents.',
  },
  {
    title: 'Automation Agent',
    slug: 'automation-agent',
    type: 'Workflow automation',
    featured: false,
    problem:
      'Repeated operational tasks drain engineering and business time when they depend on manual handoffs between tools.',
    built:
      'An automation agent that coordinates multi-step workflows, calls external services, and keeps the operator in control of important decisions.',
    architecture:
      'Tool-driven execution, task state tracking, API integrations, validation checkpoints, and logs for reviewing what the agent did.',
    stack: ['Agents', 'API integrations', 'Task orchestration', 'Workflow state', 'Operational tooling'],
    outcome:
      'Less manual coordination, clearer process visibility, and a practical automation layer that can evolve with the business.',
  },
];
