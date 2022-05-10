import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CataloguePage from "./components/pages/CataloguePage";
import Header from "./components/Header";

function App() {
    return (
        <>
            {/*штука чтобы чекать, какой путь стоит в браущере и перенаправлять соответствующе*/}
            {/*http://localhost:3000/ - значит HomePage*/}
            {/*http://localhost:3000/catalogur - значит CataloguePage*/}
            <BrowserRouter>
                {/*сюда ебанули хедер, шоб он был на всех страницах*/}
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/catalogue" element={<CataloguePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
