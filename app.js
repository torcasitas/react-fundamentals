import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id:1, name: "Simon Bailey"}, {id: 2, name: "Thomas Burleson"},
      {id:3, name: "Bailey Calahan"}, {id: 4, name: "Pepe Perron"},
      {id:5, name: "Juan Camaney"}, {id: 6, name: "Aquiles Baeza Quieta"},
      {id:7, name: "Poncho Pilatos"}, {id: 8, name: "Alma Maria Calvo"},
      {id:9, name: "Tela Dejuiré"}, {id: 10, name: "Medas Elhoyon"},
      {id:11, name: "Telas Poncho"}, {id: 12, name: "Kika Briones"}
    ]};
  }

  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id } data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }

}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}


export default App;