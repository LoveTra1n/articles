import "./App.css"
import Articles from "./pages/articles/Articles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ArticleSite from "./pages/article-site/ArticleSite";
function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/"} element={<Articles/>}/>
                    <Route path={"/:id"} element={<ArticleSite/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
