import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateMenu } from "../store/nameSlice";
import AudioPlayer from "./MusicComponent";

export default function HeaderComponent({
  navigate,
  dispatch,
  name,
  refHome,
  geo,
  setGeo
}: {
  navigate: any;
  dispatch: any;
  name: any;
  refHome: any;
  geo : any;
  setGeo : any
}) {
  return (
    <div style={{ background: "white" }}>
      <Header>
        <ButtonLogo
          onClick={() => {
            navigate("/");
            dispatch(updateMenu(false));
          }}
        >
          <Img src="/assets/lifter.svg" alt="" />
        </ButtonLogo>
        <AudioPlayer />
        <ButtonNav
          display={window.innerWidth > 1199 ? "none" : "flex"}
          onClick={() => {
            dispatch(updateMenu(!name));
            navigate(!name ? "/menu" : "/");
          }}
        >
          {!name ? (
            <Icon src="/assets/menu.svg" alt="" />
          ) : (
            <Icon src="/assets/x.svg" alt="" />
          )}
        </ButtonNav>
        <MenuBar display={window.innerWidth > 1199 ? "flex" : "none"}>
          <Ul>
            <Li>
              <Button
                className="btn"
                onClick={() => {
                  navigate("/");
                  dispatch(updateMenu(false));
                }}
              >
                {geo ? "მთავარი" : "Home"}
                
              </Button>{" "}
            </Li>
            <Li>
              <Button
                className="btn"
                onClick={() => {
                  navigate("movies");
                  dispatch(updateMenu(false));
                }}
              >
                {geo ? "ტურნირები " : "Tournaments"}
                
              </Button>{" "}
            </Li>
            <Li
             
            >
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <LanDivGeorgia onClick={() => setGeo(true)} />
                <LanDivBritain onClick={() => setGeo(false)} />
              </div>
            </Li>
          </Ul>
        </MenuBar>
      </Header>
    </div>
  );
}


const LanDivGeorgia = styled.button`
    width: 30px;
  height: 30px;
  background-image: url("/assets/georgia.png");
  background-repeat:no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
 border-radius: 50%;
 margin-left: 25px;

`
const LanDivBritain = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("/assets/britain.png");
  background-repeat:no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
 border-radius: 50%;
 margin-left: 15px;
 
`

const Ul = styled.ul`
display:flex;
flex-direction: row;
align-items: center;

`
const Li = styled.li`
list-style:none;
align-items: center;
`;
const Button = styled.button`
border: none;
background: transparent;
margin-left: 25px;
font-size: 30px;
cursor: pointer;
`;

const MenuBar = styled.div<any>`
  display: ${(props) => props.display};
`;
const Img = styled.img`
  width: 40px;
`;
const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  @media (width > 1200px) {
    padding: 20px 160px;
  }
`;

const ButtonLogo = styled.button`
  color: black;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3 ease;
  font-size: 30px;
  line-height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonNav = styled.button<any>`
  display: ${(props) => props.display};
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
