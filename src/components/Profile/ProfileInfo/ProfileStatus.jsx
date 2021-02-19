import React, { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode.bind()}>{status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode.bind()}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
