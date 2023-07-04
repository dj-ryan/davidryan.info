import React from "react";
import { HeroSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
        <Page>
            <HeroSection sectionId="hero" />
            <Section heading="This is a brand new section.">
                <p>You can add your custom JSX here.</p>
            </Section>
        </Page>
        </>
    );
}
