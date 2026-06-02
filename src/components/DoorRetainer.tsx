import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const Card = styled.div`
  background: ${tokens.dark};
  border: 1.5px solid ${tokens.purple};
  border-radius: 16px;
  padding: 36px 40px;
  display: grid;
  grid-template-columns: 40% 35% 25%;
  gap: 32px;
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
`;

const Label = styled.span`
  display: inline-block;
  background: ${tokens.purple};
  color: white;
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
  color: white;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 14px;
`;

const Body = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.55);
`;

const FeaturesCol = styled.div``;

const FeaturesLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.purple};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
`;

const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${tokens.purple};
    flex-shrink: 0;
  }
`;

const PricingCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 6px;
`;

const PriceNum = styled.span`
  font-family: ${fonts.display};
  font-size: 40px;
  font-weight: 500;
  color: white;
  line-height: 1;
`;

const PricePer = styled.span`
  font-family: ${fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
`;

const IntroOffer = styled.div`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.purple};
  margin-bottom: 20px;
`;

const CTA = styled.button`
  width: 100%;
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: ${tokens.purple};
  border-radius: 100px;
  padding: 12px;
  margin-bottom: 12px;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

const Replaces = styled.div`
  font-family: ${fonts.body};
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1.7;
  text-align: center;
`;

const features = [
  '20 posts/month',
  '15 custom graphics/month',
  '1–2 motion videos/month',
  'Website design & management',
  'Brand support',
  'Content strategy',
  'Priority service',
];

export default function DoorRetainer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Card>
      <div>
        <Label>Most popular</Label>
        <Headline>Your complete digital team.</Headline>
        <Body>
          One partner. Five roles. We handle your content, strategy, design, video, and website so you can
          focus on running the business. No juggling five freelancers. No missed posts. No
          inconsistent brand.
        </Body>
      </div>

      <FeaturesCol>
        <FeaturesLabel>What's included</FeaturesLabel>
        <FeatureList>
          {features.map((f) => (
            <FeatureItem key={f}>{f}</FeatureItem>
          ))}
        </FeatureList>
      </FeaturesCol>

      <PricingCol>
        <Price>
          <PriceNum>$1,200</PriceNum>
          <PricePer>/month</PricePer>
        </Price>
        <IntroOffer>Intro offer: $1,000/mo for first 3 months</IntroOffer>
        <CTA onClick={() => scrollTo('contact')}>Start the retainer →</CTA>
        <Replaces>
          Replaces 5 roles: social manager · video editor · graphic designer · content strategist · web
          developer
        </Replaces>
      </PricingCol>
    </Card>
  );
}
