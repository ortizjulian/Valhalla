import Sidebar from "../../components/Nav/SidebarAdmin";
import { Outlet } from "react-router-dom";
export default function Admin1() {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}
