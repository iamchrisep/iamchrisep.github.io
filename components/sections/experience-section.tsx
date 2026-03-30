import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONTENT } from "@/content/site-content";

export function ExperienceSection() {
    return (
        <section aria-labelledby="experience-title" className="section-shell">
            <SectionHeading id="experience-title" title={SITE_CONTENT.experience.title} />

            <div className="grid gap-4 md:grid-cols-2">
                {SITE_CONTENT.experience.items.map((item) => (
                    <article key={item} className="glass-panel-soft rounded-[1.25rem] p-5">
                        <p className="m-0 text-base leading-[1.5] text-foreground">{item}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
