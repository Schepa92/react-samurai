import React from 'react';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
  // debugger;
  return (
    <>
      <Friends sidebar={props.sidebar} />
    </>
  );
};

export default Sidebar;
