import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";

const Navbar = (props) => {
  return (
    <NavbarBlock>
      <ListItem button>
        <StyledNavlink to="/profile">Profile</StyledNavlink>
      </ListItem>
      <ListItem button>
        <StyledNavlink to="/dialogs">Messages</StyledNavlink>
      </ListItem>
      <ListItem button>
        <StyledNavlink to="/users">Users</StyledNavlink>
      </ListItem>
      <ListItem button>
        <StyledNavlink to="/news">News</StyledNavlink>
      </ListItem>
      <ListItem button>
        <StyledNavlink to="/music">Music</StyledNavlink>
      </ListItem>
      <ListItem button>
        <StyledNavlink to="settings">Settings</StyledNavlink>
      </ListItem>
    </NavbarBlock>
  );
};

export default Navbar;

const NavbarBlock = styled.div`
  grid-area: nav;
  background-color: rgba(19, 125, 167, 0.363);
  padding: 20px;
`;

const StyledNavlink = styled(NavLink).attrs(() => ({}))`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  &:focus {
    color: rgba(6, 9, 141, 0.856);
  }
`;
