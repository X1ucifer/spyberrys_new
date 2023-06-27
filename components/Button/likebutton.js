import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const LikeButton = () => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const handleClick = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  const icon = isAddedToWishlist ? <FavoriteIcon color="error" fontSize="large"/> :<FavoriteBorderIcon fontSize="large"/> ;

  return (
    <>
    <Tooltip title="Add to Cart">
    <IconButton
      type="button"
      onClick={handleClick}
      variant="contained"
     
    >
      {icon}
      </IconButton>
      </Tooltip>
      </>
  );
};

export default LikeButton;
