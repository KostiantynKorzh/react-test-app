import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CataloguePage from "./components/pages/CataloguePage";
import Header from "./components/Header";
import ProductPage from "./components/pages/ProductPage";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/catalogue" element={<CataloguePage/>}/>
                    <Route path="/catalogue/:id" element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
