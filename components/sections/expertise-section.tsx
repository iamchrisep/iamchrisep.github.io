import { SectionHeading } from "@/components/ui/section-heading";
import { SkillGroup } from "@/components/ui/skill-group";
import { SITE_CONTENT } from "@/content/site-content";

export function ExpertiseSection() {
    return (
        <section id="expertise" aria-labelledby="expertise-title" className="section-shell">
            <SectionHeading id="expertise-title" title={SITE_CONTENT.expertise.title} />

            <div className="grid gap-6 lg:grid-cols-3">
                {SITE_CONTENT.expertise.groups.map((group) => (
                    <SkillGroup key={group.title} title={group.title} items={group.items} />
                ))}
            </div>
        </section>
    );
}
