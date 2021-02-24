import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavLinkDarkGreyColor } from "../../../assets/colors/colors";
import { ListItem } from "@material-ui/core";

const DialogItem = ({ avatarURL, name, id }) => (
  <>
    <ListItem button>
      <StyledNavlink to={`/dialogs/${id}`}>
        <StyledAvatar src={avatarURL} />
        <TextName>{name}</TextName>
      </StyledNavlink>
    </ListItem>
  </>
);

export default DialogItem;

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const TextName = styled.div`
  padding-left: 10px;
`;
const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${NavLinkDarkGreyColor};
  text-decoration: none;
`;
