import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateMenu } from "../store/nameSlice";

export default function HeaderComponent(
  {navigate, dispatch, name, refHome} : {navigate:any, dispatch: any , name : any , refHome : any}
) {
  return (
    <div style={{background: "white"}}>
      <Header>
        <ButtonLogo  onClick={() => {
          navigate('/')
          dispatch(updateMenu(false))
        }}>
          <Img src="/assets/lifter.svg" alt="" />
        </ButtonLogo>
        <ButtonNav onClick={() => {
          dispatch(updateMenu(!name))
          navigate(!name? "/menu" : "/")
          }}>
          {!name ? (
            <Icon src="/assets/menu.svg" alt="" />
          ) : (
            <Icon src="/assets/x.svg" alt="" />
          )}
        </ButtonNav>
      </Header>
      
    </div>
  );
}

const Img = styled.img`
  width: 40px;
`
const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
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

const ButtonNav = styled.button`
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
