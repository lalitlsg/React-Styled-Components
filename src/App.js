import React, { useState } from "react";
import "./App.css";
import {
  Wrapper,
  HeaderItem,
  MainItem,
  AsideItem,
  MenuItem,
  FooterItem
} from "./StyledComponents/Layout";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Aside from "./Components/Aside/Aside";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [dark, setDark] = useState(false);
  const changeToDark = () => setDark(!dark);
  return (
    <Wrapper dark={dark}>
      <HeaderItem>
        <Header clickHandler={changeToDark} />
      </HeaderItem>
      <MenuItem>
        <Menu />
      </MenuItem>
      <AsideItem>
        <Aside />
      </AsideItem>
      <MainItem>
        <Main />
      </MainItem>
      <FooterItem>
        <Footer />
      </FooterItem>
    </Wrapper>
  );
}

export default App;
