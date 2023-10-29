import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { ScreenProvider } from "./contexts/ScreenContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

axios.defaults.baseURL = "http://localhost:4000/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScreenProvider>
      <AuthProvider>
        <Router>
          <Toaster position="top-right" />
          <App />
        </Router>
      </AuthProvider>
    </ScreenProvider>
  </React.StrictMode>
);
