import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { Body } from "./src/Body";

import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Home from "./src/components/Home";
import Cart from "./src/components/Cart";
import RestMenu from "./src/components/RestMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenu from "./src/components/RestMenu";
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about us",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/rest/:resId",
        element: <RestMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
