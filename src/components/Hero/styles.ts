import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";

export const Section = styled.section`
  background: ${tokens.base};
  padding: 160px 32px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 120px 20px 72px;
  }
`;

export const Inner = styled.div`
  max-width: 640px;
  width: 100%;
  text-align: center;
`;

export const EyebrowImage = styled.img`
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${tokens.purpleTint};
  border-radius: 100px;
  padding: 5px 16px;
  margin-bottom: 40px;
`;

export const BadgeText = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 500;
  color: ${tokens.purpleDark};
  letter-spacing: 0.04em;
`;

export const Headline = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${tokens.textPrimary};
  margin-bottom: 32px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

export const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: ${tokens.textSecondary};
  max-width: 480px;
  margin: 0 auto 40px;
`;

export const CTARow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const MetricsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;
  padding-top: 40px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.06);
  margin-top: 56px;
  flex-wrap: wrap;
`;

export const Metric = styled.div`
  text-align: center;
`;

export const MetricNumber = styled.div`
  font-family: ${fonts.display};
  font-size: 32px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  line-height: 1;
  margin-bottom: 6px;
`;

export const MetricLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.textSecondary};
`;
