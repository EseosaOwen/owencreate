import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { Eyebrow as BaseEyebrow } from "../../styles/shared";

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HeaderLeft = styled.div``;

export const Eyebrow = styled(BaseEyebrow)`
  margin-bottom: 12px;
`;

export const HeaderNote = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: ${tokens.textSecondary};
  text-align: right;
  max-width: 180px;
  line-height: 1.6;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ placeholder?: boolean }>`
  background: ${({ placeholder }) =>
    placeholder ? tokens.purpleTint : "white"};
  border-radius: 12px;
  overflow: hidden;
  border: 0.5px solid ${tokens.border};
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImage = styled.div`
  aspect-ratio: 16/9;
  background: #e8e4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardImageIcon = styled.div`
  font-family: ${fonts.display};
  font-size: 24px;
  color: rgba(145, 94, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const GalleryBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 100px;
  padding: 4px 10px;
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.02em;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  pointer-events: none;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardEyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 10px;
  color: ${tokens.purple};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`;

export const CardTitle = styled.div`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  margin-bottom: 4px;
`;

export const CardDesc = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textSecondary};
`;

// ─── Skills styled components ─────────────────────────────────────────────────

export const SkillsBlock = styled.div`
  margin-bottom: 80px;
`;

export const SkillsHeader = styled.div`
  margin-bottom: 32px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background: ${tokens.dark};
  border-radius: 14px;
  padding: 24px;
`;

export const CatLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 14px;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const SectionDivider = styled.div`
  border-top: 0.5px solid ${tokens.border};
  margin-bottom: 56px;
`;

export const StackRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  margin-top: 10px;
`;

export const StackLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tokens.textSecondary};
  margin-right: 4px;
`;
