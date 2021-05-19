import React from 'react';
import Footer from './components/footer/footer.js';
import './components/footer/footer.css';
import Form from './components/form/form.js';
// import Results from './components/results/results.js';

import './App.css';

class Header extends React.Component {
  render() {
    return (
      <h1>RESTy</h1>
    );
  }

}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: [],
      method: [],
      body: [],
      header: {},
      clicks: 0,
      words: "The score is now 32",
      formValues: {}
    }
  }

  handleClickIncrement = () => {
    let clicks = this.state.clicks + 1;
    this.setState({ clicks });
  }

  handleChangeInput = (e) => {
    this.setState({ ...this.state, words: e.target.value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, words: this.state.words })
  }

  render() {
    return (
      <>
        <Header />
        <h1>{this.state.words}</h1>

        < button onClick={this.handleChangeInput}>Go!</button>
        <div>
          <Form onSubmit={this.handleChangeInput} />
          <input type="text" onChange={this.handleChangeInput} />
        </div>
        {/* { { this.state.clicks } */}


        <Footer />
      </>
    );
  }
}


export default App;
