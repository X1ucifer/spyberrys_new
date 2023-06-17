// import { useState } from "react";
// import { Avatar, Menu, MenuItem } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// // import { logout, selectUser } from "../redux/userSlice";

// const AnimatedAvatar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
 
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     // dispatch(logout());
//     handleMenuClose();
//   };

//   const handleProfile = () => {
//     // profile_user
//     handleMenuClose();
//   };

//   console.log(user.avatar)
//   return (
//     <>
//       <Avatar
//         alt={user?.displayName}
//         src={user.avatar}
//         onClick={handleMenuOpen}
//       />
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//       >

        
//         <MenuItem onClick={handleProfile}>Profile</MenuItem>
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
        
//       </Menu>
//     </>
//   );
// };

// export default AnimatedAvatar;


import { useRouter } from 'next/router';
import { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>

      </Menu>
    </>
  );
};

export default AnimatedAvatar;
