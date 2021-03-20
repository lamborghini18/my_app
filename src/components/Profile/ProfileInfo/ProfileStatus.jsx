import React, { useEffect, useState } from "react";

const ProfileStatus = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState(status);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(newStatus);
  };

  useEffect(() => {
    setNewStatus(newStatus);
  }, [newStatus]);

  return (
    <div>
      {!editMode && (
        <div>
          <div onDoubleClick={activateEditMode}>{status || "no status"}</div>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={(event) => {
              setNewStatus(event.target.value);
            }}
            value={newStatus}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
