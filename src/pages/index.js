import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section,
  Animation
  // Button, // Don't have access to this component
  // ButtonType, 
} from "gatsby-theme-portfolio-minimal";


export default function IndexPage() {
  return (
    <>
      <Seo title="davidryan.info" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ArticlesSection sectionId="articles" heading="Latest Medium Articles" sources={['Medium']} />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/* <Section>
        <Button
                            type='link'
                            externalLink={true}
                            url='/blog'
                            label='test'
                        />
        </Section> */}
        <ContactSection sectionId="connect" heading="Connect with me!" />
      </Page>
    </>
  );
}
