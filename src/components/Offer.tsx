import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";
import DoorOneTimeBuild from "./DoorOneTimeBuild";
import DoorRetainer from "./DoorRetainer";
import DoorCustom from "./DoorCustom";

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
  margin-bottom: 56px;
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
  line-height: 1.7;
`;

const Doors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterNote = styled.p`
  text-align: center;
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};
  margin-top: 32px;

  span {
    color: ${tokens.purple};
  }
`;

export default function Offer() {
  return (
    <Section id="offer">
      <Inner>
        <Header>
          <Eyebrow>How we work together</Eyebrow>
          <Headline>Here's how we work together.</Headline>
          <Sub>
            Three ways in. Pick the one that fits where you are right now.
          </Sub>
        </Header>

        <Doors>
          <DoorOneTimeBuild />
          <DoorRetainer />
          <DoorCustom />
        </Doors>

        <FooterNote>
          <span>Not sure which one is right for you?</span> Send a message and
          we'll figure it out together.
        </FooterNote>
      </Inner>
    </Section>
  );
}
