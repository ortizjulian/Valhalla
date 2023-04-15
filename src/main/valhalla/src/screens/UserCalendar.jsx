import React from "react";
import styled from "styled-components";
import UserItineray from "../components/Elements/UserItineray";
import NavbarUser from "../components/Nav/NavbarUser";
export default function UserCalendar() {
  return (
    <>
      <NavbarUser></NavbarUser>
      <UserItineray />
    </>
  );
}