# [davidryan.info](https://www.davidryan.info)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b749e7c9-1b16-42bf-8d05-453bc919ebc7/deploy-status)](https://app.netlify.com/sites/resplendent-snickerdoodle-26040f/deploys)



This is the repo hosting my personal website. It is hosted on Netlify and built with Gatsby.

## Theme

I used a [Minimal Portfolio Theme](https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal) for this website. I made some changes to the theme to fit my needs. But it was a fantastic starting point and is loaded with tones of features, I highly recommend it.



## Blog Post Template

This is the template for the blog posts. It must be placed at the top of every blog post markdown file.
```md
---
title: 'This is an exemplary article for the blog.'
description: 'This description will be used for the article listing and search results on Google.'
date: '2021-05-28'
banner:
    src: '../../images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg'
    alt: 'First Markdown Post'
    caption: 'Photo by <u><a href="https://example.com">Example</a></u>'
categories:
    - 'Setup'
keywords:
    - 'Example'
    - 'Gatsby'
---

This will be the actual content of the article.

```


## Adding custom sections
From the theme's package, you can import the Animation and Section component, to build your own sections like.

```js
import { Section, Animation } from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
         <Page>
            <Animation type="fadeUp">
                <Section heading="This is a brand new section.">
                    <p>You can add your custom JSX here.</p>
                </Section>
            </Animation>
        </Page>
    );
}
```

### Section Props
These are the props you can pass to the Section component.
```typescript
interface SectionProps {
    anchor: string;
    heading?: string;
    additionalClasses?: string[];
    children: React.ReactNode;
}
```

### Animation Props
These are the props you can pass to the Animation component.
```typescript
type AnimationTiming = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
type AnimationFillMode = 'forwards' | 'backwards' | 'both' | 'none';
type AnimationType =
    | 'fadeIn'
    | 'fadeOut'
    | 'fadeInAndOut'
    | 'fadeUp'
    | 'fadeDown'
    | 'fadeLeft'
    | 'scaleIn'
    | 'reduceHeight'
    | 'waving-hand';

interface AnimationProps {
    children?: React.ReactNode;
    type?: AnimationType;
    timing?: AnimationTiming;
    fillMode?: AnimationFillMode;
    delay?: number;
    duration?: number;
    iterationCount?: number;
    className?: string;
    style?: React.CSSProperties;
    onAnimationEnd?: () => void;
}
```

