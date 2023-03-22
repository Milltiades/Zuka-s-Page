import React from "react";
import styled from "styled-components";


export default function FooterComponent({ name }: { name: any }) {
  return (
    <Footer>
      {!name ? (
        <div>
          <FooterH1>Zuka Jiqia</FooterH1>
          <div>
            <Contact>
              <PP>phone :</PP>
              <ContactP>+995 591 963 676</ContactP>
            </Contact>
            <Contact>
              <PP>email :</PP>
              <ContactP>ika.jiqia622@gmail.com</ContactP>
            </Contact>
          </div>
          <SocMedia>
            <Button>
              <Img src="/assets/fb.svg" alt="" />
            </Button>
          </SocMedia>
          
          <Line />
          <P>© Copyright 2023. Made by Gedeon Kakulia</P>
        </div>
      ) : null}
    </Footer>
  );
}

const FooterH1 = styled.h1`
  @media (width > 1200px){
    font-size: 60px;
  }
`
const PP = styled.p`
  @media (width > 1200px) {
    font-size: 30px;
  }
`

const ContactP = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: yellow;
  }
   @media (width > 1200px) {
    font-size: 30px;
  }
`;
const P = styled.p`
  margin-top: 44px;
  @media (width > 1200px) {
    font-size: 20px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: white;
  margin-top: 34px;
`;
const Button = styled.button`
  border: 1px solid white;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 2px;
  margin-top: 15px;
  :hover {
    opacity: 0.5;
  }
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  @media (width > 1200px) {
    width: 25%;
  }
`;
const Footer = styled.div`
  background: black;
  color: white;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  @media (width > 1200px){
    padding: 60px 160px;
  }
`;

const SocMedia = styled.div``;
