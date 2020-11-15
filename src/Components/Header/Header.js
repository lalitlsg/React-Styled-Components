import React from "react";
import styled from "styled-components";
import lalitprofile from "../../Images/lalit.png";

const Appbar = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-between;
  background-color: #5051c9;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

const Brand = styled.h1`
  font-size: 2em;
  margin: 10px 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const CheckBox = styled.input.attrs(() => ({
  type: "checkbox"
}))`
  cursor: pointer;
  width: 30px;
  height: 20px;
`;

const Label = styled.span`
  padding-left: 10px;
`;

const ThemeProfile = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 350px) {
    justify-content: center;
  }
`;

function Header({ clickHandler }) {
  return (
    <Appbar>
      <Brand>@Lalitlsg</Brand>
      <ThemeProfile>
        <CheckBox onClick={clickHandler}></CheckBox>
        <Label>Dark Theme</Label>
        <Image src={lalitprofile} />
      </ThemeProfile>
    </Appbar>
  );
}

export default Header;
