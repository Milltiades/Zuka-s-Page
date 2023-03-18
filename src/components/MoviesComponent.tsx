import React from "react";
import styled from "styled-components";

export default function MoviesComponent() {
  return (
    <Div>
      <Item>
        <H1>Zugdidi 2023</H1>
        <P>
        In the clean & jerk portion, completed a 44kg lift on his third attempt
        </P>
        <Video src="/assets/videos/akvra44kg.mp4" controls />
      </Item>
      <Item>
        <H1>Zugdidi 2023</H1>
        <P>
        In the clean snatch portion, completed a 35kg lift on his third attempt
        </P>
        <Video src="/assets/videos/atatsi35kg.mp4" controls />
      </Item>
    </Div>
  );
}


const P = styled.p`
   color: white; 
   font-size: 20px;
`
const H1 = styled.h1`
  color: white;
`;
const Div = styled.div`
  padding: 88px 48px;
  background: #202123;
`;
const Item = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Video = styled.video`
  margin-top: 15px;
  width: 100%;
  height: 250px;
  
`;
