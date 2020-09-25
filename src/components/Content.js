import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display:flex;
flex-direction:row;
align-items:center;
jutify-content:space-between;
background-color:#788;
width:700px;
height:500px;
margin: 0 auto; 
box-sizing: border-box; 
background-color:#fff;
`
const ConterItem = styled.p
`
color:#fff;
text-align:center; 
font-family:"Read";
width:250px;
background-color:#559;
padding 10px;
box-sizing:border-box;
margin:40px;
`
function content() {
  return (
  
  <>
  <Content>
    <ConterItem>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </ConterItem>
    <ConterItem>
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </ConterItem>
  
  </Content>
  </>
    );
}

export default content;