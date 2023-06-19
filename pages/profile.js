import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    if (!user) {
      // Redirect to login page if user is not logged in
      window.location.href = '/login';
    }
  }, [user]);

  const renderProfileContent = () => {
    if (!user) {
      return null;
    }

    const { role } = user;

    if (role === 'student') {
      return (
        <div>
          <h1>Student Profile</h1>
          {/*student profile contents can be added here */}
        </div>
      );
    } else if (role === 'Instructor') {
      return (
        <div className='mt-[100px]'>
          <h1>Educator Profile</h1>
          {/*educator profile content can be placed here*/}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Invalid Role</h1>
          {/* Handle invalid role scenario */}
        </div>
      );
    }
  };

  return (
    <div>
      {renderProfileContent()}
    </div>
  );
};

export default Profile;
