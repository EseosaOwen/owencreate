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
  margin-bottom: 16px;
`;

const MinNote = styled.p`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
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

const ServiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};

  &::before {
    content: '→';
    color: ${tokens.purple};
    font-size: 11px;
    flex-shrink: 0;
  }
`;

const services = [
  'E-commerce stores',
  'Customer retention systems',
  'Web applications',
  'Restaurant solutions',
  'Custom digital systems',
];

export default function DoorCustom() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Card>
      <div>
        <Label>Custom builds</Label>
        <Headline>Technical depth. No ceiling.</Headline>
        <Body>
          E-commerce stores. Customer systems. Web applications. Restaurant solutions. If you need
          something built from the ground up with real technical depth — this is where that happens.
          Every project is scoped and quoted individually.
        </Body>
        <MinNote>Minimum investment: $700</MinNote>
        <CTA onClick={() => scrollTo('contact')}>Discuss a custom project →</CTA>
      </div>
      <ServiceList>
        {services.map((s) => (
          <ServiceItem key={s}>{s}</ServiceItem>
        ))}
      </ServiceList>
    </Card>
  );
}
