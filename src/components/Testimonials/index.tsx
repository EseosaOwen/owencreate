import { SectionLight, Container, Eyebrow } from "../../styles/shared";
import { testimonials } from "./data";
import {
  Grid,
  Avatar,
  AvatarBiz,
  AvatarInfo,
  AvatarName,
  AvatarQuote,
  AvatarRow,
  Card,
  ClosingLine,
  Header,
  Headline,
  PlaceholderCard,
  PlaceholderText,
  PlusIcon,
  Sub,
  VideoLabel,
  VideoThumb,
} from "./styles";

export default function Testimonials() {
  return (
    <SectionLight id="testimonials">
      <Container>
        <Header>
          <Eyebrow>Testimonials</Eyebrow>
          <Headline>Don't take my word for it.</Headline>
          <Sub>Real businesses. Real results.</Sub>
        </Header>

        <Grid>
          <PlaceholderCard>
            <PlusIcon>+</PlusIcon>
            <PlaceholderText>
              I let the work speak first. References available on request.
            </PlaceholderText>
          </PlaceholderCard>

          {testimonials.map((card) => (
            <Card key={card.name}>
              <VideoThumb>
                <VideoLabel>{card.avatar}</VideoLabel>
              </VideoThumb>
              <AvatarRow>
                <Avatar>{card.avatar}</Avatar>
                <AvatarInfo>
                  <AvatarName>{card.name}</AvatarName>
                  <AvatarBiz>
                    {card.business} · {card.location}
                  </AvatarBiz>
                  <AvatarQuote>"{card.highlight}"</AvatarQuote>
                </AvatarInfo>
              </AvatarRow>
            </Card>
          ))}

          <Card>
            <VideoThumb>
              <VideoLabel>Coming soon</VideoLabel>
            </VideoThumb>
            <AvatarRow>
              <Avatar>A</Avatar>
              <AvatarInfo>
                <AvatarName>Coming soon</AvatarName>
                <AvatarBiz>Business · Location</AvatarBiz>
              </AvatarInfo>
            </AvatarRow>
          </Card>
        </Grid>

        <ClosingLine>
          I bring the same level of thinking to every project — whether it's a
          one-day fix or a six-month build.
        </ClosingLine>
      </Container>
    </SectionLight>
  );
}
