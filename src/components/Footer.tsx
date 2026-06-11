import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";

const FooterEl = styled.footer`
  background: ${tokens.dark};
  border-top: 0.5px solid rgba(255, 255, 255, 0.06);
  padding: 24px 32px;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const Inner = styled.div`
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

const Logo = styled.span`
  font-family: ${fonts.display};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Link = styled.a`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Copyright = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.2);
`;

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Logo>owen.</Logo>
        <Links>
          {/* <Link
            href="https://puissantdev.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            PuissantDev
          </Link> */}
          {/* <Link
            href="https://1ephraim.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            1Ephraim
          </Link> */}
          <Link
            href="https://involey.puissantdev.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Involey
          </Link>
          <Link
            href="https://instagram.com/owen.create"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://tiktok.com/@owen.create"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </Link>
          <Link
            href="https://www.linkedin.com/in/eseosa-owen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </Links>
        <Copyright>© 2026 Owen</Copyright>
      </Inner>
    </FooterEl>
  );
}
