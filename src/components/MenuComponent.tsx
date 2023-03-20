import React from "react";
import styled from "styled-components";
import { updateMenu } from "../store/nameSlice";


export default function MenuComponent({
  refHome,
  navigate,
  dispatch,
  refAbout,
  geo,
  setGeo
 
}: {
  refHome: any;
  navigate: any;
  dispatch: any;
  refAbout: any
  geo : any;
  setGeo : any
 
}) {


  return (
    <MenuDiv>
      <Ul>
        <Li>
          <Button className="btn"
            onClick={() => {
              navigate("/");
              dispatch(updateMenu(false))
            }}
          >
            
            {geo ? "მთავარი" : "Home"} 
            <Img className="img" src="/assets/gantel.svg" alt="" />
          </Button>{" "}
        </Li>
        <Li>
          <Button  className="btn" onClick={() => {
              navigate("movies");
              dispatch(updateMenu(false))
              ;
            }}>
              
              {geo? "ტურნირები ": "Tournaments"}
              <Img className="img" src="/assets/gantel.svg" alt="" />
              </Button>{" "}
              
        </Li>
        <Li style={{color: "white", display: "flex", flexDirection: "row", fontSize:"35px", alignItems:"center", justifyContent:"space-between"}}>
          {geo? "ენა ": "Language"}
          <div style={{display: "flex", flexDirection:"row", alignItems:"flex-end"}}>
          <LanDivGeorgia onClick={() => setGeo(true)}/>
          <LanDivBritain onClick={() => setGeo(false)}/>
          </div>
          
        </Li>
      </Ul>
    </MenuDiv>
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
const Img = styled.img`
display: none;
  width: 40px;
  height: 40px;
  :hover{
display: flex;
  }
`

const MenuDiv = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  background: black;
  position: absolute;
  top: 60px;
`;

const Li = styled.li`
  margin-top: 15px;
  overflow: hidden;
`;

const Ul = styled.ul`
  width: 100%;
  text-align: end;
  padding: 30px 24px;
`;

const Button = styled.button`
width: 100%;
overflow: hidden;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  list-style: none;
  font-size: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  :hover .img {
    display: flex;
  }
`;