

import { useRouter } from 'next/router';
import { useState } from "react";
import { Avatar, Menu, MenuItem, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// ...

const AnimatedAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // dispatch(logout());
    handleMenuClose();
  };


  //profile datas
  const handleProfile = () => {
    router.push('/profile');
    handleMenuClose();
  };




  const [loading, setLoading] = useState(false);
 
  const handleDashboardClick = () => {
    const url = 'http://localhost:3001'; // Change the URL to your server endpoint
    setLoading(true);

    fetch(url, { method: 'HEAD', mode: 'no-cors' })
      .then(() => {
        window.location.href = url;
      })
      .catch(() => {
        console.log('Server is not available');
        alert('Server is not available'); // Display alert message
      })
      .finally(() => {
        setLoading(false);
      });
  };



  console.log(user.avatar)
  return (
    <>
      <Avatar
        alt={user?.displayName}
        src={user.avatar}
        onClick={handleMenuOpen}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem>{loading ? (
          <CircularProgress size={20} />
        ) : (
          <a href="#" onClick={handleDashboardClick}>
            Dashboard
          </a>
        )}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>

      </Menu>
    </>
  );
};

export default AnimatedAvatar;
