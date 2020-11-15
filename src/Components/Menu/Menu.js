import React from "react";
import styled from "styled-components";

export const List = styled.ul`
  padding: 10px;
`;
export const ListItems = styled.li`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  margin-left: 5px;
  :hover {
    background-color: #b2abd3;
  }
`;

function Menu() {
  return (
    <List>
      <ListItems>Home</ListItems>
      <ListItems>Blogs</ListItems>
      <ListItems>Contact</ListItems>
      <ListItems>About</ListItems>
    </List>
  );
}

export default Menu;
