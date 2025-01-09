import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PostPage = () => {
    const params = useParams(); // Recupera i parametri dall'URL

    // Funzione per ottenere i dati dal backend
    function getPost(id) {
        axios
            .get(apiUrl + '/posts/...' + id)
            .then((res) => setPost(res.data))
            .catch((error) => console.error(error))
            .finally(() => console.log("Data fetch completed"));
    };

    // Eseguiamo la chiamata API al caricamento del componente
    useEffect(() => {
        getPost(params.id);
    }, [params.id]);


    return (
        <>
            <h1>Sono la card con id {params.id}</h1>
        </>
    );
};