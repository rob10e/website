// @flow
import * as React from 'react';
// import Components from "views/Components/Components.jsx";
import LandingPage from '../views/LandingPage/LandingPage';
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";

export type IndexRoutesProps = {
  path: string,
  name: string,
  component: React.ComponentType<*>
}

const indexRoutes: IndexRoutesProps[] = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  // { path: "/login-page", name: "LoginPage", component: LoginPage },
  // { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
