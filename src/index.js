import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mr5qcjp6kgp7fpmh.us.auth0.com"
    clientId="q9dy6lhGTbrHJuD6HWOsV6M75J1K09yI"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
