import React from 'react';
import Footer from './footer/footer.js';
import './footer/footer.css';
import Form from './form/form.js';

class Header extends React.Component {
  render() {
    return (
      <h1>RESTy</h1>
    );
  }

}

// class Form extends React.Component {
//   render() {
//     return (
//       <Form />
//     );
//   }

// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: [],
      method: [],
      body: [],
      header: {},
      history: [],
      count: 0,
      homeTeam: "The score is now",
      visitingTeam: "to",
      home: 0,
      visitors: 0
    }
  }

  handleHomeIncrement = () => {
    let home = this.state.home + 1;
    this.setState({ home });
  }

  handleVisitorsIncrement = () => {
    let visitors = this.state.visitors + 1;
    this.setState({ visitors });
  }

  handleChangeInput = (e) => {
    // let words = e.target.value;
    this.setState({ ...this.state, words: e.target.value });
  }

  render() {
    return (
      <>
        <Header />
        <Form />
        <div>
          <div>
            {this.state.words}
          </div>
          {this.state.homeTeam} {this.state.home}
          <button onClick={this.handleHomeIncrement}>+</button>
          <div>
            <input type="text" onChange={this.handleChangeInput} />
          </div>
          {this.state.visitingTeam} {this.state.visitors}
          <button onClick={this.handleVisitorsIncrement}>+</button>
        </div>
        <Footer />
      </>
    );
  }
}


export default App;