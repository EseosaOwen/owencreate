import { FooterEl, Copyright, Inner, Link, Links, Logo } from "./styles";

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Logo>owen.</Logo>
        <Links>
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
