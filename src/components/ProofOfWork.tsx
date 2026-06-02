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
  background: ${({ placeholder }) => (placeholder ? tokens.purpleTint : "white")};
  border-radius: 12px;
  overflow: hidden;
  border: 0.5px solid ${tokens.border};
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

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

const FooterNote = styled.p`
  text-align: center;
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.textSecondary};
  margin-top: 24px;
`;

// ─── Project data ─────────────────────────────────────────────────────────────

type Project = {
  team: string;
  title: string;
  desc: string;
  image?: string;
  url?: string;
  gallery?: string[];
  placeholder?: boolean;
};

const projects: Project[] = [
  {
    team: "PuissantDev",
    title: "Restaurant digital system",
    desc: "Full digital infrastructure from zero.",
    image: "Chester Fries Restaurant.png",
  },
  {
    team: "PuissantDev",
    title: "Pharmacy e-commerce store",
    image: "Khapsule Pharmacy Mockup.jpg",
    desc: "Custom store, checkout, order management.",
    url: "https://khapsulepharmacy.org",
  },
  {
    team: "PuissantDev",
    title: "Naturopathy center website",
    desc: "Built to communicate trust and expertise.",
  },
  {
    team: "1Ephraim",
    title: "SaaS landing page",
    desc: "Professional web presence built to convert.",
    image: "pigby.jpg",
    url: "https://pigby.io",
  },
  {
    team: "1Ephraim",
    title: "Brand identity",
    desc: "PuissantDev brand logo, type, colour — built from nothing.",
    gallery: [
      "puissantdev/mockup-banner.jpg",
      "puissantdev/mockup-billboard.jpg",
      "puissantdev/mockup-brochure.jpg",
      "puissantdev/logo.jpg",
      "puissantdev/logo-mockup.jpg",
    ],
  },
  {
    team: "15 Builds",
    title: "15 Builds Series — in progress",
    desc: "New work added every Friday.",
    placeholder: true,
  },
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
        <HeaderRow>
          <HeaderLeft>
            <Eyebrow>Proof of work</Eyebrow>
            <Headline>
              The work speaks for <em>itself.</em>
            </Headline>
          </HeaderLeft>
          <HeaderNote>A few things we've built. Updated every Friday.</HeaderNote>
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
                    <CardEyebrow>{p.team}</CardEyebrow>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDesc>{p.desc}</CardDesc>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </Grid>

        <FooterNote>
          Every build in the 15 Builds Series lives here. Updated every Friday.
        </FooterNote>
      </Inner>
    </Section>
  );
}
