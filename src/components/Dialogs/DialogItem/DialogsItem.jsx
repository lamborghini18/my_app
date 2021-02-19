import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DialogItem = ({ avatarURL, name, id }) => (
  <>
    <StyledNavlink to={`/dialogs/${id}`}>
      <StyledAvatar src={avatarURL} />
      <TextName>{name}</TextName>
    </StyledNavlink>
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
`;
