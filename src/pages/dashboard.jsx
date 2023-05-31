import useAuthContext from "../context/AuthContext";
import { FournisseurList } from "../composants/fournisseurList";
import { AdminManage } from "../composants/adminManage";

export default function Dashboard() {
  const { logout, updateStatus } = useAuthContext();
  var user = JSON.parse(localStorage.getItem("clientInfo"));

  const email = user.email;

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  const handleStatus = (event) => {
    event.preventDefault();
    updateStatus({ email });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            {user.nom}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Options
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/user-profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleLogout}>
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600"> {user.nom} </h6>
                      <p>
                        {user.role === "entreprise" ? (
                          <span>Entreprise</span>
                        ) : user.role === "fournisseur" ? (
                          <span className="text-success">Fournisseur</span>
                        ) : (
                          <span className="text-danger">Admin</span>
                        )}
                      </p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Identifiant</p>
                          <h6 className="text-muted f-w-400">{user.id}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">
                            {user.telephone}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Adresse</p>
                          <h6 className="text-muted f-w-400">{user.adresse}</h6>
                        </div>
                      </div>
                    </div>
                    {user.role === "entreprise" && (
                      <a href="#fournisseur">
                        <button className="btn btn-success justify-content-center text-center flex">
                          Voir les fournisseurs
                        </button>
                      </a>
                    )}
                    {user.role === "fournisseur" && (
                      <form onSubmit={handleStatus}>
                        {" "}
                        {user.statusMarchandise == true ? (
                          <button className="btn btn-danger justify-content-center text-center flex">
                            Changer : Marchandise Indisponible
                          </button>
                        ) : (
                          <button className="btn btn-success justify-content-center text-center flex ">
                            Changer : Marchandise Disponible
                          </button>
                        )}{" "}
                      </form>
                    )}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {user.role === "entreprise" && <FournisseurList />}

      {user.role === "admin" && <AdminManage />}
    </div>
  );
}
