import React from "react";
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import ClientLayout from "./layouts/ClientLayout";

const routes = [
  {
    path: "/login",
    exact: false,
    main: () => <LoginPage />,
  },
  {
    path: "",
    exact: true,
    main: () => <ClientLayout />,
  },
];

export default routes;