import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { ScreenProvider } from "../../frontend/src/contexts/ScreenContext.tsx";
import { AuthProvider } from "../../frontend/src/contexts/AuthContext.tsx";
import { TasksProvider } from "../../frontend/src/contexts/TasksContext.tsx";

axios.defaults.baseURL = "http://localhost:4000/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScreenProvider>
      <AuthProvider>
        <TasksProvider>
          <Router>
            <Toaster position="top-right" />
            <App />
          </Router>
        </TasksProvider>
      </AuthProvider>
    </ScreenProvider>
  </React.StrictMode>
);
