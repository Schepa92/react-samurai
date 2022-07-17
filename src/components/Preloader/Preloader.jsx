import React from 'react';
import loadingIco from '../images/loading.gif';

const Preloader = () => {
  return (
    <div>
      <img src={loadingIco} />
    </div>
  );
};

export default Preloader;
