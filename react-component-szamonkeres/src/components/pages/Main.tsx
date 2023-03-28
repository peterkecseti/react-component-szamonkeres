import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Tapasztalat from './Tapasztalat';
import Idopont from './Idopont';
import Navbar from '../elements/Navbar';


class Main extends Component<{}>{
    render(){
        return(
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/tapasztalat' element={<Tapasztalat/>} />
                <Route path='/idopont' element={<Idopont/>} />
            </Routes>
        )
    }
}
export default Main;