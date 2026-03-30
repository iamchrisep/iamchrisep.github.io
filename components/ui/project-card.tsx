import { ButtonLink } from "@/components/ui/button-link";

type Props = {
    title: string;
    description: string;
    highlights: readonly string[];
    stack: readonly string[];
    liveUrl: string;
    repoUrl: string;
};

export function ProjectCard({ title, description, highlights, stack, liveUrl, repoUrl }: Props) {
    return (
        <article className="project-card glass-panel">
            <div className="relative z-10 space-y-5">
                <div className="space-y-2">
                    <h3 className="project-card-title text-2xl font-bold">{title}</h3>
                    <p className="m-0 text-sm leading-[1.5] text-muted">{description}</p>
                </div>

                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                    {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>

                <ul
                    className="flex list-none flex-wrap gap-2 p-0"
                    aria-label={`${title} technology stack`}
                >
                    {stack.map((item, index) => (
                        <li
                            key={item}
                            className={
                                index === 0 ? "tag tag-green" : index === 1 ? "tag tag-warm" : "tag"
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                    <ButtonLink
                        href={liveUrl}
                        variant="primary"
                        external
                        ariaLabel={`Open live demo for ${title}`}
                    >
                        Live Demo
                    </ButtonLink>
                    <ButtonLink
                        href={repoUrl}
                        variant="secondary"
                        external
                        ariaLabel={`Open source code for ${title}`}
                    >
                        Source Code
                    </ButtonLink>
                </div>
            </div>
        </article>
    );
}
