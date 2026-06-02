import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const Eyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 20px;
`;

const Headline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 400;
  color: ${tokens.textPrimary};
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 28px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const Body = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.8;
  color: ${tokens.textSecondary};
  margin-bottom: 28px;
`;

const EntityCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
`;

const EntityCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  border: 0.5px solid ${tokens.border};
  padding: 12px 16px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(145, 94, 255, 0.3);
    box-shadow: 0 2px 12px rgba(145, 94, 255, 0.08);
  }
`;

const EntityName = styled.span`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
`;

const EntityLink = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.purple};
`;

const Right = styled.div``;

const PhotoWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/5;
  background: #e8e4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PhotoPlaceholder = styled.div`
  font-family: ${fonts.display};
  font-size: 48px;
  font-weight: 400;
  color: ${tokens.purple};
`;

export default function WhoIAm() {
  return (
    <Section>
      <Inner>
        <Left>
          <Eyebrow>Who I am</Eyebrow>
          <Headline>
            I'm not an agency.
            <br />
            I'm someone who <em>builds.</em>
          </Headline>
          <Body>
            My name is Eseosa Owen Omo-Enabu, alias Owen. For the last few years
            I've been quietly building digital things for businesses —
            restaurants, pharmacies, real estate companies, personal brands that
            started with nothing and needed everything. Websites, brand
            identities, digital systems. Work that actually moves the needle.
            <br />
            <br />
            I run two teams. PuissantDev handles custom builds — the technical,
            systems-driven work. 1Ephraim handles the full digital presence —
            content, design, video, and web, all under one roof. And right now
            we're building Involey, our own SaaS product.
            <br />
            <br />
            We're not new to this. We've just been more focused on doing the
            work than talking about it.
            <br />
            <br />
            That changes now.
          </Body>

          <EntityCards>
            <EntityCard
              href="https://puissantdev.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EntityName>PuissantDev</EntityName>
              <EntityLink>Custom builds →</EntityLink>
            </EntityCard>
            <EntityCard
              href="https://1ephraim.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EntityName>1Ephraim</EntityName>
              <EntityLink>Digital presence →</EntityLink>
            </EntityCard>
            <EntityCard
              href="https://involey.puissantdev.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EntityName>Involey</EntityName>
              <EntityLink>SaaS product →</EntityLink>
            </EntityCard>
          </EntityCards>
        </Left>

        <Right>
          <PhotoWrapper>
            <PhotoPlaceholder>O</PhotoPlaceholder>
          </PhotoWrapper>
        </Right>
      </Inner>
    </Section>
  );
}
