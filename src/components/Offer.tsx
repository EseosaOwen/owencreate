import { useRef, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { tokens, fonts } from "../tokens";

const Section = styled.section`
  background: ${tokens.base};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 56px;
`;

const Eyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 16px;
`;

const Headline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  color: ${tokens.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.2;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  border: 0.5px solid ${tokens.border};
  padding: 28px 32px;

  @media (max-width: 600px) {
    padding: 24px 20px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 12px;
`;

const CardTeam = styled.div`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tokens.purple};
`;

const TypeTag = styled.div`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 500;
  color: ${tokens.textSecondary};
  background: ${tokens.purpleTint};
  border-radius: 100px;
  padding: 3px 10px;
  white-space: nowrap;
`;

const CardName = styled.h3`
  font-family: ${fonts.display};
  font-size: clamp(18px, 2.5vw, 22px);
  font-weight: 400;
  color: ${tokens.textPrimary};
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

const CardDesc = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.8;
  color: ${tokens.textSecondary};
  margin-bottom: 20px;
`;

const StackRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
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

const CardLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.purple};
  cursor: pointer;
  transition: opacity 0.15s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

type Project = {
  team: string;
  name: string;
  type: string;
  problem: string;
  stack: string[];
  url?: string;
  image?: string;
};

const projects: Project[] = [
  {
    team: "Personal project",
    name: "Involey",
    type: "SaaS — In development",
    problem:
      "I identified a gap in how small businesses track visibility and clarity. I'm building the tool to fix it. Currently in active development.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    url: "https://involey.puissantdev.tech",
  },
  {
    team: "PuissantDev",
    name: "Pharmacy e-commerce store",
    type: "E-commerce",
    problem:
      "Built a full e-commerce system for a pharmacy from the ground up — product catalogue, checkout flow, order management, payment integration.",
    stack: ["React", "Node.js", "MongoDB", "Payment systems"],
    url: "https://khapsulepharmacy.org",
    image: "Khapsule Pharmacy Mockup.jpg",
  },
  {
    team: "PuissantDev",
    name: "Restaurant digital system",
    type: "Custom digital system",
    problem:
      "Built a custom digital infrastructure for a restaurant — ordering system, customer retention tools, tailored specifically to the hospitality niche.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "Chester Fries Restaurant.png",
  },
  {
    team: "PuissantDev",
    name: "Real estate business website",
    type: "Web",
    problem:
      "Professional web presence built to convert for a property company.",
    stack: ["React", "CSS"],
  },
  {
    team: "PuissantDev",
    name: "Naturopathy center website",
    type: "Web",
    problem:
      "Built to communicate trust and expertise to a health-conscious audience.",
    stack: ["React", "CSS"],
  },
  {
    team: "1Ephraim",
    name: "SaaS landing page",
    type: "Landing page",
    problem: "High-converting landing page for an early-stage SaaS product.",
    stack: ["React", "TypeScript", "Tailwind"],
    url: "https://pigby.io",
    image: "pigby.jpg",
  },
];

export default function Offer() {
  const lbRef = useRef<ReturnType<typeof GLightbox> | null>(null);

  useEffect(() => {
    return () => {
      lbRef.current?.destroy();
    };
  }, []);

  const openImage = useCallback((imagePath: string) => {
    lbRef.current?.destroy();
    lbRef.current = GLightbox({
      elements: [
        { href: `/images/work/${imagePath}`, type: "image" },
      ] as unknown as [],
      touchNavigation: true,
      closeButton: true,
      openEffect: "fade",
      closeEffect: "fade",
    });
    lbRef.current.open();
  }, []);

  return (
    <Section id="projects">
      <Inner>
        <Header>
          <Eyebrow>Things I've built</Eyebrow>
          <Headline>
            The work, in <em>detail.</em>
          </Headline>
        </Header>

        <ProjectList>
          {projects.map((p) => {
            const hasLink = Boolean(p.url || p.image);

            const handleLinkClick = (e: React.MouseEvent) => {
              e.preventDefault();
              if (p.url) {
                window.open(p.url, "_blank");
              } else if (p.image) {
                openImage(p.image);
              }
            };

            return (
              <Card key={p.name}>
                <CardTop>
                  <CardTeam>{p.team}</CardTeam>
                  <TypeTag>{p.type}</TypeTag>
                </CardTop>
                <CardName>{p.name}</CardName>
                <CardDesc>{p.problem}</CardDesc>
                <StackRow>
                  <StackLabel>Stack</StackLabel>
                  {p.stack.map((s) => (
                    <StackPill key={s}>{s}</StackPill>
                  ))}
                </StackRow>
                {hasLink && (
                  <CardLink href={p.url ?? "#"} onClick={handleLinkClick}>
                    View project →
                  </CardLink>
                )}
              </Card>
            );
          })}
        </ProjectList>
      </Inner>
    </Section>
  );
}
