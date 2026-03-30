import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONTENT } from "@/content/site-content";

export function ContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="section-shell">
            <SectionHeading id="contact-title" title={SITE_CONTENT.contact.title} />

            <div className="glass-panel rounded-[2rem] p-6 md:p-8 space-y-5">
                <p className="text-base leading-[1.5] text-muted md:text-lg">
                    {SITE_CONTENT.contact.text}
                </p>

                <ul
                    className="m-0 grid gap-8 md:grid-cols-2 xl:grid-cols-4 md:items-start list-none gap-3 p-0"
                    aria-label="Contact links"
                >
                    {SITE_CONTENT.contact.links.map((link, index) => {
                        const external =
                            link.href.startsWith("http") || link.href.startsWith("/CV");
                        return (
                            <li key={link.label}>
                                <ButtonLink
                                    href={link.href}
                                    variant={
                                        index === 0
                                            ? "primary"
                                            : index === 3
                                              ? "ghost"
                                              : "secondary"
                                    }
                                    external={external}
                                    className="contact-button"
                                >
                                    {link.label}
                                </ButtonLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
