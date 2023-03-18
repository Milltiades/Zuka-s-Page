import React from "react";
import styled from "styled-components";

export default function FooterComponent({
    name
} : {
    name : any
}) {
  return (
    <Footer>
        {!name ?  <div>
      <h1>Zuka Jiqia</h1>
      <div>
        <Contact>
          <p>phone :</p>
          <ContactP>+995 591 963 676</ContactP>
        </Contact>
        <Contact>
          <p>email :</p>
          <ContactP>example@mail.ru</ContactP>
        </Contact>
      </div>
      <SocMedia>
        <Button>
            <Img src="/assets/fb.svg" alt="" />
        </Button>
        
      </SocMedia>
      <Line/>
      <P>© Copyright 2023. Made by Gedeon Kakulia</P>
      </div> : null}
    </Footer>
  );
}

const ContactP = styled.p`
cursor: pointer;
transition: all .3s ease;
    :hover {
        color: yellow;
    }
`
const P = styled.p`
    margin-top: 44px;
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    opacity: 0.5;
    background: white;
    margin-top: 34px;
`
const Button = styled.button`
    border: 1px solid white;
    background: white;
    cursor: pointer;
    transition: all .3s ease;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 2px;
    margin-top: 15px;
    :hover {
        opacity: 0.5;
    }
`
const Img = styled.img`
    width: 20px;
    height: 20px;
`
const Contact = styled.div`
  display: fle;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`;
const Footer = styled.div`
  background: black;
  color: white;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
`;

const SocMedia = styled.div`
    
`