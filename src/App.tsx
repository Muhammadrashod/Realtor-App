import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Font from "./components/UI/Font/Font";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/registartion",
    element: <RegistrationPage />,
  },
]);

const App: React.FC = () => {
  return (
    <Font>
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    </Font>
  );
};

export default App;
