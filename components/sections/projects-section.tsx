import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONTENT } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export function ProjectsSection() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="section-shell">
            <SectionHeading id="projects-title" title={SITE_CONTENT.projects.title} />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {SITE_CONTENT.projects.items.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        highlights={project.highlights}
                        stack={project.stack}
                        liveUrl={project.liveUrl}
                        repoUrl={project.repoUrl}
                    />
                ))}
            </div>

            <div className="mt-7 flex justify-center">
                <ButtonLink
                    href={SITE_CONTENT.projects.viewAll.url}
                    variant="ghost"
                    external
                    ariaLabel={`Open Github profile`}
                >
                    {SITE_CONTENT.projects.viewAll.label}
                </ButtonLink>
            </div>
        </section>
    );
}
