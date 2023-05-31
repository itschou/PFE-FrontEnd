import { useState } from "react";
import useAuthContext from "../../context/AuthContext";

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("clientInfo"));

  const { updateUser } = useAuthContext();

  const [nom, setNom] = useState(user.nom);
  const [email, setEmail] = useState(user.email);
  const [adresse, setAdresse] = useState(user.adresse);
  const [telephone, setTelephone] = useState(user.telephone);


  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({nom, email, adresse, telephone});

  };

  return (
    <div className="container-fluid text-light vh-100">
      <h1>Modifier le profil</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </form>
      <div className="text-center">
        <a href="/dashboard"><button className="btn btn-success">Revenir a L'acceuil</button></a>
      </div>
    </div>
  );
};
