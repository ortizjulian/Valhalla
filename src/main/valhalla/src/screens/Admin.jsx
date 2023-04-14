import React from "react";
// Sections
import AdminItinerary from "../components/Elements/AdminItinerary";
import Sidebar from "../components/Nav/SidebarAdmin";

export default function Admin1() {
  return (
    <>
      <Sidebar>
        <AdminItinerary />        
      </Sidebar>
    </>
  );
}
