import React from "react";
// Sections
import RouletteDrift from "../components/Elements/RouletteDrift";
import ItineraryUser from "../components/Elements/ItineraryUser";
import ItineraryAdmin from "../components/Elements/ItineraryAdmin";

export default function User() {
  return (
    <>
      <RouletteDrift />
      <h1>Este seria el itinerario del usuario</h1>
      <ItineraryUser />
      <p>Holaaa mirenme</p>
      {/*
      <h1>Este seria el itinerario del administrado</h1>
  <ItineraryAdmin />*/}
    </>
  );
}
