import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Imports

import Dashboard from "./pages/dashboard";
import FournisseurRegister from "./auth/register/fournisseurRegister";
import EntrepriseRegister from "./auth/register/entrepriseRegister";
import { UserProfile } from "./auth/profile/userProfile";

// Login Imports
import LoginEntreprise from "./auth/login/loginEntreprise";
import LoginFournisseur from "./auth/login/loginFournisseur";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Acceuil from "./pages/acceuil";



const root = ReactDOM.createRoot(document.getElementById("root"));
const user = JSON.parse(localStorage.getItem("clientInfo"));

root.render(
  <BrowserRouter>
    {/* Utilisateur Authentifié */}
    <AuthProvider>
      <Routes>
        <Route path="/dashboard" element={user && user !== null ? <Dashboard /> : <Acceuil />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/fournisseur-register" element={<FournisseurRegister />} />
        <Route path="/entreprise-register" element={<EntrepriseRegister />} />
        <Route path="/login-entreprise" element={<LoginEntreprise />} />
        <Route path="/login-fournisseur" element={<LoginFournisseur />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </AuthProvider>

  </BrowserRouter>
);

reportWebVitals();
