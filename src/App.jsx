import { HomePage } from "./pages/HomePage/HomePage"; // Importiamo la pagina Home
import { MainComponent } from "./pages/PostsPages/PostsPages"; // Importiamo il componente principale dei post
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importiamo le funzionalità di routing
import { ContactPage } from "./pages/ContatcPage.jsx/ContactPage"; // Importiamo la pagina dei contatti
import { DefaultLayout } from "./layout/DefaultLayout"; // Importiamo il layout principale
import { PostPage } from "./pages/PostsPages/PostPage"; // Importiamo la pagina che mostra un singolo post
import { ErrorPage } from "./pages/ErrorPages/ErrorPage"; // Importiamo la pagina di errore
import { FormPage } from "./pages/FormPage.jsx/FormPage";


export const App = () => (
  <>
    <BrowserRouter>                                        {/* BrowserRouter avvolge tutta l'app e abilita il routing */}
      <Routes>

        <Route Component={DefaultLayout}>                  {/*layout di default */}

          <Route path="/" element={<HomePage />} />        {/* Home page */}

          <Route path="/contact">                          {/* Pagina dei contatti */}
            <Route index element={<ContactPage />} />
          </Route>

          <Route path="/posts">                             {/* Gestione dei post */}
            <Route index element={<MainComponent />} />     {/* Pagina principale dei post */}
            <Route path="addPost" element={<FormPage />} /> {/* Pagina per aggiungere un  post */}
            <Route path=":id" element={<PostPage />} />     {/* Pagina per un singolo post, identificato da un id */}
            <Route path="*" element={<ErrorPage />} />      {/* Pagina di errore per percorsi non validi sotto /posts */}
          </Route>

        </Route>

        <Route path="*" element={<ErrorPage />} />         {/* Rotta globale per tutti i percorsi non validi */}

      </Routes>
    </BrowserRouter>
  </>
);
