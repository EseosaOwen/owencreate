import { PulseDot, PrimaryButton, GhostButton } from "../../styles/shared";
import {
  Badge,
  BadgeText,
  CTARow,
  EyebrowImage,
  Headline,
  Inner,
  Metric,
  MetricLabel,
  MetricNumber,
  MetricsRow,
  Section,
  Sub,
} from "./styles";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Inner>
        <Badge>
          <PulseDot />
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
          <PrimaryButton onClick={() => scrollTo("proof")}>
            See my work →
          </PrimaryButton>
          <GhostButton onClick={() => scrollTo("contact")}>
            Work with me →
          </GhostButton>
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
