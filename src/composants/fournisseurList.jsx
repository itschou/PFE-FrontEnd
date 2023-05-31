import { useEffect, useState } from "react";
import axios from "axios";



export const FournisseurList = () => {
  const [fournisseur, setFournisseur] = useState();
  const [categorieChoise, setCategorieChoise] = useState("Tous");
  const [categorie, setCategorie] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/api/list-fournisseur").then((res) => {
      setFournisseur(res.data.fournisseur);
      setCategorie(res.data.categorie);
    });
  }, []);

  return (
    <div>
      {" "}
      {/* Catégorie */}
      <div className="col-md-12 text-center" id="fournisseur">
        <h2 className="text-light">Choisissez une catégorie :</h2>
        <select
          className="form-select"
          aria-label="Sélectionnez une catégorie"
          onChange={(e) => setCategorieChoise(e.target.value)}
        >
          <option value="Tous"> Tous </option>
          {categorie &&
            Object.keys(categorie).map((element, key) => {
              return (
                <option value={element} key={key}>
                  {" "}
                  {element}{" "}
                </option>
              );
            })}
        </select>
      </div>
      {/* Fournisseur */}
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Fournisseur</th>
            <th>Secteur D'activité</th>
            <th>Adresse</th>
            <th>Numéro de téléphone</th>
            <th>Marchandises</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {categorieChoise === "Tous"
            ? fournisseur &&
              fournisseur.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        {/* <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        className="rounded-circle img-thumbnail img-size"
                      /> */}
                        <div className="ms-3">
                          <p className="fw-bold mb-1"> {element.nom} </p>
                          <p className="text-muted mb-0"> {element.email} </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"> {element.secteur} </p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"> {element.adresse} </p>
                    </td>
                    <td>{element.telephone}</td>
                    <td>
                      {element.statusMarchandise == true ? (
                        <p className="text-success bold">Disponible</p>
                      ) : (
                        <p className="text-danger bold">Indisponible</p>
                      )}
                    </td>
                    {/* <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm btn-rounded"
                      >
                        Edit
                      </button>
                    </td> */}
                  </tr>
                );
              })
            : fournisseur &&
              fournisseur
                .filter((e) => e.secteur === categorieChoise)
                .map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        className="rounded-circle img-thumbnail img-size"
                      /> */}
                          <div className="ms-3">
                            <p className="fw-bold mb-1"> {element.nom} </p>
                            <p className="text-muted mb-0"> {element.email} </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1"> {element.secteur} </p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1"> {element.adresse} </p>
                      </td>
                      <td>{element.telephone}</td>
                      <td>
                        {element.statusMarchandise == true ? (
                          <p className="text-success bold">Disponible</p>
                        ) : (
                          <p className="text-danger bold">Indisponible</p>
                        )}
                      </td>
                      {/* <td>
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded"
                        >
                          Edit
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
        </tbody>
      </table>
    </div>
  );
};
