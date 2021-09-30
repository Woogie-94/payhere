import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/header_logo.png";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <img src={LogoImg} alt="payhere" />
        </Link>
      </HeaderLogo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const HeaderLogo = styled.h1`
  width: 150px;

  img {
    width: 100%;
  }
`;

export default Header;
