// Module imports
import React, {Component} from 'react'
// Element imports
import Navbar from '../elements/Navbar';
import Footer from '../elements/Footer';
// Asset imports
import dj from '../../assets/dj.jpg'

class Home extends Component<{}>{
    render() {
        return(
        <div>
            <Navbar/>
            <div className="centered">
                <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
                <h2>Válassz a fenti lehetőségek közül!</h2>
                <img src={dj} alt="" id="dj-img"/>
            </div>
            <Footer/>
        </div>
        )
    }
}


export default Home;