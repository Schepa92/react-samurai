import React from 'react';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
  return (
    <>
      <Friends data={props.data} />
    </>
  );
};

export default Sidebar;
