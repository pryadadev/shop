/**
 * Project Name: Bytewave
 * Description: real-like online store of digital products
 *
 * Author: Mikhail Pryada
 * Email: pryadadev@gmail.com
 * Date: 8th September 2023
 */

import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ScrollToTop from "utils/ScrollToTop";
import { publicRoutes, privateRoutes } from "routes";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        {publicRoutes.map((route) =>
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        )}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
