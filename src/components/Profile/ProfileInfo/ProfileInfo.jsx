import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import styled from "styled-components";
import { textColorBlue, InfoBlockColor } from "../../../assets/colors/colors";
import { text_22, heading_30 } from "../../../assets/fonts/fonts";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  const getUserInfo = (profile) => {
    const contactsKeys = Object.keys(profile.contacts);
    const result = contactsKeys.map((key) => {
      return (
        <StyledInfo>
          <StyledSocial>{`${key}: `}</StyledSocial>
          <div>{`${profile.contacts[key]}`}</div>
        </StyledInfo>
      );
    });
    return result;
  };

  return (
    <>
      <DescriptionBlock>
        <StyledAvatar src={profile?.photos?.large || userPhoto} />
        <StyledInfoBlock>
          <StyledFullName>{profile.fullName}</StyledFullName>
          <ProfileStatus status={status} updateStatus={updateStatus} />
          {getUserInfo(profile)}
          <StyledInfo>
            {`Поиск работы: ${profile.lookingForAJob ? "Yes" : "No"}`}
          </StyledInfo>
          <StyledInfo>{profile.lookingForAJobDescription}</StyledInfo>
        </StyledInfoBlock>
      </DescriptionBlock>
    </>
  );
};

export default ProfileInfo;

const DescriptionBlock = styled.div`
  margin: 10px;
  display: grid;
  grid-template-areas: "ava info";
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
`;
const StyledAvatar = styled.img`
  grid-area: ava;
  width: 300px;
`;
const StyledInfoBlock = styled.div`
  padding: 20px;
  grid-area: info;
  background-color: ${InfoBlockColor};
  color: ${textColorBlue};
`;
const StyledInfo = styled.div`
  color: ${textColorBlue};
  ${text_22};
  display: flex;
  flex-direction: row;
`;
const StyledFullName = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;
const StyledSocial = styled.div`
  width: 200px;
`;
