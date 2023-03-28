// Module imports
import React, {Component} from 'react'
// Component imports
import Footer from '../elements/Footer';
import Navbar from '../elements/Navbar';

interface State{
    nev ?: string,
    idopont ?: any,
    leiras ?: string
}

interface Props{}

class Idopont extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            nev : "",
            idopont : "",
            leiras : ""
        }
    }

    handleFormSubmit = () => {
        let ok = true
        if(this.state.nev!.length < 3){
            ok = false
        }
        if(this.state.idopont == 0){
            ok = false
        }
        if(this.state.leiras!.length < 3){
            ok = false
        }
        if(ok){
            window.alert('Köszönjük a megkeresést!')
        }
        else{
            window.alert('Minden mező kitöltése kötelező!')
        }
    }

    render() {
        return(
        <div className=''>
            <Navbar/>
            <form onSubmit={()=>{this.handleFormSubmit()}}>
            <div className="form-grid">
                <div>
                    <label htmlFor="">Név: </label>
                </div>
                <div>
                    <input type="text" onChange={(e)=>{this.setState({nev: e.currentTarget.value})}} />
                </div>
                <div>
                    <label htmlFor="">Rendezvény dátuma: </label>
                </div>
                <div>
                    <input type="date" onChange={(e)=>{this.setState({idopont: new Date(e.currentTarget.value)})}}/>
                </div>
                <div>
                    <label htmlFor="">Leírás: </label>
                </div>
                <div>
                    <textarea onChange={(e)=>{this.setState({leiras: e.currentTarget.value})}}/>
                </div>
                <div></div>
                <div>
                    <input type="submit" value="Küldés" />
                </div>
            </div>
            </form>
            <Footer/>
        </div>
        )
    }
}


export default Idopont;