import React from 'react';
import './HeaderSide.css';

function HeaderSide() {
  return (
    <>
    <div className='side__header'>
        <img className="logo_image" src={process.env.PUBLIC_URL + '/fashion_logo.jpg'} alt="logo"></img>
        <span>Fashion</span>
        </div>
        </>
  )
}

export default HeaderSide