import React from "react";
import { ContactSection, Page, Section, Animation, Seo } from 'gatsby-theme-portfolio-minimal';

export default function ContactPage() {
    return (
        <>
        <Seo title="Contact" useTitleTemplate={true} noIndex={true} />
        <Page>
            <ContactSection sectionId="connect" heading="Connect with me!" />
            <Section heading="This is a brand new section.">
                <p>You can add your custom JSX here.</p>
            </Section>
        </Page>
        </>
    );
}