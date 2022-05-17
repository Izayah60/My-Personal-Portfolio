import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
          <br/>
          <br/>
          I am Isaiah Ikharona
          <SectionText>
          Web Developer || Blockchain Developer
          </SectionText>
        </SectionTitle>
        <SectionText>
        Passionate, driven and goal oriented are the best adjectives to describe me. I am a problem solver enriched with fast thinking and creative problem solving abilities. <br /> <br />
        I am a creator. I love to create things from the ground up. I like to be in the back and front of tech hence my passion for web and blockchain development. My goal is to create absolutely excellent projects that would make the world easier for us to live in. I put my heart and soul into every project I work on, going non-stop till it is brought to perfection. I am trustworthy and an excellent team player. I believe tech to be the revolution that would change the world and I want to be a part of that change.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;