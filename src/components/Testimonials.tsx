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
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
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
  margin-bottom: 14px;
`;

const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  color: ${tokens.textSecondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 0.5px solid ${tokens.border};
`;

const VideoThumb = styled.div`
  border-radius: 10px;
  background: #e8e4ff;
  height: 100px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(145, 94, 255, 0.5);
`;

const AvatarRow = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 10px;
  margin-bottom: 14px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${tokens.purpleTint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.display};
  font-size: 14px;
  color: ${tokens.purple};
  flex-shrink: 0;
`;

const AvatarInfo = styled.div``;

const AvatarName = styled.div`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
`;

const AvatarBiz = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textSecondary};
`;

const AvatarQuote = styled.p`
  font-family: ${fonts.display};
  font-size: 14px;
  font-style: italic;
  margin-top: 0.5rem;
`;

const PlaceholderCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  gap: 12px;
`;

const PlusIcon = styled.div`
  font-size: 24px;
  color: ${tokens.purple};
`;

const PlaceholderText = styled.p`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};
  max-width: 220px;
  line-height: 1.6;
`;

const ClosingLine = styled.p`
  text-align: center;
  font-family: ${fonts.display};
  font-style: italic;
  font-size: 16px;
  color: ${tokens.textSecondary};
  margin-top: 32px;
  line-height: 1.6;
`;

const testimonials = [
  {
    avatar: "TK",
    name: "Tinuade Kolawole",
    location: "Remote",
    business: "Event Planning",
    highlight:
      "Owen and the team has been an incredible asset to my business. The website and branding they developed not only elevated my event planning agency but also helped me reach a broader audience and drive more engagement. I'm truly grateful for their outstanding service. Thank you!",
  },
  {
    avatar: "CN",
    name: "Centerfield Engineering",
    location: "Nigeria",
    business: "Construction and Engineering",
    highlight:
      "PuissantDev did an excellent job bringing our vision to life. They created a modern, professional website that clearly showcases our engineering services and project portfolio. The team was responsive, easy to work with, and delivered exactly what we needed.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Inner>
        <Header>
          <Eyebrow>Testimonials</Eyebrow>
          <Headline>Don't take our word for it.</Headline>
          <Sub>Real businesses. Real results. Real people on camera.</Sub>
        </Header>

        <Grid>
          <PlaceholderCard>
            <PlusIcon>+</PlusIcon>
            <PlaceholderText>
              New testimonials added every Friday as the series delivers.
            </PlaceholderText>
          </PlaceholderCard>

          {testimonials.map((card) => (
            <Card>
              <VideoThumb>
                <VideoLabel>{card.avatar}</VideoLabel>
              </VideoThumb>
              <AvatarRow>
                <Avatar>{card.avatar}</Avatar>
                <AvatarInfo>
                  <AvatarName>{card.name}</AvatarName>
                  <AvatarBiz>
                    {card.business} · {card.location}
                  </AvatarBiz>
                  <AvatarQuote>"{card.highlight}"</AvatarQuote>
                </AvatarInfo>
              </AvatarRow>
            </Card>
          ))}

          <Card>
            <VideoThumb>
              <VideoLabel>Coming soon</VideoLabel>
            </VideoThumb>
            <AvatarRow>
              <Avatar>A</Avatar>
              <AvatarInfo>
                <AvatarName>Coming soon</AvatarName>
                <AvatarBiz>Business · Location</AvatarBiz>
              </AvatarInfo>
            </AvatarRow>
          </Card>
        </Grid>

        <ClosingLine>
          Every business we work with gets this level of attention. Yours will
          too.
        </ClosingLine>
      </Inner>
    </Section>
  );
}
