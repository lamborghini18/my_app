import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLinkColorWhite } from "../../assets/colors/colors";

const Header = ({ isAuth, login, logout }) => {
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
            {isAuth ? (
              <div>
                <Button color="inherit" onClick={logout}>
                  {login}
                </Button>
              </div>
            ) : (
              <Button color="inherit">
                <StyledNavLink to={"/login"}> Login</StyledNavLink>
              </Button>
            )}
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

const StyledNavLink = styled(NavLink)`
  color: ${NavLinkColorWhite};
  text-decoration: none;
`;
