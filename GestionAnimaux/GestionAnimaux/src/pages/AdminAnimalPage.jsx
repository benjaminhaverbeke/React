import reducer from '../reducer/reducer.jsx'
import FormAnimal from '../components/FormAnimal.jsx'
import TableauAnimaux from '../components/TableauAnimaux.jsx'

import { useReducer, useEffect, useState } from 'react'

const AdminAnimalPage = () => {
    
    const [state, dispatch] = useReducer(reducer, {
        animaux: [],
        edittingAnimal: {
            famille: '',
            espece: '',
            age: 0,
            prenom: ''
        }
    });

    useEffect(() => {
        const animaux = localStorage.getItem('animaux');
        dispatch({type: 'loadAnimaux', animaux: JSON.parse(animaux)})
    }, []);

    useEffect(() => {
        localStorage.setItem('animaux', JSON.stringify(state.animaux));
    }, [state.animaux]);

    const handleNewAnimal = () => {
        dispatch({type: 'new'});
    }

    const handleEditAnimal = (animal) => {
        console.log(animal)
        dispatch({type: 'edit', animal});
    }
    return(
        
        <>
        <FormAnimal dispatch={dispatch} state={state.edittingAnimal} />
            <button onClick={handleNewAnimal}>Ajouter</button>
            <TableauAnimaux animaux={state.animaux} onEditAnimal={handleEditAnimal} />
        </>
        
        );
    
    
}

export default AdminAnimalPage;