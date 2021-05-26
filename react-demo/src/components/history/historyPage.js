import React from 'react';
import './historyPage.css';
import History from './history';
import Results from '../results/results.js';

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      results: {}
    };
  }
  transferHistory = (entry) => {
    this.setState({ ...this.state, results: entry.data });
  }
  mountedComponent() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    this.setState({ History })
  }

  render() {
    return (
      <div className="historyWrapper">
        <div className="historyOutput">
          <History transfer={this.transferHistory} history={this.state.history} />
          <Results data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default HistoryPage;