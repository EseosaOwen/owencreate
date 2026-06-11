import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const NavBar = styled.nav`
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

const NavInner = styled.div`
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

const Logo = styled.a`
  font-family: ${fonts.display};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${tokens.textPrimary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.textSecondary};
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: ${tokens.textPrimary};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CVLink = styled.a`
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

const CTAButton = styled.button`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: ${tokens.dark};
  border-radius: 100px;
  padding: 9px 20px;
  transition: transform 0.15s ease, opacity 0.15s ease;
  white-space: nowrap;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavBar>
      <NavInner>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>owen.</Logo>
        <NavLinks>
          <NavLink onClick={() => scrollTo('projects')}>projects</NavLink>
          <NavLink onClick={() => scrollTo('proof')}>work</NavLink>
          <NavLink onClick={() => scrollTo('contact')}>contact</NavLink>
        </NavLinks>
        <NavActions>
          <CVLink href="/Owen_Fullstack_Dev_CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</CVLink>
          <CTAButton onClick={() => scrollTo('contact')}>Work with me</CTAButton>
        </NavActions>
      </NavInner>
    </NavBar>
  );
}
