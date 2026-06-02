import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const Section = styled.section`
  background: ${tokens.dark};
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
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const LiveBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(145, 94, 255, 0.15);
  border-radius: 100px;
  padding: 5px 14px;
  margin-bottom: 28px;
`;

const LiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${tokens.purple};
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
`;

const LiveText = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 500;
  color: ${tokens.purple};
  letter-spacing: 0.04em;
`;

const Headline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 400;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 28px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const BodyMuted = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
`;

const BodyStrong = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.8;
  color: white;
  margin-bottom: 28px;
`;

const CTARow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: ${tokens.purple};
  border-radius: 100px;
  padding: 10px 22px;
  display: inline-block;
  transition: transform 0.15s ease, opacity 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

const SecondaryBtn = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  color: white;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 10px 22px;
  display: inline-block;
  transition: border-color 0.15s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const Right = styled.div``;

const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const WeekCard = styled.div<{ active?: boolean }>`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.08);
`;

const WeekLabel = styled.div<{ active?: boolean }>`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 600;
  color: ${({ active }) => active ? tokens.purple : 'rgba(255,255,255,0.2)'};
  letter-spacing: 0.06em;
  margin-bottom: 8px;
`;

const WeekLink = styled.div<{ active?: boolean }>`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${({ active }) => active ? tokens.purple : 'rgba(255,255,255,0.2)'};
  cursor: ${({ active }) => active ? 'pointer' : 'default'};
`;

const weeks = [
  { label: 'WEEK 1', link: 'Reveal →', active: true },
  { label: 'WEEK 2', link: 'Coming soon', active: false },
  { label: 'WEEK 3', link: 'Coming soon', active: false },
  { label: 'WEEK 4', link: 'Coming soon', active: false },
  { label: 'WEEK 5', link: 'Coming soon', active: false },
];

export default function Series() {
  return (
    <Section id="series">
      <Inner>
        <Left>
          <LiveBadge>
            <LiveDot />
            <LiveText>LIVE NOW</LiveText>
          </LiveBadge>

          <Headline>
            15 free builds.<br />
            5 weeks.<br />
            <em>In public.</em>
          </Headline>

          <BodyMuted>
            Every week for 5 weeks, we pick 3 small businesses from our comments and build them
            something for free. A website, a brand identity, or a social media Reel. No catch, no
            strings. Just real work, done properly, in front of everyone.
          </BodyMuted>

          <BodyStrong>
            This is not a giveaway. This is us showing you exactly what we can do — before you
            spend a single dollar.
          </BodyStrong>

          <CTARow>
            <PrimaryBtn href="https://instagram.com/owen.create" target="_blank" rel="noopener noreferrer">
              Watch on Instagram →
            </PrimaryBtn>
            <SecondaryBtn href="https://tiktok.com/@owen.create" target="_blank" rel="noopener noreferrer">
              Watch on TikTok
            </SecondaryBtn>
          </CTARow>
        </Left>

        <Right>
          <WeekGrid>
            {weeks.map((w) => (
              <WeekCard key={w.label} active={w.active}>
                <WeekLabel active={w.active}>{w.label}</WeekLabel>
                <WeekLink active={w.active}>{w.link}</WeekLink>
              </WeekCard>
            ))}
          </WeekGrid>
        </Right>
      </Inner>
    </Section>
  );
}
