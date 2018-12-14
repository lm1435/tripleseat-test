import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1em auto;
  text-align: center; 
`

const Paragraph = styled.p`
  color: #9ad6da;
  font-size: 2em;
`


const Header = ({children}) => {
  return (
    <Wrapper>
      <img src="https://www.tripleseat.com/wp-content/themes/tripleseat_wordpress/images/logo.png" alt="tripleseat logo"/>
      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
}

export default Header;
