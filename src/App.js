import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component{
    render(){
        const { 
            arrayOfnumbers,
            isActivated,  
            multiply, 
            objectWithInfo,
            title
        } = this.props
        const textoSegunBool = isActivated ? 'On' : 'Off'
        const mappedNumber = arrayOfnumbers.map(multiply)

        return (
            <div>
                {title}
                <p>{mappedNumber.join(', ')}</p>
                <p>{objectWithInfo.key}</p>
            </div>
        )
    }
}

class Contador extends Component {
    constructor () {
        super()
        this.state = {contador: 1}
        setInterval( () => {
            this.setState({ contador: this.state.contandor + 1})
        }, 1000)
    }
    render() {

        return <span>{ this.state.contador }</span>
    }
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Bienvenidos a este curso.</h1>
                <h2>Vamos a aprender React.</h2>
            </header>
            <Contador />
            <Text 
            arrayOfnumbers ={[2, 3, 10]}
            isActivated  
            multiply = { (number) => number * 4}
            objectWithInfo = {{ key: 'Fist value', key2 : 'Other value'}}
            number = {2}
            title = {<h1>Esto es un título</h1>}
            />
        </div>
    );
}

export default App;
