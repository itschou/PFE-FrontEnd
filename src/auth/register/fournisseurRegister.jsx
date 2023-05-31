import { useState, useEffect } from "react";
import axios from "axios";
import useAuthContext from "../../context/AuthContext";

export default function FournisseurRegister() {
  const [nom, setNom] = useState('');
  const [secteur, setSecteur] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');


  const [secteurData, setSecteurData] = useState('');


  const { fournisseurRegister } = useAuthContext();

  useEffect(() => {
    axios.get("http://localhost:8000/api/list-fournisseur").then((res) => {
      setSecteurData(res.data.categorie);
    });
  }, []);

  const handleRegiter = async (event) => {
    event.preventDefault();
    fournisseurRegister({ nom, secteur, adresse, email, password, telephone });
    // console.log(nom, secteur, adresse, email, password, telephone);
  };

  return (
    <div className="container-fluid py-5 vh-100">
      <h1 className="mb-4 text-light text-center ">Inscription fournisseur</h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleRegiter}>
            <div className="mb-3">
              <label htmlFor="nomFournisseur" className="form-label">
                Nom du fournisseur
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
              <label htmlFor="secteur" className="form-label">
                Secteur
              </label>
              {/* Catégorie */}

              <select
                className="form-select"
                id="secteur"
                onChange={(e) => setSecteur(e.target.value)}
              >
                {secteurData &&
                  Object.keys(secteurData).map((element, key) => {
                    return (
                      <option value={element} key={key}>
                        {element}
                      </option>
                    );
                  })}
              </select>
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
