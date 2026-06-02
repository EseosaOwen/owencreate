import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const Card = styled.div`
  background: white;
  border: 0.5px solid ${tokens.border};
  border-radius: 16px;
  padding: 36px 40px;
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 40px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 28px 24px;
    gap: 28px;
  }
`;

const Label = styled.span`
  display: inline-block;
  background: ${tokens.purpleTint};
  color: ${tokens.purpleDark};
  border-radius: 100px;
  padding: 4px 14px;
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Headline = styled.h3`
  font-family: ${fonts.display};
  font-size: 26px;
  font-weight: 400;
  color: ${tokens.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 14px;
`;

const Body = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: ${tokens.textSecondary};
  margin-bottom: 24px;
`;

const CTA = styled.button`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  border: 0.5px solid ${tokens.textPrimary};
  border-radius: 100px;
  padding: 10px 22px;
  background: none;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: scale(1.02);
    background: rgba(0, 0, 0, 0.03);
  }
`;

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textPrimary};
`;

const ItemPrice = styled.span`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.purple};
`;

const prices = [
  { name: 'Starter Website', price: '$350' },
  { name: 'Brand Identity (e.g. logos, fonts, typography)', price: '$250' },
  { name: 'Reel Package (3 Reels)', price: '$200' },
  { name: 'Website + Brand', price: '$550' },
  { name: 'Full Launch Pack', price: '$700' },
];

export default function DoorOneTimeBuild() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Card>
      <div>
        <Label>One-time builds</Label>
        <Headline>Fixed price. You own it.</Headline>
        <Body>
          You know what you need. We build it, deliver it, and you own it. No retainer, no
          long-term commitment. Just clean, professional work.
        </Body>
        <CTA onClick={() => scrollTo('contact')}>Get a one-time build →</CTA>
      </div>
      <PriceList>
        {prices.map((item) => (
          <PriceItem key={item.name}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </PriceItem>
        ))}
      </PriceList>
    </Card>
  );
}
