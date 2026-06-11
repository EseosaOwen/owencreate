import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";

const Section = styled.section`
  background: ${tokens.base};
  padding: 160px 32px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 120px 20px 72px;
  }
`;

const Inner = styled.div`
  max-width: 640px;
  width: 100%;
  text-align: center;
`;

const EyebrowImage = styled.img`
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${tokens.purpleTint};
  border-radius: 100px;
  padding: 5px 16px;
  margin-bottom: 40px;
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${tokens.purple};
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
`;

const BadgeText = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 500;
  color: ${tokens.purpleDark};
  letter-spacing: 0.04em;
`;

const Headline = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${tokens.textPrimary};
  margin-bottom: 32px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: ${tokens.textSecondary};
  max-width: 480px;
  margin: 0 auto 40px;
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: ${tokens.dark};
  border-radius: 100px;
  padding: 14px 28px;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SecondaryBtn = styled.button`
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 400;
  color: ${tokens.textPrimary};
  background: none;
  border: 0.5px solid ${tokens.textPrimary};
  border-radius: 100px;
  padding: 14px 28px;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const MetricsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;
  padding-top: 40px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.06);
  margin-top: 56px;
  flex-wrap: wrap;
`;

const Metric = styled.div`
  text-align: center;
`;

const MetricNumber = styled.div`
  font-family: ${fonts.display};
  font-size: 32px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  line-height: 1;
  margin-bottom: 6px;
`;

const MetricLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.textSecondary};
`;

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Inner>
        <Badge>
          <BadgeDot />
          <BadgeText>AVAILABLE FOR NEW OPPORTUNITIES</BadgeText>
        </Badge>

        <EyebrowImage src="/images/me-hero.PNG" />

        <Headline>
          I build things that work.
          <br />
          And I understand <em>why</em> they need to.
        </Headline>

        <Sub>
          I'm Owen — a developer and builder with a strategic mind. I don't just
          write code. I think about the problem behind the product, the user
          behind the interface, and the business behind the build.
        </Sub>

        <CTARow>
          <PrimaryBtn onClick={() => scrollTo("proof")}>
            See my work →
          </PrimaryBtn>
          <SecondaryBtn onClick={() => scrollTo("contact")}>
            Work with me →
          </SecondaryBtn>
        </CTARow>

        <MetricsRow>
          <Metric>
            <MetricNumber>30+</MetricNumber>
            <MetricLabel>projects shipped</MetricLabel>
          </Metric>
          <Metric>
            <MetricNumber>10+</MetricNumber>
            <MetricLabel>industries built for</MetricLabel>
          </Metric>
          <Metric>
            <MetricNumber>2</MetricNumber>
            <MetricLabel>SaaS in production</MetricLabel>
          </Metric>
        </MetricsRow>
      </Inner>
    </Section>
  );
}
