import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
