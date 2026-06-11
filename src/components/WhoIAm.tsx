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
  position: relative;

  img {
    width: 100%;
  }
`;

const PhotoPlaceholder = styled.div`
  font-family: ${fonts.display};
  font-size: 48px;
  font-weight: 400;
  color: ${tokens.purple};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export default function WhoIAm() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
            My name is Owen. I've spent the last few years building digital products for businesses
            — restaurants, pharmacies, real estate companies, personal brands. Websites, systems,
            identities, tools.
            <br />
            <br />
            Along the way I started building my own things too. Involey is a SaaS product I'm
            currently developing — a business visibility and clarity tool for small businesses.
            Building something of your own teaches you things no client project ever could.
            <br />
            <br />
            I understand both sides. The technical depth needed to ship something properly. And the
            business thinking needed to make sure it's worth shipping in the first place.
            <br />
            <br />
            I'm not the loudest developer in the room. But I'm usually the one who understands what
            the room actually needs.
          </Body>

          <EntityCards>
            <EntityCard
              href="https://involey.puissantdev.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EntityName>Involey</EntityName>
              <EntityLink>My SaaS →</EntityLink>
            </EntityCard>
            <EntityCard
              href="#proof"
              onClick={(e) => { e.preventDefault(); scrollTo('proof'); }}
            >
              <EntityName>Past work</EntityName>
              <EntityLink>See projects →</EntityLink>
            </EntityCard>
          </EntityCards>
        </Left>

        <Right>
          <PhotoWrapper>
            <img src="/images/me.PNG" />
            <PhotoPlaceholder>O</PhotoPlaceholder>
          </PhotoWrapper>
        </Right>
      </Inner>
    </Section>
  );
}
