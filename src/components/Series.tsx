import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";

const Section = styled.section`
  background: ${tokens.dark};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

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
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 400;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 48px;
`;

const InvoleyCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 32px;
  border: 0.5px solid rgba(145, 94, 255, 0.25);

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const CardName = styled.h3`
  font-family: ${fonts.display};
  font-size: 22px;
  font-weight: 400;
  color: white;
  letter-spacing: -0.02em;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(145, 94, 255, 0.15);
  border-radius: 100px;
  padding: 4px 12px;
`;

const StatusDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${tokens.purple};
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
`;

const StatusText = styled.span`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 500;
  color: ${tokens.purple};
  letter-spacing: 0.04em;
`;

const CardProblem = styled.p`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
`;

// const CardStage = styled.p`
//   font-family: ${fonts.body};
//   font-size: 14px;
//   line-height: 1.7;
//   color: rgba(255, 255, 255, 0.9);
//   font-weight: 500;
//   margin-bottom: 24px;
// `;

const CardLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.purple};
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterNote = styled.p`
  font-family: ${fonts.display};
  font-style: italic;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 32px;
  line-height: 1.6;
`;

export default function Series() {
  return (
    <Section id="series">
      <Inner>
        <Eyebrow>Currently building</Eyebrow>
        <Headline>What I'm building right now.</Headline>

        <InvoleyCard>
          <CardHeader>
            <CardName>Involey</CardName>
            <StatusBadge>
              <StatusDot />
              <StatusText>ACTIVE</StatusText>
            </StatusBadge>
          </CardHeader>

          <CardProblem>
            Most small businesses have no clear picture of their visibility,
            reach, or digital health. They're building without a dashboard.
            Involey is the clarity tool they've been missing — a way to see
            where they stand, what's working, and what to fix next.
          </CardProblem>

          <CardLink
            href="https://involey.puissantdev.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit involey →
          </CardLink>
        </InvoleyCard>

        <div style={{ height: 20 }} />

        <InvoleyCard>
          <CardHeader>
            <CardName>Forvention</CardName>
            <StatusBadge>
              <StatusDot />
              <StatusText>DEVELOPMENT</StatusText>
            </StatusBadge>
          </CardHeader>

          <CardProblem>
            Most organisations invest in security tools but ignore their biggest
            vulnerability — their people. Forvention is a platform that changes
            that. Role-based training modules, interactive workplace scenarios,
            progress tracking, certificates, and compliance-ready reporting —
            built to make cybersecurity training practical, measurable, and
            actually understood by the people doing it. Currently in development
            with the ForwardEdge team. Built for SMEs, financial institutions,
            healthcare organisations, and anyone serious about reducing
            human-related cyber risk.
          </CardProblem>

          <CardLink
            href="https://forvention.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit forvention →
          </CardLink>
        </InvoleyCard>

        <FooterNote>
          Always building something. This section updates as things ship.
        </FooterNote>
      </Inner>
    </Section>
  );
}
