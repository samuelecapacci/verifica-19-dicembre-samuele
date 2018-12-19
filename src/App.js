import React, { Component } from 'react';
import './App.css';
import Barra from './components/barra/Barra';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {} /* oggetto photo */
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')  /* fetch alla foto con id '1' */
      .then(response => response.json())
      .then(json => this.setState({
        photo: json
      })
      )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">  {/* header con barra */}
          <Barra />
        </div>
        <div className="App-body">  {/* body con id, titolo e foto da url */}
          <div>
            <div className="id">ID: </div>{this.state.photo.id} {/* id foto preso da fetch */}
          </div>
          <div>
            <div className="title">TITLE: </div>{this.state.photo.title} {/* titolo foto preso da fetch */}
          </div>
          <div>
            <img className='indirizzo' src={this.state.photo.url} />
          </div>
        </div>
        <div className="App-footer"> {/* footer con nome e data */}
          <p className="tag">Samuele Capacci</p>
          <p className="tag">19/12/2018</p>
        </div>
      </div>
    );
  }
}

export default App;