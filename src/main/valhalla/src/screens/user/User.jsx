import NavbarUser from "../../components/Nav/NavbarUser";
import { Outlet } from "react-router-dom";
export default function User() {
  return (
    <>
      <NavbarUser></NavbarUser>
      <Outlet />
    </>
  );
}
