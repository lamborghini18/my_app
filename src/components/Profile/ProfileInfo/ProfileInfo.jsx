import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import styled from "styled-components";
import { textColorBlue, InfoBlockColor } from "../../../assets/colors/colors";
import { text_22, heading_30 } from "../../../assets/fonts/fonts";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const getUserInfo = (profile) => {
    const contactsKeys = Object.keys(profile.contacts);
    const result = contactsKeys.map((key) => {
      return (
        <UserInfo>
          <SocialNetworks>{`${key}: `}</SocialNetworks>
          <div>{`${profile.contacts[key]}`}</div>
        </UserInfo>
      );
    });
    return result;
  };

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  return (
    <>
      <DescriptionBlock>
        <UserAvatar src={profile?.photos?.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <InfoBlock>
          <FullName>{profile.fullName}</FullName>
          <ProfileStatus status={status} updateStatus={updateStatus} />
          {getUserInfo(profile)}
          <UserInfo>
            {`Поиск работы: ${profile.lookingForAJob ? "Yes" : "No"}`}
          </UserInfo>
          <UserInfo>{profile.lookingForAJobDescription}</UserInfo>
        </InfoBlock>
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
const UserAvatar = styled.img`
  grid-area: ava;
  width: 300px;
`;
const InfoBlock = styled.div`
  padding: 20px;
  grid-area: info;
  background-color: ${InfoBlockColor};
  color: ${textColorBlue};
`;
const UserInfo = styled.div`
  color: ${textColorBlue};
  ${text_22};
  display: flex;
  flex-direction: row;
`;
const FullName = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;
const SocialNetworks = styled.div`
  width: 200px;
`;
