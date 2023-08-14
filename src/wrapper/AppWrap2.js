import React from 'react'
import Socialmedia from '../components/Socialmedia';


const AppWrap2 = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`}>
      <div className="app__flex">
        <Component />
      </div>

      <Socialmedia />

      <div className="copyright">
        <p className="p-text"> Copyright @ 2023 SACHIN All rights reserved</p>
      </div>
    </div>
  );
}

export default AppWrap2;