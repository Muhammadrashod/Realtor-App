import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Font from "./components/UI/Font/Font";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <GreetingPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Font>
        <RouterProvider router={routerConfig} />
      </Font>
    </Provider>
  );
};

export default App;
