import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? 'Unlike' : 'Like'} {/* Change the button label based on the liked state */}
      </button>
      <span>{liked ? '👍' : '👎'}</span> {/* Change the icon based on the liked state */}
    </div>
  );
};

export default LikeButton;