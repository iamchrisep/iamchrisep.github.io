import { SITE_CONTENT } from "@/content/site-content";

const NAV_ITEMS = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
    return (
        <header className="site-header">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
                <a
                    href="#main-content"
                    className="text-sm font-bold text-foreground no-underline"
                    aria-label={`Go to ${SITE_CONTENT.person.name} homepage content`}
                >
                    {SITE_CONTENT.person.shortName}
                </a>

                <nav aria-label="Primary navigation">
                    <ul className="m-0 flex list-none flex-wrap items-center gap-4 p-0 md:gap-7">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a className="nav-link" href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
