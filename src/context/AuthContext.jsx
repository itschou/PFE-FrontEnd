import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("clientInfo"));

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
    console.log(data);
  };

  const updateUser = async ( { ...data } ) => {
    await csrf();
    try {
      if(userInfo.role === "admin" || userInfo.role === "entreprise"){
        await axios.post("/api/update-user", data).then((e) => { localStorage.setItem("clientInfo", JSON.stringify(e.data.data));  });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }else{
        await axios.post("/api/update-fournisseur", data).then((e) => { localStorage.setItem("clientInfo", JSON.stringify(e.data.data));  });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch {

    }

  }

  const updateStatus = async ( {...data} ) => {
    await csrf();
    try {
      await axios.post("/api/updateStatus", data).then((res) => { setTimeout(() => { localStorage.setItem("clientInfo", JSON.stringify(res.data.data)) }, 1000);  });
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (e) {
      console.log("Une erreur s'est produite", e);
    }
  };

  const updateStatusFournisseur = async ( {...data} ) => {
    await csrf();
    try {
      await axios.post("/api/updateFournisseurstatus", data);
    } catch (e) {
      console.log("Une erreur s'est produite", e);
    }
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios
        .post("/api/user-login", data)
        .then((e) =>
          localStorage.setItem("clientInfo", JSON.stringify(e.data.data))
        );
        setTimeout(() => {
          console.log("Connexion réussie");
          navigate("/dashboard");
        }, 2000);
      
    } catch (e) {
      console.log(e.data.message);
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      await axios
        .post("/api/user-register", data);
        setTimeout(console.log("Inscription réussite"), 10000);
      navigate("/");
    } catch (e) {
      console.log(e.data.message);
    }
  };

  const loginFournisseur = async ({ ...data }) => {
    await csrf();
    try {
      await axios
        .post("/api/fournisseur-login", data)
        .then((e) =>
          localStorage.setItem("clientInfo", JSON.stringify(e.data.data))
        );
        setTimeout(console.log("Connexion réussie"), 10000);
      navigate("/dashboard");
    } catch (e) {
      console.log(e.data.message);
    }
  };


  const fournisseurRegister = async ({ ...data }) => {
    await csrf();
    try {
      await axios
        .post("/api/fournisseur-register", data);
        setTimeout(console.log("Inscription réussite"), 10000);
      navigate("/");
    } catch (e) {
      console.log(e.data.message);
    }
  };

  const logout = async () => {
    try{
      localStorage.removeItem("clientInfo");
      navigate("/");
    }catch{
      console.log("Une erreur s'est produite lors de la déconnexion");
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, getUser, login, register, logout, fournisseurRegister, loginFournisseur, updateUser, updateStatus, updateStatusFournisseur }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}

// .then((response) => {
//   console.log(response.data.message); // user details
//   setError(response.data.message);
// });
