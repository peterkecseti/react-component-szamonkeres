// Module imports
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
// Element imports
// Asset imports

class Navbar extends Component<{}>{
    render() {
        return(
            <div className="navbar-container">
                <div className="nav-element">
                    <Link to='/'>Kezdőlap</Link>
                </div>
                <div className="nav-element">
                    <Link to='/idopont'>Időpont</Link>
                </div>
                
                <div className="nav-element">
                    <Link to='/tapasztalat'>Tapasztalat</Link>
                </div>
            </div>
        )
    }
}


export default Navbar;