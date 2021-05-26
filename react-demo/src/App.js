import React from 'react';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

// import History from './components/history/history.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { If, Then, Else, When } from 'react-if';
import HomePage from './components/home/homePage.js';
import HelpPage from './components/help/helpPage.js';
import HistoryPage from './components/history/historyPage.js';

import superagent from 'superagent';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      methods: [],
      body: [],
      header: {},
      history: [],
      count: 0,
      words: "This is a RESTy App",
      formValues: {},
      isLoading: false,
      initialPage: true,
      isDataVisible: false,
      results: [],
    }
  }

  showMenu = () => {
    this.setState({ isDataVisible: !this.state.isDataVisible });
  }

  updateResults = async (userInput) => {
    console.log('user entered this info', userInput);
    this.setState({
      initialPage: false,
      isLoading: true,
      urls: [...this.state.urls, userInput.urls],
      methods: [this.state.methods, userInput.methods],
    })
    const request = await fetch(userInput.urls, { methods: userInput.methods });
    const data = await request.json();

    if (data) {
      this.showMenu();
    }

    let dataInstance = {
      url: userInput.urls,
      method: userInput.methods,
      body: data,
    }

    let updateHistory = [...this.state.history, dataInstance];
    localStorage.setItem('queryHistory', JSON.stringify(updateHistory));

    await this.setState({
      body: data,
      isLoading: false,
      history: updateHistory,
    })
  }

  componentMounted() {
    let History = JSON.parse(localStorage.getItem('queryHistory')) || [];
    this.setState({ History });
  }

  fetchData = async (options) => {
    const response = await superagent({
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
    console.log(this.state.history);
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/history" component={HistoryPage}></Route>
          <Route exact path="/help" component={HelpPage}></Route>
        </BrowserRouter>
        <h1>{this.state.words}</h1>
        <Form handler={this.fetchData} updateResults={this.updateResults} />
        <main>
          <history history={this.state.history} />
          <When condition={!this.state.initial}>
            <If condition={this.state.isLoading}>
              <Then>
                <p>Data is loading...</p>
              </Then>
              <Else>
                <Results show={this.state.isDataVisible} data={this.state} />
              </Else>
            </If>
          </When>
        </main>
        < button onClick={this.fetchData}>Go!</button>
        <div>
          <input type="text" onChange={this.handleChangeInput} />
        </div>
        <Results data={this.state} />
        <Footer />
      </div>
    );
  }
}


export default App;
