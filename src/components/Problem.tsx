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
      <BgWord>invisible</BgWord>
      <Inner>
        <Content>
          <Eyebrow>The problem</Eyebrow>
          <Headline>
            The problem isn't your business.<br />
            It's your <em>presence.</em>
          </Headline>
          <Body>
            <BodyP>
              You're good at what you do. Your customers know it. But the person who's never heard of
              you — the one scrolling Instagram right now, or Googling what you sell — they don't see
              that. They see a website that doesn't load properly. A logo that doesn't look
              trustworthy. A social media page that hasn't posted in three months. Or worse — nothing
              at all.
            </BodyP>
            <BodyP>
              And so they move on. Not because you lost. Because you were never visible in the first
              place.
            </BodyP>
            <BodyP strong>
              That's not a you problem. That's a foundation problem. And foundations can be fixed.
            </BodyP>
          </Body>
        </Content>
      </Inner>
    </Section>
  );
}
