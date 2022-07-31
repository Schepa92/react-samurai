import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || (
              <span style={{ opacity: '0.2', fontStyle: 'italic' }}>
                Input your status
              </span>
            )}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
