import React from 'react';
import Form from './components/form/form.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Results from './components/results/results.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      resultsHeader: '',
      resultsBody: '',
      history: [],
    }
  }

  updateResults = (data, headerData, item) => {
    this.setState({
      resultHeader: headerData,
      resultsBody: data,
      history: [item, ...this.state.history],
    });
  }

  render() {
    console.log(this.state.history);
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <Form updateResults={this.updateResults} />
          <Results data={this.state.resultsBody} headerData={this.state.resultHeader} />
          {this.state.history.map((historyItem, idx) => <li key="idx"><button className={historyItem.methodClass}>{historyItem.method}</button> {historyItem.url}</li>)}

        </main>
        <Footer />
      </div>
    )
  }
}
export default App;
