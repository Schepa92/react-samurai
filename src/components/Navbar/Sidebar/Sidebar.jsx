import React from 'react';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
  return (
    <>
      <Friends state={props.state} />
    </>
  );
};

export default Sidebar;
