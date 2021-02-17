import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileBlock}>
      {/* <div className={s.picture}>
        <img src="https://img4.goodfon.ru/original/2560x1024/d/43/tsvety-vesna-tsvetenie-vetki-fon.jpg" />
      </div> */}

      <div className={s.descriptionBlock}>
        <div>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
          />
        </div>
        <div className={s.info}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
          <span>Контактная информация:</span>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.mainLink}</div>

          <div>
            {" "}
            Поиск работы:
            {props.profile ? (
              <p key={props.profile.lookingForAJob == true}>Yes </p>
            ) : (
              <p key={props.profile.lookingForAJob == false}>No </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <ProfileStatus status={"hello"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
