const TableauAnimaux = ({animaux, onEditAnimal}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Famille</th>
                    <th>Espèce</th>
                    <th>Age</th>
                    <th>Prénom</th>
                </tr>
            </thead>
            <tbody>
                {animaux.map((animal, i) => 
                    <tr key={i} onClick={() => onEditAnimal(animal)}>
                        <td>{animal.famille}</td>
                        <td>{animal.espece}</td>
                        <td>{animal.age}</td>
                        <td>{animal.prenom}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TableauAnimaux;