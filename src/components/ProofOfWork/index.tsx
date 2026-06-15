import { useRef, useEffect, useCallback } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import {
  SectionLight,
  Container,
  SectionHeadline,
  DarkPill,
  LightPill,
} from "../../styles/shared";
import {
  SkillsBlock,
  Card,
  CardBody,
  CardDesc,
  CardEyebrow,
  CardImage,
  CardImageIcon,
  CardTitle,
  CatLabel,
  Eyebrow,
  GalleryBadge,
  Grid,
  HeaderLeft,
  HeaderNote,
  HeaderRow,
  PillRow,
  SectionDivider,
  SkillCard,
  SkillsGrid,
  SkillsHeader,
  StackLabel,
  StackRow,
} from "./styles";
import { projects, skillCategories } from "./data";

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
    <SectionLight id="proof">
      <Container>
        <SkillsBlock>
          <SkillsHeader>
            <Eyebrow>Skills &amp; Stack</Eyebrow>
            <SectionHeadline>What I build with.</SectionHeadline>
          </SkillsHeader>
          <SkillsGrid>
            {skillCategories.map((cat) => (
              <SkillCard key={cat.label}>
                <CatLabel>{cat.label}</CatLabel>
                <PillRow>
                  {cat.skills.map((s) => (
                    <DarkPill key={s}>{s}</DarkPill>
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
            <SectionHeadline>
              The work speaks for <em>itself.</em>
            </SectionHeadline>
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
                          <LightPill key={s}>{s}</LightPill>
                        ))}
                      </StackRow>
                    )}
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </Grid>
      </Container>
    </SectionLight>
  );
}
