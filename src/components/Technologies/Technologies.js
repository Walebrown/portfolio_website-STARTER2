import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm actively learning new technologies that would improve the responsiveness of my websites and applications
    </SectionText>
    <List>
      <ListItem>
      <DiReact size='3rem' />
      <ListContainer>
        <ListTitle> Front-End</ListTitle>
        <ListParagraph>
        Experience with <br />
        React.js
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
      <DiZend size='3rem' />
      <ListContainer>
        <ListTitle> UI/UX Designer</ListTitle>
        <ListParagraph>
        Experience with <br />
        Figma
        </ListParagraph>
      </ListContainer>
      </ListItem>
  </List>
 </Section >
);

export default Technologies;
