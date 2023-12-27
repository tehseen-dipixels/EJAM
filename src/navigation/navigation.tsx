import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeScreen from "../pages/Home/Home.tsx";
import Layout from "../utils/Layout.tsx";

createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <HomeScreen />
        </Layout>
      ),
    },
  ]
);

export { router };
