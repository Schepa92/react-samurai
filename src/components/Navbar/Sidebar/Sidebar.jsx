import React from 'react';
import Friends from './Friends/Friends';
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
