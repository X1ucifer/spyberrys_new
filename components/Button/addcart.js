import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";

const Addcart = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleClick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const icon = isAddedToCart ?  <AddShoppingCartIcon color="success" fontSize="large"/>  : <AddShoppingCartIcon fontSize="large"/>;

  return (
    <>
    <Tooltip title="Whishlist">
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

export default Addcart;
