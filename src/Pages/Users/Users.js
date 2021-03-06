import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import EditIcon from "@mui/icons-material/Edit";
import { makePath, getRoles } from "../../common/routes/routes";
import siteMap from "../../common/routes/siteMap";
import hasRoles from "../../common/services/security/hasRoles";


const USERS = [
    {_id:1, username:"MBY", contact:"Mouha", profile:{_id:"Admin", name:"Administrateur"}, isActif:true}, 
    {_id:2, username:"ZJA", contact:"Zied Jaziri", profile:{_id:"User", name:"Utilisateur"}, isActif:true},
    {_id:3, username:"BBO", contact:"Bouthaina BOUHOULI", profile:{_id:"Guest", name:"Visiteur"}, isActif:true},
    {_id:4, username:"BYA", contact:"Bayrem YAHYAOUI", profile:{_id:"Guest", name:"Visiteur"}, isActif:false}
];

export default function Users() {
    const navigate = useNavigate();
    const handleAdd = () => navigate(siteMap.AddUser.path);
    const handleEdit = (id) => navigate(makePath(siteMap.EditUser.path, {"id": id}));
    const hasEditRole = hasRoles(getRoles(siteMap.EditUser.name));
    const hasAddRole = hasRoles(getRoles(siteMap.AddUser.name));

    return (
        <div className="contain-div">
            <h2>{siteMap.Users.description}</h2>
            <div>
                {
                    hasAddRole &&
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>+ Ajouter</button>
                }
            </div>
            <div className="containd-div-table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom d&apos;utilisateurs</th>
                            <th>Contact</th>
                            <th>Profil</th>
                            <th>Etat</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            USERS.map((user)=>(
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.profile.name}</td>
                                    <td>{user.isActif ? <CheckCircleRoundedIcon style={{fill: "green"}}/> : <CancelRoundedIcon style={{fill: "red"}}/>}</td>
                                    <td>
                                        {
                                            hasEditRole &&
                                                <button 
                                                    className="btn btn-outline-primary btn-sm" 
                                                    onClick={ () => handleEdit(user._id) }
                                                >
                                                    <EditIcon />
                                                </button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
