import CTASection from '../components/CTASection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            eyebrow="Projects"
            title="Systems built around real constraints."
            description="Every project here is framed as a system: the problem it solves, what was built, how it is structured, and why that structure matters."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a system that can handle real users?"
        description="Bring the product goal, constraints, and failure modes. I will help turn them into an architecture that can ship."
      />
    </>
  );
}
