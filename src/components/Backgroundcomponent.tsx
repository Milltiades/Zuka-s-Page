import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



export default function Backgroundcomponent({
  refHome,
  navigate,
  refAbout,
}: {
  refHome: any;
  navigate: any;
  refAbout: any;
}) {
  const refSuccess = useRef<any>();
  return (
    <>
      <Div />
      <Content >
        <H1>Zuka Jiqia</H1>
        <P>is a Georgian weightlifter with big and huge ambitions</P>
        <Button
          onClick={() =>
            refSuccess.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get More
        </Button>
      </Content>
      
      <SuccessDiv ref={refSuccess}>
        <SuccessH1>Success Stories</SuccessH1>
        
        <SuccessP>Zuka is a future shining star in wheightlifting, from zugdidi,
          Georgia. He is only 8 years old. Sportsman, who is eager and determined to
          win!</SuccessP>
        <Button onClick={() => navigate("movies")}>
          Tournaments
        </Button>
        <Button onClick={() => navigate("gallery")}>Gallery</Button>
      </SuccessDiv>
      <DivLine>
        <DivLineH1>FUTURE WORLD CHAMPION!!! </DivLineH1>
      </DivLine>
     

    </>
  );
}

const SuccessP = styled.p`
  color: white;
  font-size: 30px;
  line-height: 40px;
  overflow: hidden;
 margin-top: 30px;
`
const SuccessDiv = styled.div`
  width: 100%;
  background: #202123;
  color: white;
  padding: 30px 24px;
  margin-top: 140px;
`;
const SuccessH1 = styled.h1``;
const SecondButton = styled.button`
  margin-left: 24px;
  width: 200px;
  height: 66px;
  border: none;
  background: #e80711;
  color: white;
  font-size: 40px;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  :hover {
    background: #e75b62;
  }



`;
const SecondP = styled.p`
  
  color: white;
  font-size: 30px;
  line-height: 40px;
  overflow: hidden;
  margin: 40px 24px;
`;
const SecondBackground = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;
const BluredBackground = styled.div`
  background-image: url("/assets/zuka2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  background-position-x: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  filter: blur(8px);
`;
const DivLineH1 = styled.h1`
  color: white;

  overflow: hidden;
 animation: marquee 10s linear infinite;
  overflow: hidden;

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
 
`;

const DivLine = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #e80711;
  overflow: hidden;
`;
const Button = styled.button`
border-radius: 30px 0 30px 0;
  margin-top: 40px;
  width: 200px;
  height: 66px;
  border: none;
  background: #e80711;
  color: white;
  font-size: 40px;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  :hover {
    background: #e75b62;
  }
`;

const P = styled.p`
  color: black;
  font-size: 40px;
  line-height: 40px;
  overflow: hidden;
`;

const H1 = styled.h1`
  color: #e80711;
  font-size: 80px;
  line-height: 100px;
  overflow: hidden;
`;

const Div = styled.div`
  background-image: url("/assets/zuka.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  background-position-x: 50%;
  overflow: hidden;

  @media (width > 1200px) {
    background-size: cover;
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 24px 0;
  height: auto;
  overflow: hidden;
`;
