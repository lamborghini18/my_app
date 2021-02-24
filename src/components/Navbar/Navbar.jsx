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
        <StyledNavlink to="/profile">Profile</StyledNavlink>
      </ListItem>
      <ListItem button>
        <EmailTwoTone />
        <StyledNavlink to="/dialogs">Messages</StyledNavlink>
      </ListItem>
      <ListItem button>
        <PeopleAltTwoTone />
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
    </Paper>
  );
};

export default Navbar;

const StyledNavlink = styled(NavLink).attrs(() => ({}))`
  padding-left: 10px;
  color: ${textColorBlue};
  text-decoration: none;
  font-weight: 700;
  &:focus {
    color: ${NavLinkGreyColor};
  }
`;
