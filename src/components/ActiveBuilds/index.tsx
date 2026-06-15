import {
  SectionDark,
  Eyebrow,
  PulseDot,
  PurpleTextLink,
} from "../../styles/shared";
import {
  Inner,
  CardHeader,
  CardName,
  CardProblem,
  FooterNote,
  Headline,
  InvoleyCard,
  StatusBadge,
  StatusText,
} from "./styles";

export default function ActiveBuilds() {
  return (
    <SectionDark id="series">
      <Inner>
        <Eyebrow>Currently building</Eyebrow>
        <Headline dark>What I'm building right now.</Headline>

        <InvoleyCard>
          <CardHeader>
            <CardName>Involey</CardName>
            <StatusBadge>
              <PulseDot />
              <StatusText>ACTIVE</StatusText>
            </StatusBadge>
          </CardHeader>

          <CardProblem>
            Most small businesses have no clear picture of their visibility,
            reach, or digital health. They're building without a dashboard.
            Involey is the clarity tool they've been missing — a way to see
            where they stand, what's working, and what to fix next.
          </CardProblem>

          <PurpleTextLink
            href="https://involey.puissantdev.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit involey →
          </PurpleTextLink>
        </InvoleyCard>

        <div style={{ height: 20 }} />

        <InvoleyCard>
          <CardHeader>
            <CardName>Forvention</CardName>
            <StatusBadge>
              <PulseDot />
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

          <PurpleTextLink
            href="https://forvention.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit forvention →
          </PurpleTextLink>
        </InvoleyCard>

        <FooterNote>
          Always building something. This section updates as things ship.
        </FooterNote>
      </Inner>
    </SectionDark>
  );
}
