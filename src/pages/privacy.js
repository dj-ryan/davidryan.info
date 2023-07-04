import React from "react";
import { LegalSection, Page, Section, Seo } from "gatsby-theme-portfolio-minimal";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
        <Section heading="This is a brand new section.">
                    <p>You can add your custom JSX here.</p>
        </Section>
      </Page>
    </>
  );
}
