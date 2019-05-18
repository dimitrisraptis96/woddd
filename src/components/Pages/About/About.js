import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import Link from "../../UI/Link";
import { Header1, Header2, Body, Small } from "../../UI/Typography";

import theme from "../../../utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  > h1 {
    margin-bottom: 3rem;
  }
  > h2 {
    margin-bottom: 0.5rem;
    align-self: flex-start;
  }
  > p {
    line-height: 1.7;
    margin-bottom: 3rem;
  }
`;

const About = props => {
  return (
    <Container>
      <Header1 weight="bold" color="tertiary">
        About
      </Header1>

      <Header2 color="tertiary" align="left" weight="bold">
        What is Woddd?
      </Header2>
      <Body align="left">
        Woddd generator was created for Crossfit enthusiasts or guys hungry of a
        crazy 15-minute routine. By generating a random wod, the struggle of
        searching hours for a matching workout is not a problem anymore. The
        goal of Woddd generator is to help fitness fans break out of the habit
        of using the same routine and beat workout boredom.
      </Body>

      <Header2 color="tertiary" align="left" weight="bold">
        How does Woddd work?
      </Header2>
      <Body align="left">
        Woddd is not rocket science! It works as simple as that. Each time the
        "Generate" button is pressed, a random wod is picked from our database.
        If you like a suggested wod you can easily save it to your favorites and
        access it again anytime in the future. For those more interested, feel
        free to take a look at the project on{" "}
        <Link href="https://github.com/dimitrisraptis96/woddd">GitHub</Link>.
      </Body>

      <Header2 color="tertiary" align="left" weight="bold">
        Who created Woddd?
      </Header2>
      <Body align="left">
        Woddd was created as a fun side project by{" "}
        <Link href="https://www.raptis.wtf">Dimitris Raptis</Link> who used to
        search for hours and kill wods every Sunday. Dimitris is the co-founder
        of Loceye and a fitness freak. User Interface design and Front-end
        development are his geek interests.
      </Body>
    </Container>
  );
};

export default About;
