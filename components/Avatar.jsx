import React from 'react'

function Avatar({url,className}) {

  return (
    <picture>
      <source srcSet={url} type="image/webp" />
      <img src={url} alt="Profile picture"  className={`rounded-full  h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}/>
    </picture>
  );
}

export default Avatar