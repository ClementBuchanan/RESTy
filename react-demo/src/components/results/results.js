
import React from 'react';
import './results.css';

import JSONPretty from 'react-json-pretty';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App-results">
        <h3 className="results-title">Results from API</h3>
        <h4 className="response-headers">Response Headers</h4>
        <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.headerData}></JSONPretty>
        <h4 className="response-body">Response Body</h4>
        <JSONPretty id="json-pretty2" className="json-pretty" data={this.props.data}></JSONPretty>
      </div>
    );
  }
}

export default Results;




// export default function Results(props) {
//   console.log(props);
//   return (
//     <>
//       <JSONPretty id="json-pretty" data={props.data.results}></JSONPretty>
//     </>
//   )
// }

  //     <ul>
  //       <li>Count</li>
  //       <li><JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></li>
  //       <li>Headers</li>
  //       <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
  //       <li>Results</li>
  //       <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>
  //     </ul> */}
  //   


// class Results extends React.Component {
//   render() {
//     return (
//       <>
//         <h2>Results: All the outputs from an API</h2>
//         <ul>
//           {
//             this.props.list.map((item, idx) =>
//               <li key={idx}>{item.text}</li>
//             )
//           }
//         </ul>
//       </>
//     )
//   }
// }

// export default Results;
