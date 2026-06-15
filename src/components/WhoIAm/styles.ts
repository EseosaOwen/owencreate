import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { SectionHeadline } from "../../styles/shared";

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div``;

export const Headline = styled(SectionHeadline)`
  margin-bottom: 28px;
`;

export const Body = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.8;
  color: ${tokens.textSecondary};
  margin-bottom: 28px;
`;

export const EntityCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
`;

export const EntityCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  border: 0.5px solid ${tokens.border};
  padding: 12px 16px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(145, 94, 255, 0.3);
    box-shadow: 0 2px 12px rgba(145, 94, 255, 0.08);
  }
`;

export const EntityName = styled.span`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
`;

export const EntityLink = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.purple};
`;

export const Right = styled.div``;

export const PhotoWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/5;
  background: #e8e4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`;

export const PhotoPlaceholder = styled.div`
  font-family: ${fonts.display};
  font-size: 48px;
  font-weight: 400;
  color: ${tokens.purple};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
