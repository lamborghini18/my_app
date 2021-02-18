import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import styled from "styled-components";
import { textColorBlue } from "../../../assets/colors/colors";
import { text_24, heading_30 } from "../../../assets/fonts/fonts";

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <>
      <DescriptionBlock>
        <StyledAvatar
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
        />
        <StyledInfoBlock>
          <StyledFullName>{profile.fullName}</StyledFullName>
          <StyledInfo>{profile.lookingForAJobDescription}</StyledInfo>
          <StyledInfo>{profile.contacts.github}</StyledInfo>
          <StyledInfo>{profile.contacts.vk}</StyledInfo>
          <StyledInfo>{profile.contacts.facebook}</StyledInfo>
          <StyledInfo>{profile.contacts.instagram}</StyledInfo>
          <StyledInfo>{profile.contacts.twitter}</StyledInfo>
          <StyledInfo>{profile.contacts.website}</StyledInfo>
          <StyledInfo>{profile.contacts.youtube}</StyledInfo>
          <StyledInfo>{profile.contacts.mainLink}</StyledInfo>
          <StyledInfo>
            Поиск работы:
            {profile ? (
              <span key={profile.lookingForAJob == true}>Yes </span>
            ) : (
              <span key={profile.lookingForAJob == false}>No </span>
            )}
          </StyledInfo>
        </StyledInfoBlock>
      </DescriptionBlock>
      <div>
        <ProfileStatus status={"hi"} />
      </div>
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
  background-color: rgba(19, 125, 167, 0.171);
  color: rgba(4, 72, 117, 0.918);
`;
const StyledInfo = styled.div`
  color: ${textColorBlue};
  ${text_24};
`;
const StyledFullName = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;
