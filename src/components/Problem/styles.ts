import styled from "@emotion/styled";
import { fonts } from "../../tokens";
import { SectionDark, SectionHeadline } from "../../styles/shared";

export const Section = styled(SectionDark)`
  position: relative;
  overflow: hidden;
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 560px;
`;

export const Headline = styled(SectionHeadline)`
  margin-bottom: 32px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BodyP = styled.p<{ strong?: boolean }>`
  font-family: ${fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: ${({ strong }) => (strong ? "white" : "rgba(255,255,255,0.55)")};
  font-weight: ${({ strong }) => (strong ? 500 : 400)};
`;

export const BgWord = styled.div`
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
