import React from 'react';
import Header from '../component/header/header'

function DefaultPage(props) {
  return(
    <div>
      <Header />
      { props.children }
    </div>
  );
}

export default DefaultPage;
