import React from 'react';
import Footer from './footer/footer.js';
import './footer/footer.css';

class Header extends React.Component {
  render() {
    return (
      <h1>This is a React version control</h1>
    );
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeTeam: "The score is now",
      visitingTeam: "to",
      home: 0,
      visitors: 0
    };
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