
import React from 'react';
import styled from 'styled-components'

// import { Container } from './styles';
const Footer = styled.footer `
position:fixed;
bottom: 0; 
left: 0; 
height: 40px; 
width: 100%; 
display: flex; 
justify-content: center; 
align-itens:center; 
background-coloer: #8793; 
height:90px;
`

const FooterItem = styled.span 
`
text-decoration:none; 
font-size:16px;
color:#000;
font-weigth:bold;
bottom: 0; 
top:38px;
position:relative;

`
function footer() {
  return (
    <>
      <Footer>
        <FooterItem>Aula sobre Styled Componentes </FooterItem>
      </Footer>
    </>
  );
}

export default footer;
