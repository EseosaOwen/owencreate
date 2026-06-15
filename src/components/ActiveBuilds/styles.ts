import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { SectionHeadline } from "../../styles/shared";

export const Inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Headline = styled(SectionHeadline)`
  font-size: clamp(28px, 4vw, 42px);
  margin-bottom: 48px;
`;

export const InvoleyCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 32px;
  border: 0.5px solid rgba(145, 94, 255, 0.25);

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const CardName = styled.h3`
  font-family: ${fonts.display};
  font-size: 22px;
  font-weight: 400;
  color: white;
  letter-spacing: -0.02em;
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(145, 94, 255, 0.15);
  border-radius: 100px;
  padding: 4px 12px;
`;

export const StatusText = styled.span`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 500;
  color: ${tokens.purple};
  letter-spacing: 0.04em;
`;

export const CardProblem = styled.p`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
`;

export const FooterNote = styled.p`
  font-family: ${fonts.display};
  font-style: italic;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 32px;
  line-height: 1.6;
`;
