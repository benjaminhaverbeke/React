const FormAnimal = ({state, dispatch}) => {
    const handleChange = (event) => {
        const { value, name } = event.target;

        dispatch({type: 'formInputChange', name, value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (state.id > 0) {
            dispatch({type: 'update', animal: state});
            return;
        }

        dispatch({type: 'create', animal: state});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="familleId">Famille</label>
            <input type="text" name="famille" id="familleId" value={state.famille} onChange={handleChange} />

            <label htmlFor="especeId">Espèce</label>
            <input type="text" name="espece" id="especeId" value={state.espece} onChange={handleChange}  />

            <label htmlFor="ageId">Age</label>
            <input type="number" min="0" name="age" id="ageId" value={state.age} onChange={handleChange}  />

            <label htmlFor="prenomId">Prénom</label>
            <input type="text" name="prenom" id="prenomId" value={state.prenom} onChange={handleChange}  />

            <button>Enregistrer</button>
        </form>
    );
}

export default FormAnimal;