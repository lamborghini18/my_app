import React, { useState } from "react";

const ProfileStatus = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status || "no status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={(event) => {
              updateStatus(event.target.value);
            }}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
