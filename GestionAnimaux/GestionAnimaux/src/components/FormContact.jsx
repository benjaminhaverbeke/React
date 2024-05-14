
import { useState, useReducer } from 'react'
import reducer from '../reducer/reducer.jsx'


const FormContact = ({state, dispatch})=>{
    
   const handleChange = (event) => {
       
        const { value, name } = event.target;
        dispatch({type: 'formContactInputChange', name, value})
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(state.id > 0) {
            dispatch({type: 'update', contact: state});
            
            return;
        }
        
        dispatch({type: 'create', contact: state});
        dispatch({type: 'new'})
    }
    
    return(
         <form onSubmit={handleSubmit}>
            <label htmlFor="nomId">Nom</label>
            <input type="text" name="nom" id="nomId" value={state.nom} onChange={handleChange} />

            <label htmlFor="prenomId">Prénom</label>
            <input type="text" name="prenom" id="prenomId" value={state.prenom} onChange={handleChange}  />

            <label htmlFor="phoneId">Téléphone</label>
            <input type="tel" name="phone" id="phoneId" value={state.phone} onChange={handleChange}  />

            <label htmlFor="emailId">Email</label>
            <input type="email" name="email" id="emailId" value={state.email} onChange={handleChange}  />
            
            <label htmlFor="ageId">Age</label>
            <input type="date" name="age" id="ageId" value={state.age} onChange={handleChange}  />

            <button>Enregistrer</button>
            </form>
        );
    
    
    
    
}

export default FormContact;