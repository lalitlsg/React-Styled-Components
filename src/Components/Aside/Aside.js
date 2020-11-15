import React from "react";
import styled from "styled-components";

import { List, ListItems } from "../Menu/Menu";

const AsideListItems = styled(ListItems)`
  display: block;
`;

function Aside() {
  return (
    <List>
      <AsideListItems>Users</AsideListItems>
      <AsideListItems>Admin</AsideListItems>
      <AsideListItems>Projects</AsideListItems>
      <AsideListItems>Provider</AsideListItems>
      <AsideListItems>Profiles</AsideListItems>
      <AsideListItems>Companies</AsideListItems>
    </List>
  );
}

export default Aside;
