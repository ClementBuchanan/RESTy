
import React from 'react';

import './history.css';

export default function History(props) {
  // console.log(props);
  return (
    <div className="history">
      <ul>
        {props.history.map((item, idx) =>
          <li key={idx}>
            <span className={`method ${item.method}`}>{`${item.method}`}</span>
            <button className='url-history'>{`${item.url}`}</button>
          </li>
        )}
      </ul>
    </div>
  )
}