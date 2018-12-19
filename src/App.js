import React, { Component } from 'react';
import './App.css';
import Barra from './components/barra/Barra';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(json => this.setState({
        photo: json
      })
      )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Barra />
        </div>
        <div className="App-body">
          <div>
            <div className="id">ID: </div>{this.state.photo.id}
          </div>
          <div>
            <div className="title">TITLE: </div>{this.state.photo.title}
          </div>
          <div>
            <img className='indirizzo' src={this.state.photo.url} />
          </div>
        </div>
        <div className="App-footer">
        <p className="tag">Samuele Capacci</p>
        <p className="tag">19/12/2018</p>
        </div>
      </div>
    );
  }
}

export default App;
