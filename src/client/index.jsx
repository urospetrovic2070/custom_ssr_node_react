import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>
);
