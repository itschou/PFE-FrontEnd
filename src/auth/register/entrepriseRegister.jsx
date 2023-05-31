import { useState } from "react";
import useAuthContext from "../../context/AuthContext";

export default function EntrepriseRegister() {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');

  const { register } = useAuthContext();

  const handleRegiter = async (event) => {
    event.preventDefault();
    register({ nom, adresse, email, password, telephone });
  };

  return (
    <div className="container-fluid py-5 vh-100 text-center">
      <h1 className="mb-4 text-light text-center ">Inscription entreprise</h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleRegiter}>
            <div className="mb-3">
              <label htmlFor="nomFournisseur" className="form-label">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="form-control"
                id="nomFournisseur"
                placeholder="Nom du fournisseur"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adresse" className="form-label">
                Adresse
              </label>
              <input
                type="text"
                className="form-control"
                value={adresse}
                id="adresse"
                placeholder="Adresse"
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                id="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Téléphone
              </label>
              <input
                type="tel"
                className="form-control"
                value={telephone}
                id="telephone"
                placeholder="Téléphone"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
