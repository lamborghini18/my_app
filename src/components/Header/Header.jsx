import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ isAuth, login }) => {
  return (
    <HeaderBlock>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <TypographyBlock>
            <Typography variant="h6">Profile</Typography>
          </TypographyBlock>
          <LoginBlock>
            <Button color="inherit">
              {isAuth ? login : <NavLink to={"/login"}> Login</NavLink>}
            </Button>
          </LoginBlock>
        </Toolbar>
      </AppBar>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  grid-area: header;
`;
const TypographyBlock = styled.div`
  margin-left: 20px;
`;

const LoginBlock = styled.div`
  margin-right: 20px;
  text-decoration: none;
  position: absolute;
  right: 0;
`;
