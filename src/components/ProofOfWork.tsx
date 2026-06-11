import { useRef, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { tokens, fonts } from "../tokens";

// ─── Section layout ───────────────────────────────────────────────────────────

const Section = styled.section`
  background: ${tokens.base};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeaderLeft = styled.div``;

const Eyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 400;
  color: ${tokens.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.2;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const HeaderNote = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.textSecondary};
  text-align: right;
  max-width: 180px;
  line-height: 1.6;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ placeholder?: boolean }>`
  background: ${({ placeholder }) =>
    placeholder ? tokens.purpleTint : "white"};
  border-radius: 12px;
  overflow: hidden;
  border: 0.5px solid ${tokens.border};
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const CardImage = styled.div`
  aspect-ratio: 16/9;
  background: #e8e4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardImageIcon = styled.div`
  font-family: ${fonts.display};
  font-size: 24px;
  color: rgba(145, 94, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const GalleryBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 100px;
  padding: 4px 10px;
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.02em;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  pointer-events: none;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardEyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 10px;
  color: ${tokens.purple};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`;

const CardTitle = styled.div`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  margin-bottom: 4px;
`;

const CardDesc = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textSecondary};
`;

// ─── Skills styled components ─────────────────────────────────────────────────

const SkillsBlock = styled.div`
  margin-bottom: 80px;
`;

const SkillsHeader = styled.div`
  margin-bottom: 32px;
`;

const SkillsEyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 12px;
`;

const SkillsHeadline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 400;
  color: ${tokens.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: ${tokens.dark};
  border-radius: 14px;
  padding: 24px;
`;

const CatLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 14px;
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillPill = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.07);
  border-radius: 100px;
  padding: 4px 10px;
`;

const SectionDivider = styled.div`
  border-top: 0.5px solid ${tokens.border};
  margin-bottom: 56px;
`;

const StackRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const StackLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tokens.textSecondary};
  margin-right: 4px;
`;

const StackPill = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textPrimary};
  background: ${tokens.purpleTint};
  border-radius: 100px;
  padding: 3px 10px;
`;

// ─── Skills data ──────────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "CSS-in-JS (Emotion/Styled Components)",
      "Redux",
      "React Query",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "External API integrations",
      "Payment systems & integrations",
      "Authentication & security",
    ],
  },
  {
    label: "Architecture & systems",
    skills: [
      "Full-stack & systems architecture",
      "State management",
      "Backend data modelling",
      "API design",
      "Git & version control",
    ],
  },
  {
    label: "Familiar with",
    skills: ["AWS (cloud infrastructure — currently refreshing)"],
  },
  {
    label: "Others",
    skills: [
      "Sales",
      "Team Leadership",
      "Product Marketing",
      "Critical Thinking",
    ],
  },
];

// ─── Project data ─────────────────────────────────────────────────────────────

type Project = {
  team: string;
  title: string;
  desc: string;
  image?: string;
  url?: string;
  gallery?: string[];
  placeholder?: boolean;
  stack: string[];
  type?: string;
};

const projects: Project[] = [
  {
    team: "Personal project",
    title: "Involey",
    type: "SaaS",
    desc: "I identified a gap in how small businesses track visibility and clarity. And I've built the tool to fix it.",
    image: "New Involey Mockup.jpg",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Payment Integration",
      "Redux and TanStack Query",
      "Email Architecture",
    ],
    url: "https://involey.puissantdev.tech",
  },
  {
    team: "",
    title: "Customer retention system",
    desc: "Built a restaurant customer retention system that helps businesses convert one-time visitors into repeat customers through structured digital engagement, campaign-based QR acquisition, and loyalty tracking. The system enables restaurants to collect customer data, run targeted re-engagement campaigns, and measure what drives repeat visits and revenue growth. Currently in use by over 5 restaurants",
    image: "Chester Fries Restaurant.png",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Messaging (SMS/Email) Integration",
      "Full Admin Dashboard",
      "Payment Integration",
    ],
  },
  {
    team: "",
    title: "Pharmacy e-commerce store",
    image: "Khapsule Pharmacy Mockup.jpg",
    desc: "Built a full e-commerce system for a pharmacy from the ground up — product catalogue, checkout flow, order management, payment integration.",
    url: "https://khapsulepharmacy.org",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Payment Integration",
      "Full Admin Dashboard",
    ],
    type: "E-commerce",
  },
  {
    team: "PuissantDev",
    title: "Construction and Engineering business website",
    type: "Web",
    desc: "Professional web presence built to convert for a construction and engineering company.",
    stack: ["React", "CSS-in-JS"],
    url: "https://centerfieldengineering.com",
  },
  {
    team: "PuissantDev",
    title: "Naturopathy center website",
    desc: "Built a website for Puwi Health to communicate trust and expertise to a health-conscious audience.",
    image: "PuwiHealth Iphone mockup.jpg",
    stack: ["React", "CSS-in-JS"],
  },
  // {
  //   team: "1Ephraim",
  //   title: "Brand identity",
  //   desc: "PuissantDev brand logo, type, colour — built from nothing.",
  //   gallery: [
  //     "puissantdev/mockup-banner.jpg",
  //     "puissantdev/mockup-billboard.jpg",
  //     "puissantdev/mockup-brochure.jpg",
  //     "puissantdev/logo.jpg",
  //     "puissantdev/logo-mockup.jpg",
  //   ],
  // },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProofOfWork() {
  const lbRef = useRef<ReturnType<typeof GLightbox> | null>(null);

  useEffect(() => {
    return () => {
      lbRef.current?.destroy();
    };
  }, []);

  const openGallery = useCallback((images: string[]) => {
    lbRef.current?.destroy();
    lbRef.current = GLightbox({
      // GLightbox types incorrectly declare elements as [] (empty tuple)
      elements: images.map((src, i) => ({
        href: `/images/work/${src}`,
        type: "image",
        alt: `Brand identity — image ${i + 1}`,
      })) as unknown as [],
      touchNavigation: true,
      keyboardNavigation: true,
      closeButton: true,
      openEffect: "fade",
      closeEffect: "fade",
      slideEffect: "fade",
      zoomable: false,
      draggable: false,
    });
    lbRef.current.open();
  }, []);

  return (
    <Section id="proof">
      <Inner>
        <SkillsBlock>
          <SkillsHeader>
            <SkillsEyebrow>Skills &amp; Stack</SkillsEyebrow>
            <SkillsHeadline>What I build with.</SkillsHeadline>
          </SkillsHeader>
          <SkillsGrid>
            {skillCategories.map((cat) => (
              <SkillCard key={cat.label}>
                <CatLabel>{cat.label}</CatLabel>
                <PillRow>
                  {cat.skills.map((s) => (
                    <SkillPill key={s}>{s}</SkillPill>
                  ))}
                </PillRow>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsBlock>

        <SectionDivider />

        <HeaderRow>
          <HeaderLeft>
            <Eyebrow>Proof of work</Eyebrow>
            <Headline>
              The work speaks for <em>itself.</em>
            </Headline>
          </HeaderLeft>
          <HeaderNote>A few things I've built</HeaderNote>
        </HeaderRow>

        <Grid>
          {projects.map((p) => {
            const hasGallery = Boolean(p.gallery);
            const hasUrl = Boolean(p.url);

            const handleClick = () => {
              if (hasGallery) openGallery(p.gallery!);
              else if (hasUrl) window.open(p.url, "_blank");
            };

            return (
              <div key={p.title} onClick={handleClick}>
                <Card placeholder={p.placeholder}>
                  <CardImage>
                    {p.image && (
                      <img src={`/images/work/${p.image}`} alt={p.title} />
                    )}
                    {hasGallery ? (
                      <GalleryBadge>View images →</GalleryBadge>
                    ) : (
                      <CardImageIcon>{p.placeholder ? "+" : "↗"}</CardImageIcon>
                    )}
                  </CardImage>
                  <CardBody>
                    <CardEyebrow>{p.type}</CardEyebrow>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDesc>{p.desc}</CardDesc>
                    {p.stack.length > 0 && (
                      <StackRow>
                        <StackLabel>Stack</StackLabel>
                        {p.stack.map((s) => (
                          <StackPill key={s}>{s}</StackPill>
                        ))}
                      </StackRow>
                    )}
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
}
