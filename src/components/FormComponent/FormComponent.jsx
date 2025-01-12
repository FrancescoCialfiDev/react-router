import { useState } from "react";

export const FormComponent = ({ reactData, setData }) => {

    const [image, setImage] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        available: false,
    });

    // Funzione per gestire l'invio del form
    const submitFunction = (event) => {
        event.preventDefault(); // Previene il comportamento di default del form
        alert("The card has been generated"); // Messaggio di conferma

        // Creiamo un nuovo oggetto card da aggiungere ai dati
        const newCardModel = {
            id: 1,
            title: formData.title,
            image: image ? URL.createObjectURL(image) : "",
            content: formData.content,
            published: true,
        };

        // Aggiungiamo la nuova card ai dati esistenti
        const newCard = [...reactData, newCardModel];
        setData(newCard); // Aggiorniamo lo stato
    };

    // Funzione per gestire la selezione dell'immagine
    const selectImage = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    // Funzione generica per aggiornare i dati del form
    const handleFormData = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value,
        }));
    };


    return (

        < div className="formContainer w-50" >
            <form className="p-5 bg-white rounded-3" onSubmit={submitFunction}>
                <div className="form-group">
                    <label htmlFor="titleForm"><span className="fw-bold">Card&apos;s Name</span></label>
                    <input name="title" type="text" value={formData.title} className="form-control" id="titleForm" placeholder="Es: React Components" onChange={handleFormData} />
                    <label htmlFor="imageForm"><span className="fw-bold">Card&apos;s Image</span></label>
                    <input name="image" type="file" className="form-control" id="imageForm" onChange={selectImage} />
                    <label htmlFor="contentForm"><span className="fw-bold">Card&apos;s Content</span></label>
                    <input name="content" type="text" value={formData.content} className="form-control" id="contentForm" placeholder="Es: Text of the content" onChange={handleFormData} />
                    <div className="d-flex flex-column align-items-start py-2 bg-warning rounded-2 p-2 my-2 border">
                        <label htmlFor="available" className="fw-bold">Availability</label>
                        <div className="d-flex gap-2">
                            <label htmlFor="available">True</label>
                            <input name="available" checked={formData.available} onChange={handleFormData} id="available" type="checkbox" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </ div >



    )

}