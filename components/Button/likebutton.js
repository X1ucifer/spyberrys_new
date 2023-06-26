import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeButton = ({ likesCount }) => {
  const handleClick = () => {
    // Change the button color to red.
    document.querySelector(".like-button").style.color = "red";

    // Increment the likes count.
    const newLikesCount = likesCount + 1;
    document.querySelector(".likes-count").textContent = newLikesCount;
  };

  return (
    <>
    <Tooltip title="Like">
          <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={handleClick}
              
          >
              <FavoriteBorderIcon fontSize="large" color="error" />
          </IconButton>
      </Tooltip><span class="likes-count">{likesCount}</span>
      </>
  );
};

export default LikeButton;
