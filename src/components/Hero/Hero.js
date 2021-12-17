import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopaddings>
    <LeftSection>
      <SectionTitle main center>
        Adewale, <br/>
          Front-End Developer
      </SectionTitle>
      <SectionText>
        I make efficient and responsive websites using the latest technologies
      </SectionText>
      <Button onClink= {() => window.location = '#'}> Hire me </Button>
    </LeftSection>
  </Section>
);

export default Hero;