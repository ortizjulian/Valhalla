import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
//Rutas del admin
import Admin from "./screens/admin/Admin";
import AdminCalendar from "./screens/admin/AdminCalendar";
import AdminRegister from "./screens/admin/AdminRegister";
import AdminStats from "./screens/admin/AdminStats";
import AdminPrizes from "./screens/admin/AdminPrizes";

//Rutas del user
import User from "./screens/user/User";
import UserPrizes from "./screens/user/UserPrizes";
import UserCalendar from "./screens/user/UserCalendar";
import UserStats from "./screens/user/UserStats";
import UserWelcome from "./screens/user/UserWelcome";

//Error 404
import PageNotFound from "./screens/PageNotFound";



const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />

          <Route path="/user" element={<User />}>
            **
            <Route index element={<UserWelcome />} />
            **
            <Route path="calendar" element={<UserCalendar />} />
            <Route path="prizes" element={<UserPrizes />} />
            <Route path="stats" element={<UserStats />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            **
            <Route index element={<AdminRegister />} />
            **
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="stats" element={<AdminStats />} />
            <Route path="gift" element={<AdminPrizes />} />
          </Route> 

        


          **<Route path="*" element={<PageNotFound />}></Route>**
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
