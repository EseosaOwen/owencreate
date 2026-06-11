import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const Section = styled.section`
  background: ${tokens.dark};
  padding: 96px 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 560px;
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
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  color: white;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 32px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BodyP = styled.p<{ strong?: boolean }>`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: ${({ strong }) => strong ? 'white' : 'rgba(255,255,255,0.55)'};
  font-weight: ${({ strong }) => strong ? 500 : 400};
`;

const BgWord = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${fonts.display};
  font-size: clamp(80px, 12vw, 140px);
  font-weight: 500;
  color: white;
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;

  @media (max-width: 900px) {
    display: none;
  }
`;

export default function Problem() {
  return (
    <Section>
      <BgWord>execute</BgWord>
      <Inner>
        <Content>
          <Eyebrow>The difference</Eyebrow>
          <Headline>
            Most developers build what they're told.<br />
            <em>I build what's needed.</em>
          </Headline>
          <Body>
            <BodyP>
              There's a gap between the developer who executes and the strategist who thinks. Most
              people sit on one side or the other. I live in the middle.
            </BodyP>
            <BodyP>
              I can read a brief, understand the business goal behind it, architect the solution, and
              ship it. Without needing three meetings to explain why it matters.
            </BodyP>
            <BodyP strong>
              That's not common. And it's exactly what early-stage products and serious businesses
              need.
            </BodyP>
          </Body>
        </Content>
      </Inner>
    </Section>
  );
}
