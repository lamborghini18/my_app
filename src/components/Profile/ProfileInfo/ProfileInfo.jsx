import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import styled from "styled-components";
import { textColorBlue, InfoBlockColor } from "../../../assets/colors/colors";
import { text_22, heading_30 } from "../../../assets/fonts/fonts";
import ProfileDataForm from "./ProfileDataForm";
import { Button } from "@material-ui/core";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const getUserInfo = (profile) => {
    const contactsKeys = Object.keys(profile.contacts);
    const result = contactsKeys.map((key) => {
      return (
        <UserInfo key={key}>
          <InfoString>{`${key}: `}</InfoString>
          <div>{`${profile.contacts[key]}`}</div>
        </UserInfo>
      );
    });
    return result;
  };

  const ProfileData = ({
    profile,
    isOwner,
    goToEditMode,
    status,
    updateStatus,
  }) => {
    return (
      <>
        <FullName>{profile.fullName}</FullName>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <UserInfo>
          {`Looking for a job: ${profile.lookingForAJob ? "Yes" : "No"}`}
        </UserInfo>

        {profile.lookingForAJob && (
          <UserInfo>{`My professional skils: ${profile.lookingForAJobDescription}`}</UserInfo>
        )}
        <UserInfo>{`About me: ${profile.aboutMe}`}</UserInfo>

        {getUserInfo(profile)}
        {isOwner && (
          <Button onClick={goToEditMode} variant="contained" color="primary">
            edit info
          </Button>
        )}
      </>
    );
  };

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <>
      <DescriptionBlock>
        <PhotoBlock>
          <UserAvatar src={profile?.photos?.large || userPhoto} />
          {isOwner && (
            <>
              <UploadItem>
                <input
                  type={"file"}
                  onChange={onMainPhotoSelected}
                  id="contained-button-file"
                />
              </UploadItem>
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Change photo
                </Button>
              </label>
            </>
          )}
        </PhotoBlock>

        <InfoBlock>
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
              getUserInfo={getUserInfo}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
              status={status}
              updateStatus={updateStatus}
            />
          )}
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
const InfoString = styled.div`
  width: 200px;
`;
const PhotoBlock = styled.div`
  grid-area: ava;
`;
const UploadItem = styled.div`
  display: none;
`;
