import React from "react";
import styled from "styled-components";
import { updateMenu } from "../store/nameSlice";


export default function MenuComponent({
  refHome,
  navigate,
  dispatch,
  refAbout
 
}: {
  refHome: any;
  navigate: any;
  dispatch: any;
  refAbout: any
 
}) {


  return (
    <MenuDiv>
      <Ul>
        <Li>
          <Button
            onClick={() => {
              navigate("/");
              dispatch(updateMenu(false))
            }}
          >
            Home
          </Button>{" "}
        </Li>
        
        <Li>
          <Button onClick={() => {
              navigate("gallery");
              dispatch(updateMenu(false))
              ;
            }}>Gallery</Button>{" "}
        </Li>

        <Li>
          <Button onClick={() => {
              navigate("movies");
              dispatch(updateMenu(false))
              ;
            }}>Tournaments</Button>{" "}
        </Li>
        
      </Ul>
    </MenuDiv>
  );
}

const MenuDiv = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  background: black;
  position: absolute;
  top: 88px;
`;

const Li = styled.li`
  margin-top: 15px;
`;

const Ul = styled.ul`
  width: 100%;
  text-align: end;
  padding: 30px 24px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  list-style: none;
  font-size: 35px;
  :hover {
    opacity: 0.5;
  }
`;
