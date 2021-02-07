import React from 'react';
import styled from 'styled-components'
import sponsor1 from '../../images/sponsor1.svg';
import sponsor2 from '../../images/sponsor2.svg';
import sponsor3 from '../../images/sponsor3.svg';
import sponsor4 from '../../images/sponsor4.svg';

const Section = styled.section`
  img{
  opacity: 0.3;
  }
`;


const Sponsor = () => {
  return (
    <Section className="flex flex-wrap items-center justify-between container w-11/12 mx-auto py-16">
      <img src={sponsor1} alt="sponsor1" />
      <img src={sponsor2} alt="sponsor2" />
      <img src={sponsor3} alt="sponsor3" />
      <img src={sponsor4} alt="sponsor4" />
    </Section>
  )
}

export default Sponsor
