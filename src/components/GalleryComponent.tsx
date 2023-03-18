import React from "react";
import styled from "styled-components";

export default function GalleryComponent(
    
) {
  return (
    
    <Div >
      <Img src="/assets/zuka3.jpg" alt="" />
      <Img src="/assets/zuka3.jpg" alt="" />
      <Img src="/assets/zuka3.jpg" alt="" />
      <Img src="/assets/zuka3.jpg" alt="" />
      <Img src="/assets/zuka3.jpg" alt="" />


        
      
    </Div>
    
  );
}

const Div = styled.div`
  width: 100%;
  overflow: visible;
  height: 100vh;
  background: #202123;
  padding: 118px 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  
  
`;

const Img = styled.img`
    width: 45%;
    
    margin-bottom: 24px;
    box-shadow: -50px -50px 5px -40px darkgray, 50px 50px 5px -40px darkgray;
`






