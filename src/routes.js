import {lazy} from "react";
import {catalog} from "data/catalog";

import Home from "pages/Home";
import Catalog from "pages/Catalog";
import CategoryProducts from "pages/CategoryProducts";

const NotFound = lazy(() => import("pages/NotFound"));

export const privateRoutes = [

];

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "*",
    element: <NotFound />,
  },
  ...catalog.map((item) => {
    return {
      path: `/catalog/${item.catalogCodeName}`,
      element: <CategoryProducts productType={item.catalogCodeName} />
    }
  })
];
