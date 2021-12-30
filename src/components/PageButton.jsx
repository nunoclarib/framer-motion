import React from 'react';

import { Link } from 'react-router-dom';


const PageButtons = () => {

  return (
      <div
      style={{display: "flex",
        flexWrap: "wrap",
        maxWidth: "1024px",
        margin: "0 auto",
        justifyContent: "center",
        background: "#fff"}}
      >
      <Link to="/page1"><button className='btn btn-light mr-2' >Page 1</button></Link>
      <Link to="/page2"><button className='btn btn-light'>Page 2</button></Link>
      </div>
    
  );
}
export default PageButtons;