import { useState } from "react";
import useAuthContext from "../../context/AuthContext";


export default function LoginFournisseur() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginFournisseur , error } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    loginFournisseur({email, password});
    
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <img src="images/fournisseur.png" width="100px" alt="logo" className="mb-4" />
        <form className="p-4 rounded shadow-sm bg-light" onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Bienvenue sur OurCompany</h1>
          <p className="mb-3 text-muted text-center">Fournisseur</p>
          <h4 className="text-danger">{ error }</h4>
          <br />
          <div className="form-floating mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Connexion
          </button>
        </form><br />
        {/* <button className="w-50 btn btn-lg btn-primary" href="/dashboard">DASHBOARD</button> */}
      </div>
    </div>
  );
}
