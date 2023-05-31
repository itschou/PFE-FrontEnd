import axios from "../api/axios";
import { useContext, useEffect, useState } from "react";
import useAuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const AdminManage = () => {
  const [fournisseur, setFournisseur] = useState();
  const [email, setEmail] = useState('');
  const { updateStatusFournisseur } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/list-fournisseur").then((res) => {
      setFournisseur(res.data.fournisseur);
    });
  }, []);

  useEffect(() => {
    handleStatus();
  }, [email]);

  const handleStatus = () => {
    updateStatusFournisseur({ email });
    navigate("/dashboard");

  };



  return (
    <div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Fournisseur</th>
            <th>Secteur D'activité</th>
            <th>Adresse</th>
            <th>Numéro de téléphone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fournisseur &&
            fournisseur.filter((e) => e.status == false).map((element, index) => {
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
                      <button
                        type="button"
                        className="btn btn-success btn-sm btn-rounded" onClick={() => { setEmail(element.email) }}
                      >
                        Accepter
                      </button>
                    </td>
                  </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
