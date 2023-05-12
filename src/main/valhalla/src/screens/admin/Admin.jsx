import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/Nav/SidebarAdmin";
import { Outlet,Navigate  } from "react-router-dom";
export default function Admin() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));


  if (!currentUser || !currentUser.roles.includes('ROLE_ADMINISTRADOR')) {
     return <Navigate to="/login" />;
  }
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}

