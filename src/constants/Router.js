import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components


import CmsConfiguration from "../pages/CmsConfiguration";
import ManualInsert from "../pages/ManualInsert";
import ActiveCards from "../pages/ActiveCards";
import WelcomeScreen from "../pages/WelcomeScreen";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/cms-configuration" element={<CmsConfiguration />} />
        <Route path="/manual-insert" element={<ManualInsert />} />
        <Route path="/card-operation/active-card" element={<ActiveCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
