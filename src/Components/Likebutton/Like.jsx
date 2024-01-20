import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const iconStyle = {
    color: liked ? '#e74c3c' : '#d5bdaf', // Change color for liked state to red, and unliked to white
    backgroundColor: liked ? 'transparent' : 'transparent', // Change background color for liked state to white, and unliked to transparent
    borderRadius: '50%', // Make the background circular
    padding: '0px', // Add padding for spacing
    cursor: 'pointer',
    fontSize: '26px',
    
    transition: 'color 0.3s ease, background-color 0.3s ease', // Add transition for both color and background-color
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={liked ? solidHeart : faHeart}
        style={iconStyle}
        onClick={handleLikeClick}
      />
    </div>
  );
};

export default LikeButton;