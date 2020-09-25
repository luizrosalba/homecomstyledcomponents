import React from 'react';
import styled from 'styled-components';


/// instanciando a classe . cria uma classe criptografada 
const Nav  =  styled.div `
background-color:#457667;
position: relative; 
display:flex;
justify-content: space-between;
align-items:center;
width:100%;
height: 60px; 
`
///posso mudar facil o item depois do styled 
const Item= styled.a `
font-size:14px;
font-family:'Read';
font-weight:bold;
color:#fff;
padding: 10px;
`
function header() {
  return (
    <Nav>
        <Item>  Home      </Item>
        <Item>  Contato   </Item>
        <Item>  Sobre     </Item>
    </Nav>

  );
}

export default header;