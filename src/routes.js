import {lazy} from "react";

import Home from "pages/Home";
import Catalog from "pages/Catalog";

const NotFound = lazy(() => import("pages/NotFound"));

export const privateRoutes = [

];

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "*",
    element: <NotFound />,
  }
];
