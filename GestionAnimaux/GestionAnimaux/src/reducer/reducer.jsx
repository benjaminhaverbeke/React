const reducer = (state, action) => {

    switch (action.type) {
        case "loadAnimaux":
            return {
                ...state,
                animaux: action.animaux
            }
        case "formInputChange":
            const newAnimal = {...state.edittingAnimal};
            newAnimal[action.name] = action.value;
            console.log(newAnimal, action)
            return {
                ...state,
                edittingAnimal: newAnimal
            }
        case "new":
            return {...state, edittingAnimal: {
                famille: '',
                espece: '',
                age: 0,
                prenom: ''
            }};
        case "edit":
            return {...state, edittingAnimal: action.animal};
        case "create":
            const animal = {
                id: state.animaux.length + 1,
                ...action.animal
            };
            return {
                ...state,
                animaux: [...state.animaux, animal]
            };
        case "update":
            const animaux = [...state.animaux];
            const indexToUpdate = state.animaux.findIndex((elt) => elt.id === action.animal.id);
            animaux[indexToUpdate] = action.animal;
            return {
                ...state,
                animaux: [...animaux]
            };
            
        
    }
};

export default reducer;

