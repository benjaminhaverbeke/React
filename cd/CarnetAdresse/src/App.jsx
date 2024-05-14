import { useState, useReducer, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form.jsx'
import Tableau from './Tableau.jsx'

const reducer = (state, action) => {

    switch (action.type) {
        case "loadCarnet":
            return {
                ...state,
                carnet: action.carnet
            }
        case "formInputChange":
            const newContact = {...state.edittingContact};
            newContact[action.name] = action.value;
            console.log(newContact, action)
            return {
                ...state,
                edittingContact: newContact
            }
        case "new":
            return {...state, edittingContact: {
                nom: '',
                prenom: '',
                phone: 0,
                email: '',
                age: ''
            }};
        case "edit":
            return {...state, edittingContact: action.contact};
        case "create":
            const contact = {
                id: state.carnet.length + 1,
                ...action.contact
            };
            return {
                ...state,
                carnet: [...state.carnet, contact]
            };
        case "update":
            const carnet = [...state.carnet];
            const indexToUpdate = state.carnet.findIndex((elt) => elt.id === action.contact.id);
            carnet[indexToUpdate] = action.contact;
            return {
                ...state,
                carnet: [...carnet]
            };
            case "delete":
                const newCarnet = state.carnet.filter(a => a.id !== action.contact.id)
               
                return {
                    ...state,
                    carnet: [...newCarnet]
                }
    }
};


function App() {
  
  const [state, dispatch] = useReducer(reducer, {
    
    carnet: [],
    edittingContact: {
      nom: '',
      prenom: '',
      phone: 0,
      email: '',
      age: ''
    }
    
    });
  
useEffect(() => {
        const carnet = localStorage.getItem('carnet');
        dispatch({type: 'loadCarnet', carnet: JSON.parse(carnet)})
    }, []);

    useEffect(() => {
        localStorage.setItem('carnet', JSON.stringify(state.carnet));
    }, [state.carnet]);

    
  
 const handleNewContact = () => {
   
   dispatch({type: 'new'});
 }
 
 const handleEditContact = (contact) => {
   
   dispatch({type: 'edit', contact})
   
 }
 
 const handleDeleteContact = (contact) => {
     
     dispatch({type: 'delete', contact})
 }

  return (
    <>
      <Form dispatch={dispatch} state={state.edittingContact} />
      <button onClick={handleNewContact}>Ajouter</button>
      <Tableau carnet={state.carnet} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} />
    </>
  )
}

export default App
