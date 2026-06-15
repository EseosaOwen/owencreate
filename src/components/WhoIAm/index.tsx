import { SectionLight, Eyebrow } from "../../styles/shared";
import {
  Inner,
  Body,
  EntityCard,
  EntityCards,
  EntityLink,
  EntityName,
  Headline,
  Left,
  PhotoPlaceholder,
  PhotoWrapper,
  Right,
} from "./styles";

export default function WhoIAm() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionLight>
      <Inner>
        <Left>
          <Eyebrow>Who I am</Eyebrow>
          <Headline>
            I'm not an agency.
            <br />
            I'm someone who <em>builds.</em>
          </Headline>
          <Body>
            My name is Owen. I've spent the last few years building digital
            products for businesses — restaurants, pharmacies, real estate
            companies, personal brands. Websites, systems, identities, tools.
            <br />
            <br />
            Along the way I started building my own things too. Involey is a
            SaaS product I'm currently developing — a business visibility and
            clarity tool for small businesses. Building something of your own
            teaches you things no client project ever could.
            <br />
            <br />
            I understand both sides. The technical depth needed to ship
            something properly. And the business thinking needed to make sure
            it's worth shipping in the first place.
            <br />
            <br />
            I'm not the loudest developer in the room. But I'm usually the one
            who understands what the room actually needs.
          </Body>

          <EntityCards>
            <EntityCard
              href="https://involey.puissantdev.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EntityName>Involey</EntityName>
              <EntityLink>My SaaS →</EntityLink>
            </EntityCard>
            <EntityCard
              href="#proof"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("proof");
              }}
            >
              <EntityName>Past work</EntityName>
              <EntityLink>See projects →</EntityLink>
            </EntityCard>
          </EntityCards>
        </Left>

        <Right>
          <PhotoWrapper>
            <img src="/images/me.PNG" />
            <PhotoPlaceholder>O</PhotoPlaceholder>
          </PhotoWrapper>
        </Right>
      </Inner>
    </SectionLight>
  );
}
