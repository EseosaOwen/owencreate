import {
  NavBar,
  NavActions,
  NavInner,
  NavLink,
  NavLinks,
  CTAButton,
  CVLink,
  Logo,
} from "./styles";

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavBar>
      <NavInner>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          owen.
        </Logo>
        <NavLinks>
          <NavLink onClick={() => scrollTo("projects")}>projects</NavLink>
          <NavLink onClick={() => scrollTo("proof")}>work</NavLink>
          <NavLink onClick={() => scrollTo("contact")}>contact</NavLink>
        </NavLinks>
        <NavActions>
          <CVLink
            href="/Owen_Fullstack_Dev_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </CVLink>
          <CTAButton onClick={() => scrollTo("contact")}>
            Work with me
          </CTAButton>
        </NavActions>
      </NavInner>
    </NavBar>
  );
}
