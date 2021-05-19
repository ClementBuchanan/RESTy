import React from 'react';
import './results.css';

import JSONPretty from 'react-json-pretty';

export default function Results(props) {
  console.log(props.show);
  if (props.show) {
    return (
      <article>
        <ul className="selected-methods">
          <li></li>
        </ul>
        <ul>
          <li>Count</li>
          <li><JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></li>
          <li>Headers</li>
          <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
          <li>Results</li>
          <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>
        </ul>
      </article>
    )
  } else {
    return null;
  }
}