
import React from 'react';

class Results extends React.Component {
  render() {
    return (
      <>
        <h2>Results: All the outputs from an API</h2>
        <ul>
          {
            this.props.list.map((item, idx) =>
              <li key={idx}>{item.text}</li>
            )
          }
        </ul>
      </>
    )
  }
}

export default Results;
