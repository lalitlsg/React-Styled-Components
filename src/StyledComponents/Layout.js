import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ dark }) => (dark ? "#000" : "#f2f2f2")};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(70px, min-content));
  grid-template-areas:
    "header header header header"
    "menu menu menu menu"
    "aside main main main"
    "aside main main main "
    "footer footer footer footer";
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-areas:
      "header header header header"
      ". . . ."
      "menu menu menu menu"
      "aside aside aside aside"
      "main main main main "
      "footer footer footer footer";
  }
`;

export const HeaderItem = styled.header`
  grid-area: header;
  position: fixed;
  width: 100%;
`;

export const MenuItem = styled.menu`
  grid-area: menu;
  border-bottom: 1px solid;
`;

export const AsideItem = styled.aside`
  grid-area: aside;
  border-right: 1px solid;
  min-height: 200px;
  @media screen and (max-width: 500px) {
    border-right: none;
    border-bottom: 1px solid;
  }
`;

export const MainItem = styled.main`
  grid-area: main;
`;
export const FooterItem = styled.footer`
  border-top: 1px solid;

  grid-area: footer;
`;
