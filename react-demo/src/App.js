
import React from 'react';
import Footer from './components/footer/footer.js';
import './components/footer/footer.css';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

import axios from 'axios';
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
      formValues: {},
      results: [
        { text: "Do something nice for McKesia" },
        { text: "Send her flowers" }
      ]
    }
  }

  fetchData = async (options) => {
    const response = await axios({
      method: options.method || "get",
      url: options.url,
      data: options.body && JSON.parse(options.body)
    });
    const results = response.data.results;
    this.setState({ results });
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
        <Form handler={this.fetchData} />
        < button onClick={this.fetchData}>Go!</button>
        <div>
          <input type="text" onChange={this.handleChangeInput} />
        </div>
        <Results list={this.state.results} />
        <Footer />
      </>
    );
  }
}


export default App;
