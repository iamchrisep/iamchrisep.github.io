import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            {/*<SiteHeader />*/}
            <main
                id="main-content"
                className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-6 md:pb-28 md:pt-10"
            >
                <HeroSection />
                <ProjectsSection />
                {/*<AboutSection />*/}
                {/*<ExpertiseSection />*/}
                {/*<ExperienceSection />*/}
                <ContactSection />
            </main>
            <SiteFooter />
        </>
    );
}
