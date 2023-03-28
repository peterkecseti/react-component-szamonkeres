// Module imports
import React, {Component} from 'react'
// Asset imports
import petrik from '../../assets/petrik.jpg'
// Component imports
import Navbar from '../elements/Navbar';
import Footer from '../elements/Footer';

class Tapasztalat extends Component<{}>{
    render() {
        return(
        <div className=''>
            <Navbar/>
            <img src={petrik} alt="" id="petrik-img"/>
            <div className="centered">
                <table>
                    <thead>
                        <tr>
                            <td>Pro-bono bulik</td>
                            <td>Professzionális bulik</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Csibeavató, 2021. 08. 31.</td>
                            <td>Tanárkarácsony, 2021. 12. 20.</td>
                        </tr>
                        <tr>
                            <td>Karácsonyi bál, 2021. 12. 22.</td>
                            <td>Ballagás, 2022. 04. 30.</td>
                        </tr>
                        <tr>
                            <td>Farsangi mulatság, 2022. 02. 20.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
        )
    }
}


export default Tapasztalat;