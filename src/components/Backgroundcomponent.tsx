import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SwiperComponent from "./SwiperComponent";



export default function Backgroundcomponent({
  refHome,
  navigate,
  refAbout,
  geo,
  setGeo
}: {
  refHome: any;
  navigate: any;
  refAbout: any;
  geo : any;
  setGeo : any
}) {
  const refSuccess = useRef<any>();
  return (
    <>
    <DivMain1>
      <Div />
      <Content >
        <H1>{geo? "ზუკა ჯიქია" :  "Zuka Jiqia"}</H1>
        <P>{geo? "ქართველი მძლეოსანი უზარმაზარი ამბიციებით" : "is a Georgian weightlifter with big and huge ambitions"}</P>
        <Button
          onClick={() =>
            refSuccess.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          {geo? "გაიგე მეტი" :  "Get More"}
        </Button>
      </Content>
      </DivMain1>
      
      <SuccessDiv ref={refSuccess}>
        <SuccessH1>{geo? "წარმატების ისტორია" : "Success Stories"}</SuccessH1>
        
        <SuccessP>{geo? "ზუკა ამომავალი ვარსკვლავია მძლეოსნობაში, ზუგდიდიდან. ის მხოლოდ 8 წლისაა. სპორტსმენი რომელიც მომართულია გამარჯვებისკენ"  : "Zuka is a future shining star in wheightlifting, from zugdidi, Georgia. He is only 8 years old. Sportsman, who is eager and determined to win!"  }</SuccessP>
        <Button onClick={() => navigate("movies")}>
          {geo? "ტურნირები" :  "Tournaments"}
        </Button>
        
      </SuccessDiv>
      <SwiperComponent/>
      <DivLine>
        <DivLineH1> FUTURE WORLD CHAMPION!!! </DivLineH1>
      </DivLine>
     

    </>
  );
}

const DivMain1 = styled.div`
  @media (width > 1200px) {
    display: flex;
    flex-direction: row;
  }
`
const SuccessP = styled.p`
  color: white;
  font-size: 25px;
  line-height: 30px;
  overflow: hidden;
 margin-top: 30px;
`
const SuccessDiv = styled.div`
  width: 100%;
  background: #202123;
  color: white;
  padding: 30px 24px;
  margin-top: 140px;
  @media (width > 1200px) {
    margin-top: 0;
    padding: 60px 160px;
  }
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
  font-size: 30px;
  line-height: 30px;
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
  @media (width > 1200px){
    margin-bottom: 140px;
  }
`;

const P = styled.p`
  color: black;
  font-size: 25px;
  line-height: 30px;
  overflow: hidden;
`;

const H1 = styled.h1`
  color: #e80711;
  font-size: 60px;
  line-height: 70px;
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
    width: 50vw;
    height: 70vh;


  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 24px 0;
  height: auto;
  overflow: hidden;
  @media (width > 1200px){
    width: 50vw;
    margin-top: 230px;
    padding: 0 165px 0 100px;
  }
`;