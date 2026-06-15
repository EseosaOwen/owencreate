import { Eyebrow } from "../../styles/shared";
import {
  Section,
  BgWord,
  Body,
  BodyP,
  Content,
  Headline,
  Inner,
} from "./styles";

export default function Problem() {
  return (
    <Section>
      <BgWord>execute</BgWord>
      <Inner>
        <Content>
          <Eyebrow>The difference</Eyebrow>
          <Headline dark>
            Most developers build what they're told.
            <br />
            <em>I build what's needed.</em>
          </Headline>
          <Body>
            <BodyP>
              There's a gap between the developer who executes and the
              strategist who thinks. Most people sit on one side or the other. I
              live in the middle.
            </BodyP>
            <BodyP>
              I can read a brief, understand the business goal behind it,
              architect the solution, and ship it. Without needing three
              meetings to explain why it matters.
            </BodyP>
            <BodyP strong>
              That's not common. And it's exactly what early-stage products and
              serious businesses need.
            </BodyP>
          </Body>
        </Content>
      </Inner>
    </Section>
  );
}
