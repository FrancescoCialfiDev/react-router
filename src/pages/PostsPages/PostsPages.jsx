import { useState, useEffect } from "react";
import axios from "axios";
import { CreateCard } from "../../components/CardComponent/CardComponent"; // Import del componente card



const apiUrl = "http://localhost:3000/foods"; // URL dell'API

export const MainComponent = () => {
    // Stato per i dati e per la gestione del form
    const [reactData, setReactData] = useState([]);


    // Funzione per ottenere i dati dal backend
    const getData = () => {
        axios
            .get(apiUrl)
            .then((res) => setReactData(res.data.foods))
            .catch((error) => console.error(error))
            .finally(() => console.log("Data fetch completed"));
    };

    // Eseguiamo la chiamata API al caricamento del componente
    useEffect(getData, []);

    //Remove Click Function
    // const removeClick = () => {
    //     // Verifichiamo che l'id dell'elemento cliccato sia diverso da quello presente negli elementi dell'array
    //     // Cosi da creare un array con solo all'interno gli oggetti con id diverso da quello cliccato, cosi da eliminare quelli con id uguale.
    //     const updateData = reactData.filter(element => element.id != event.target.closest(".card").id);
    //     setReactData(updateData); // Aggiorniamo lo stato della variabile.

    // }

    // Funzione per eliminare un elemento
    const removeDataItem = (id) => {
        axios
            .delete(`${apiUrl}/${id}`)
            .then(() => {
                setReactData((prevData) => prevData.filter((item) => item.id !== id));
                console.log("Item deleted successfully");
            })
            .catch((error) => console.error("Error deleting item:", error));
    };




    return (
        <main className="d-flex">
            {/* Card Section */}
            <div className="container">
                <div className="row align-items-center">
                    <CreateCard data={reactData} setData={setReactData} remove={removeDataItem} />
                </div>
            </div>
        </main>
    );

};
