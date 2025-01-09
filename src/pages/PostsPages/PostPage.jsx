
import { useParams } from "react-router-dom";

export const PostPage = () => {
    const params = useParams(); // Recupera i parametri dall'URL

    return (
        <>
            <h1>Sono la card con id {params.id}</h1>
        </>
    );
};