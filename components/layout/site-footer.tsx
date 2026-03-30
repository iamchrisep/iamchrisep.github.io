import { SITE_CONTENT } from "@/content/site-content";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 border-t border-[var(--border)]">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
                <p className="m-0">
                    © {year} {SITE_CONTENT.person.name}
                </p>
                <p className="m-0">{SITE_CONTENT.person.availability}</p>
            </div>
        </footer>
    );
}
