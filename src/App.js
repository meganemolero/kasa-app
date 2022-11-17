import About from './pages/About/About';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Lodgings from './pages/Lodgings/Lodgings';
import { Routes , Route } from 'react-router-dom'

 
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/lodgings/:id" element={<Lodgings />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/*" element={<Error />}></Route>
        </Routes>
    )
}
