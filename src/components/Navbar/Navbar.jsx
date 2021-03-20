import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ListItem, Paper } from "@material-ui/core";
import { NavLinkGreyColor, textColorBlue } from "../../assets/colors/colors";
import {
  AccountBoxTwoTone,
  EmailTwoTone,
  PeopleAltTwoTone,
} from "@material-ui/icons";

const Navbar = (props) => {
  return (
    <Paper>
      <ListItem button>
        <AccountBoxTwoTone />
        <NavbarItem to="/profile">Profile</NavbarItem>
      </ListItem>
      <ListItem button>
        <EmailTwoTone />
        <NavbarItem to="/dialogs">Messages</NavbarItem>
      </ListItem>
      <ListItem button>
        <PeopleAltTwoTone />
        <NavbarItem to="/users">Users</NavbarItem>
      </ListItem>
      <ListItem button>
        <NavbarItem to="/news">News</NavbarItem>
      </ListItem>
      <ListItem button>
        <NavbarItem to="/music">Music</NavbarItem>
      </ListItem>
      <ListItem button>
        <NavbarItem to="settings">Settings</NavbarItem>
      </ListItem>
    </Paper>
  );
};

export default Navbar;

const NavbarItem = styled(NavLink).attrs(() => ({}))`
  padding-left: 10px;
  color: ${textColorBlue};
  text-decoration: none;
  font-weight: 700;
  &:focus {
    color: ${NavLinkGreyColor};
  }
`;
