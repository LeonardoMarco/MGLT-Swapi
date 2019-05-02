import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      startships: [],
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/')
      .then(res => this.setState({ startships: res.data.results }))
      .catch(res => console.log(res));
  }

  onChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div className="app">
        <img src="https://ui-ex.com/images/transparent-font-star-wars-2.png" width="250" />
        <div className="card">
          <div className="cardHeader">
            <input
              type="number"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Digite aqui a distância em mega lights(MGLT)"
            />
          </div>
          <div className="cardContent">
            <table>
              <tr>
                <th>Nome</th>
                <th>Modelo</th>
                <th>Paradas</th>
              </tr>
                {this.state.startships.map((name, i) => {
                  return (
                    <tr>
                      <td key={i}> {name.name}</td>
                      <td>{name.model}</td>
                      <td>{Math.trunc(this.state.value / name.MGLT)}</td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
