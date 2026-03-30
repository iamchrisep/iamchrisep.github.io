import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONTENT } from "@/content/site-content";

export function AboutSection() {
    return (
        <section id="about" aria-labelledby="about-title" className="section-shell">
            <SectionHeading id="about-title" title={SITE_CONTENT.about.title} />

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="glass-panel rounded-[1.7rem] p-6 md:p-8">
                    <div className="space-y-4">
                        {SITE_CONTENT.about.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className="m-0 max-w-3xl text-base leading-[1.5] text-muted md:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <aside
                    className="glass-panel-soft rounded-[1.5rem] p-6"
                    aria-label="Quick profile details"
                >
                    <dl className="m-0 space-y-5">
                        {SITE_CONTENT.about.profile.map((item) => (
                            <div key={item.label}>
                                <dt className="text-xs font-bold uppercase text-muted">
                                    {item.label}
                                </dt>
                                <dd className="m-0 pt-1 text-sm leading-[1.5] text-foreground">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </aside>
            </div>
        </section>
    );
}
