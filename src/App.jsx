import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Sobre from './Sobre/Sobre'
import Header from "./Header/Header"
import Contato from './Contato/Contato'
import Footer from "./Footer/Footer"

// o BrowserRouter deve ser o componente que envolve tudo que depende no react-router.
// Routes define as areas em que vamos colocar os nossos route
// Route recebe o caminho em path. Se esse caminho for o mesmo do URL ele ira renderizar o componente que estiver dentro de element={}

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )

}

export default App