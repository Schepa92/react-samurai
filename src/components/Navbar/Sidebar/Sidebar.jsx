import React from 'react';
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = (props) => {
  // debugger;
  return (
    <>
      <FriendsContainer sidebar={props.sidebar} />
    </>
  );
};

export default Sidebar;
