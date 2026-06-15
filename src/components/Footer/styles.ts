import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";

export const FooterEl = styled.footer`
  background: ${tokens.dark};
  border-top: 0.5px solid rgba(255, 255, 255, 0.06);
  padding: 24px 32px;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.span`
  font-family: ${fonts.display};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Link = styled.a`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Copyright = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.2);
`;