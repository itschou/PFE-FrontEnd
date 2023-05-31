import { useNavigate } from "react-router-dom";


export default function Acceuil() {

    const navigate = useNavigate();

    const fournisseurConnexion = () => {
        navigate("/login-fournisseur")
    }

    const entrepriseConnexion = () => {
        navigate("/login-entreprise")
    }

  return (
    <div>
      <div className="container vh-100 d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src="images/entreprise.png"
              className="p-3"
              height="300 px"
              alt="Image Entreprise"
            />
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">Entreprise</h3>
                <button className="btn btn-success btn-block" onClick={entrepriseConnexion}>Connexion</button><br /><br />
                <a href="/entreprise-register" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Vous n'avez pas de compte ? <br/> Enregistez-vous </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="images/fournisseur.png"
              className="p-3"
              height="300 px"
              alt="Image Fournisseur"
            />
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">Fournisseur</h3>
                <button className="btn btn-success btn-block" onClick={fournisseurConnexion}>Connexion</button><br /><br />
                <a href="/fournisseur-register" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Vous n'avez pas de compte ? <br/> Enregistez-vous  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
