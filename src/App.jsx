import { HomePage } from "./pages/HomePage/HomePage";
import { MainComponent } from "./pages/PostsPages/PostsPages"; // Importiamo il comnponente MainComponent
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Dopo aver installato il pacchetto react-router-dom lo importiamo nel nostro file app.jsx
import { ContactPage } from "./pages/ContatcPage.jsx/ContactPage"; // Importiamo la pagina di contatto
import { DefaultLayout } from "./layout/DefaultLayout";
import { PostPage } from "./pages/PostsPages/PostPage";
import { ErrorPage } from "./pages/ErrorPages/ErrorPage";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/contact">
            <Route index Component={ContactPage} />
          </Route>
          <Route path="/posts">
            <Route index Component={MainComponent} />
            <Route path=":id" Component={PostPage} />
          </Route>
        </Route>
        <Route path="*" Component={ErrorPage}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

