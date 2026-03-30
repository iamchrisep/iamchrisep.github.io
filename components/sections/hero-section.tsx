import { ButtonLink } from "@/components/ui/button-link";
import { SITE_CONTENT } from "@/content/site-content";

export function HeroSection() {
    return (
        <section aria-labelledby="hero-title" className="section-shell mt-0">
            <div className="glass-panel glass-grid overflow-hidden rounded-[2rem] p-6 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                    <div className="relative z-10 space-y-7">
                        <div className="space-y-4">
                            <p className="text-lg font-bold uppercase text-muted">
                                {SITE_CONTENT.person.role}
                            </p>

                            <h1
                                id="hero-title"
                                className="max-w-4xl text-4xl font-bold leading-none text-foreground md:text-6xl"
                            >
                                {SITE_CONTENT.person.name}
                            </h1>

                            <p className="max-w-3xl text-xl leading-[1.5] text-foreground md:text-2xl">
                                {SITE_CONTENT.person.summary}
                            </p>

                            <p className="max-w-3xl text-base leading-[1.5] text-muted md:text-lg">
                                {SITE_CONTENT.person.supportingText}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <ButtonLink href={SITE_CONTENT.hero.primaryCta.href} variant="primary">
                                {SITE_CONTENT.hero.primaryCta.label}
                            </ButtonLink>
                            <ButtonLink
                                href={SITE_CONTENT.hero.secondaryCta.href}
                                variant="secondary"
                                external
                            >
                                {SITE_CONTENT.hero.secondaryCta.label}
                            </ButtonLink>
                            <ButtonLink href={SITE_CONTENT.hero.tertiaryCta.href} variant="ghost">
                                {SITE_CONTENT.hero.tertiaryCta.label}
                            </ButtonLink>
                        </div>

                        <div>
                            <p className="max-w-3xl text-sm leading-[1.5] text-muted md:text-base">
                                {SITE_CONTENT.person.infoText}
                            </p>
                        </div>

                        <ul
                            className="m-0 flex list-none flex-wrap gap-2 p-0"
                            aria-label="Professional focus"
                        >
                            <li className="tag tag-green">React</li>
                            <li className="tag tag-warm">Next.js</li>
                            <li className="tag tag-warm">TypeScript</li>
                            <li className="tag">Accessibility (WCAG)</li>
                            <li className="tag">Performance</li>
                        </ul>
                    </div>

                    <aside className="relative z-10 space-y-4" aria-label="Quick profile summary">
                        <div className="glass-panel-soft rounded-[1.5rem] p-5">
                            <div className="space-y-4">
                                <dl className="m-0 space-y-4">
                                    <div>
                                        <dt className="text-xs font-bold uppercase text-muted">
                                            Location
                                        </dt>
                                        <dd className="m-0 pt-1 text-sm text-foreground">
                                            {SITE_CONTENT.person.location}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-bold uppercase text-muted">
                                            Availability
                                        </dt>
                                        <dd className="m-0 pt-1 text-sm leading-[1.5] text-foreground">
                                            {SITE_CONTENT.person.availability}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                            {SITE_CONTENT.hero.metrics.map((metric, index) => (
                                <article
                                    key={metric.label}
                                    className="metric-card glass-panel-soft rounded-[1.15rem]"
                                >
                                    <p
                                        className={`m-0 text-2xl font-bold ${
                                            index % 2 === 1
                                                ? "text-[var(--copper-strong)]"
                                                : "text-[var(--green-strong)]"
                                        }`}
                                    >
                                        {metric.value}
                                    </p>
                                    <p className="m-0 pt-1 text-sm leading-[1.5] text-muted">
                                        {metric.label}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
