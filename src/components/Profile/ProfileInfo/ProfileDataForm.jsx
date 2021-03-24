import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";
import { Textarea } from "../../common/FormsControls/FormsControls";
import styled from "styled-components";
import { textColorBlue, ErrorRedColor } from "../../../assets/colors/colors";
import { text_22, heading_30 } from "../../../assets/fonts/fonts";
import SaveIcon from "@material-ui/icons/Save";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FullName>
        <InfoString>Full name:</InfoString>
        <Field
          component={Textarea}
          name="fullName"
          placeholder="Name"
          label="Name"
        />
      </FullName>
      <UserInfo>
        <InfoString>Job search:</InfoString>
        <Field type={"checkbox"} name={"lookingForAJob"} component={"input"} />
        Yes
      </UserInfo>

      <UserInfo>
        <InfoString>My professional skils:</InfoString>
        <Field
          component={Textarea}
          name="lookingForAJobDescription"
          placeholder="My professional skils"
          label="My professional skils"
        />
      </UserInfo>
      <UserInfo>
        <InfoString> About me:</InfoString>

        <Field
          component={Textarea}
          name="aboutMe"
          placeholder="About me"
          label="About me"
        />
      </UserInfo>

      {Object.keys(profile.contacts).map((key) => {
        return (
          <UserInfo key={key}>
            <InfoString>{`${key}: `}</InfoString>
            <Field
              component={Textarea}
              name={"contacts." + key}
              placeholder={`${key}`}
            />
          </UserInfo>
        );
      })}
      {error && <ErrorText>{error}</ErrorText>}
      <Button
        type="submit"
        endIcon={<SaveIcon />}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </form>
  );
};

export default reduxForm({ form: "editProfile" })(ProfileDataForm);

const UserInfo = styled.div`
  color: ${textColorBlue};
  ${text_22};
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const FullName = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;

const InfoString = styled.div`
  width: 200px;
`;
const ErrorText = styled.div`
  color: ${ErrorRedColor};
`;
