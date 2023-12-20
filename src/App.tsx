import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Font from "./components/UI/Font/Font";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
