import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ListItem, Paper } from "@material-ui/core";
import { NavLinkGreyColor, textColorBlue } from "../../assets/colors/colors";
import AccountBoxTwoToneIcon from "@material-ui/icons/AccountBoxTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";

const Navbar = (props) => {
  return (
    <Paper>
      <ListItem button>
        <AccountBoxTwoToneIcon />
        <StyledNavlink to="/profile">Profile</StyledNavlink>
      </ListItem>
      <ListItem button>
        <EmailTwoToneIcon />
        <StyledNavlink to="/dialogs">Messages</StyledNavlink>
      </ListItem>
      <ListItem button>
        <PeopleAltTwoToneIcon />
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
