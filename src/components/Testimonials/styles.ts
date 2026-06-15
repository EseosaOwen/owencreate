import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { SectionHeadline } from "../../styles/shared";

export const Headline = styled(SectionHeadline)`
  margin-bottom: 14px;
`;

export const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  color: ${tokens.textSecondary};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 0.5px solid ${tokens.border};
`;

export const VideoThumb = styled.div`
  border-radius: 10px;
  background: #e8e4ff;
  height: 100px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(145, 94, 255, 0.5);
`;

export const AvatarRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${tokens.purpleTint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.display};
  font-size: 14px;
  color: ${tokens.purple};
  flex-shrink: 0;
`;

export const AvatarInfo = styled.div``;

export const AvatarName = styled.div`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.textPrimary};
`;

export const AvatarBiz = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textSecondary};
`;

export const AvatarQuote = styled.p`
  font-family: ${fonts.display};
  font-size: 14px;
  font-style: italic;
  margin-top: 0.5rem;
`;

export const PlaceholderCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  gap: 12px;
`;

export const PlusIcon = styled.div`
  font-size: 24px;
  color: ${tokens.purple};
`;

export const PlaceholderText = styled.p`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};
  max-width: 220px;
  line-height: 1.6;
`;

export const ClosingLine = styled.p`
  text-align: center;
  font-family: ${fonts.display};
  font-style: italic;
  font-size: 16px;
  color: ${tokens.textSecondary};
  margin-top: 32px;
  line-height: 1.6;
`;
