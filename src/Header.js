import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1em auto;
  text-align: center;
  
`


const Header = ({children}) => {
  return (
    <Wrapper>
      <img src="https://www.tripleseat.com/wp-content/themes/tripleseat_wordpress/images/logo.png" alt="tripleseat logo"/>
      <p>{children}</p>
    </Wrapper>
  );
}

export default Header;
