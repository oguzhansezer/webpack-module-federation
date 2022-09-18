import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "Pages/Home";
import { App2Page } from "Pages/App2";
import { ErrorPage } from "Pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const DummySideBar = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Sidebar</h1>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/page2`}>Page2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page2",
    element: <App2Page />,
    errorElement: <ErrorPage />,
  },
]);
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <DummySideBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
