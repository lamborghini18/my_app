import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import styled from "styled-components";
import TextStyle from "../../../assets/fonts/TextStyle";
import BigTextStyle from "../../../assets/fonts/BigTextStyle";

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
          <BigTextStyle>{profile.fullName}</BigTextStyle>
          <TextStyle>{profile.lookingForAJobDescription}</TextStyle>
          <TextStyle>{profile.contacts.github}</TextStyle>
          <TextStyle>{profile.contacts.vk}</TextStyle>
          <TextStyle>{profile.contacts.facebook}</TextStyle>
          <TextStyle>{profile.contacts.instagram}</TextStyle>
          <TextStyle>{profile.contacts.twitter}</TextStyle>
          <TextStyle>{profile.contacts.website}</TextStyle>
          <TextStyle>{profile.contacts.youtube}</TextStyle>
          <TextStyle>{profile.contacts.mainLink}</TextStyle>
          <TextStyle>
            Поиск работы:
            {profile ? (
              <span key={profile.lookingForAJob == true}>Yes </span>
            ) : (
              <span key={profile.lookingForAJob == false}>No </span>
            )}
          </TextStyle>
        </StyledInfoBlock>
      </DescriptionBlock>
      <div>
        <ProfileStatus status={"hi"} />
      </div>
    </>
  );
};

export default ProfileInfo;

const FullName = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: rgba(6, 9, 141, 0.856);
`;
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
