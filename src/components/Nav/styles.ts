import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { PrimaryButton } from "../../styles/shared";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(249, 248, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 0.5px solid ${tokens.border};
`;

export const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.a`
  font-family: ${fonts.display};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${tokens.textPrimary};
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: ${tokens.textPrimary};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CVLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textPrimary};
  border: 0.5px solid ${tokens.textPrimary};
  border-radius: 100px;
  padding: 9px 20px;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CTAButton = styled(PrimaryButton)`
  font-size: 13px;
  padding: 9px 20px;
`;
