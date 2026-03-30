export const SITE_CONTENT = {
    person: {
        name: "Krystsina Bahdanava",
        shortName: "KB",
        role: "Senior Frontend Engineer",
        summary:
            "Building performant, accessible, and maintainable product interfaces with React, Next.js, and TypeScript.",
        supportingText:
            "Focused on scalable frontend architecture, UI quality, accessibility, and product-minded implementation.",
        infoText:
            "For more detailed information about skills, experience, education, etc., please review my LinkedIn.",
        location: "Gdansk, Poland",
        availability:
            "Open to remote roles across Europe and hybrid opportunities in Tricity (Gdansk / Gdynia / Sopot).",
        email: "krystsina.bahdanava@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/iamchrisep/",
        githubUrl: "https://github.com/iamchrisep",
        cvUrl: "/cv.pdf",
    },
    hero: {
        primaryCta: { label: "View Projects", href: "#projects" },
        secondaryCta: { label: "LinkedIn", href: "https://www.linkedin.com/in/iamchrisep/" },
        tertiaryCta: { label: "Download CV", href: "/cv.pdf" },
        metrics: [
            { value: "9+", label: "Years in software development" },
            { value: "2017", label: "Frontend specialization since" },
            { value: "EU", label: "Remote roles across Europe" },
            { value: "A11Y", label: "Accessibility and UI quality focus" },
        ],
    },
    projects: {
        title: "Selected Projects",
        items: [
            {
                title: "Product Catalog Filter Engine",
                description:
                    "A faceted catalog demo with URL-driven state, client-side filtering, pagination, and static deployment on GitHub Pages.",
                highlights: [
                    "URL-synced filters and shareable state",
                    "Client-side query and pagination logic",
                    "Accessible interactions and resilient UI states",
                ],
                stack: ["Next.js", "TypeScript", "Tailwind", "Zod"],
                liveUrl: "https://iamchrisep.github.io/product-catalog-filter-engine/",
                repoUrl: "https://github.com/iamchrisep/product-catalog-filter-engine",
            },
            // {
            //     title: "Project Two",
            //     description:
            //         "Replace this card with your next portfolio project. Keep the summary outcome-focused and concise.",
            //     highlights: [
            //         "Replace with project highlight",
            //         "Replace with project highlight",
            //         "Replace with project highlight",
            //     ],
            //     stack: ["Next.js", "TypeScript"],
            //     liveUrl: "https://iamchrisep.github.io/project2",
            //     repoUrl: "https://github.com/iamchrisep/project2",
            // },
            // {
            //     title: "Project Three",
            //     description:
            //         "Use this slot for another strong case study. Prioritize projects that demonstrate product thinking and technical depth.",
            //     highlights: [
            //         "Replace with project highlight",
            //         "Replace with project highlight",
            //         "Replace with project highlight",
            //     ],
            //     stack: ["Next.js", "TypeScript"],
            //     liveUrl: "https://iamchrisep.github.io/project3",
            //     repoUrl: "https://github.com/iamchrisep/project3",
            // },
        ],
        viewAll: {
            label: "View All Projects on Github",
            url: "https://github.com/iamchrisep?tab=repositories",
        },
    },
    about: {
        title: "About",
        paragraphs: [
            "Frontend engineer with 9+ years of software development experience and a strong focus on modern product interfaces.",
            "I work primarily with React, Next.js, TypeScript, and Tailwind CSS, with particular interest in accessibility, performance, and maintainable UI architecture.",
            "I am most interested in roles where frontend work is treated as product engineering rather than pure implementation.",
        ],
        profile: [
            { label: "Role", value: "Senior Frontend Engineer" },
            { label: "Location", value: "Poland" },
            {
                label: "Availability",
                value: "Open to remote roles across Europe and hybrid opportunities in Tricity.",
            },
        ],
    },
    expertise: {
        title: "Core Expertise",
        groups: [
            {
                title: "Frontend Engineering",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
                title: "UI Quality",
                items: ["Accessibility", "Performance", "Responsive UI", "UX details"],
            },
            {
                title: "Architecture",
                items: [
                    "Reusable components",
                    "State modeling",
                    "Scalable structure",
                    "Maintainable code",
                ],
            },
        ],
    },
    experience: {
        title: "Experience Snapshot",
        items: [
            "9+ years in software development",
            "Frontend specialization since 2017",
            "Focus on product UI, accessibility, and maintainable architecture",
            "Available for Senior and strong Mid frontend roles",
        ],
    },
    contact: {
        title: "Contact",
        text: "Interested in working together or discussing a frontend role? The fastest way to reach me is through LinkedIn or email.",
        links: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/iamchrisep/" },
            { label: "Email", href: "mailto:krystsina.bahdanava@gmail.com" },
            { label: "GitHub", href: "https://github.com/iamchrisep" },
            { label: "Download CV", href: "/cv.pdf" },
        ],
    },
} as const;
