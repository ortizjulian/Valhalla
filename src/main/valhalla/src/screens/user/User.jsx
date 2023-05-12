import React, { useEffect, useState } from 'react';

import NavbarUser from "../../components/Nav/NavbarUser";
import { Outlet,Navigate  } from "react-router-dom";

function User() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));


  if (!currentUser || !currentUser.roles.includes('ROLE_USER')) {
     return <Navigate to="/login" />;
  }

  return (
    <>
      <NavbarUser />
      <Outlet />
    </>
  );
}

export default User;