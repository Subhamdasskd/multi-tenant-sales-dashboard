import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TenantProvider } from "./contexts/TenantContext";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode> 
<BrowserRouter>
    <TenantProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TenantProvider>
 </BrowserRouter>
   </React.StrictMode>
  
);
