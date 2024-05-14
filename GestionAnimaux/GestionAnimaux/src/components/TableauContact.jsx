import { useState, useEffect, useReducer } from "react";


const TableauContact = () => {
    
   
    return(
         <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {carnet.map((contact, i) => 
                    <tr key={i} onClick={()=> onEditContact(contact)}>
                        <td>{contact.nom}</td>
                        <td>{contact.prenom}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>{contact.age}</td>
                        <td><button onClick={()=> onDeleteContact(contact)}>Supprimer</button></td>
                    </tr>
                    
                )}
            </tbody>
        </table>
        
        
        
        );
    
    
    
    
}

export default TableauContact;