import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { tokens, fonts } from "../tokens";

// ─── Keyframes ────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const imgFade = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

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

// ─── Lightbox ─────────────────────────────────────────────────────────────────

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease;
`;

const LightboxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  max-width: calc(100vw - 120px);
  max-height: calc(100vh - 80px);
  overflow: hidden;

  @media (max-width: 600px) {
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 80px);
  }
`;

const LightboxImg = styled.img`
  max-width: min(820px, calc(100vw - 120px));
  max-height: calc(100vh - 160px);
  object-fit: contain;
  display: block;
  border-radius: 4px;
  animation: ${imgFade} 0.15s ease;

  @media (max-width: 600px) {
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 160px);
  }
`;

const LightboxPlaceholder = styled.div`
  width: min(820px, calc(100vw - 120px));
  height: min(500px, calc(100vh - 200px));
  background: rgba(145, 94, 255, 0.05);
  border: 0.5px solid rgba(145, 94, 255, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${imgFade} 0.15s ease;

  @media (max-width: 600px) {
    width: calc(100vw - 32px);
    height: min(300px, calc(100vh - 200px));
  }
`;

const PlaceholderLabel = styled.div`
  font-family: ${fonts.display};
  font-size: 14px;
  font-style: italic;
  color: rgba(145, 94, 255, 0.3);
`;

const arrowStyle = `
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26px;
  color: rgba(255, 255, 255, 0.35);
  background: none;
  padding: 16px 20px;
  line-height: 1;
  transition: color 0.15s ease;
  z-index: 1001;
  font-family: ${fonts.body};

  &:hover {
    color: white;
  }
`;

const ArrowLeft = styled.button`
  ${arrowStyle}
  left: 8px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRight = styled.button`
  ${arrowStyle}
  right: 8px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 16px;
  right: 20px;
  font-size: 22px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.35);
  background: none;
  padding: 8px 10px;
  transition: color 0.15s ease;
  z-index: 1001;
  font-family: ${fonts.body};

  &:hover {
    color: white;
  }

  @media (max-width: 600px) {
    top: 12px;
    right: 12px;
  }
`;

const MobileArrowRow = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }
`;

const MobileArrowBtn = styled.button`
  font-size: 22px;
  color: rgba(255, 255, 255, 0.35);
  background: none;
  padding: 8px 16px;
  line-height: 1;
  transition: color 0.15s ease;
  font-family: ${fonts.body};

  &:hover {
    color: white;
  }
`;

function ImageOrFallback({ src, index, imgKey }: { src: string; index: number; imgKey: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <LightboxPlaceholder key={imgKey}>
        <PlaceholderLabel>Image {index + 1} — coming soon</PlaceholderLabel>
      </LightboxPlaceholder>
    );
  }

  return (
    <LightboxImg
      key={imgKey}
      src={`/images/work/${src}`}
      alt={`Brand identity — image ${index + 1}`}
      onError={() => setFailed(true)}
    />
  );
}

function Lightbox({ images, onClose }: { images: string[]; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [imgKey, setImgKey] = useState(0);

  const navigate = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + images.length) % images.length);
      setImgKey((k) => k + 1);
    },
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      else if (e.key === "ArrowRight") navigate(1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate, onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <LightboxOverlay onClick={onClose}>
      <LightboxContent onClick={(e) => e.stopPropagation()}>
        <ImageOrFallback key={imgKey} src={images[index]} index={index} imgKey={imgKey} />

        {images.length > 1 && (
          <div style={{ display: "flex", gap: 6 }}>
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  setIndex(i);
                  setImgKey((k) => k + 1);
                }}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: i === index ? "white" : "rgba(255,255,255,0.22)",
                  transition: "background 0.15s ease",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <MobileArrowRow>
            <MobileArrowBtn
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous image"
            >
              ←
            </MobileArrowBtn>
            <MobileArrowBtn
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next image"
            >
              →
            </MobileArrowBtn>
          </MobileArrowRow>
        )}
      </LightboxContent>

      <CloseBtn onClick={onClose} aria-label="Close lightbox">
        ×
      </CloseBtn>

      {images.length > 1 && (
        <>
          <ArrowLeft
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous image"
          >
            ←
          </ArrowLeft>
          <ArrowRight
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next image"
          >
            →
          </ArrowRight>
        </>
      )}
    </LightboxOverlay>
  );
}

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
    desc: "Logo, type, colour — built from nothing.",
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
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);

  const openGallery = useCallback((images: string[]) => {
    setLightboxImages(images);
  }, []);

  const closeGallery = useCallback(() => {
    setLightboxImages(null);
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
                      <GalleryBadge>View work →</GalleryBadge>
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

      {lightboxImages && (
        <Lightbox images={lightboxImages} onClose={closeGallery} />
      )}
    </Section>
  );
}
